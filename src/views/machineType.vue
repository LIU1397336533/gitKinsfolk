<template>
  <div class="machineType">
    <div class="machineType-top">
      <div class="nav">
        <i class="icon iconfont icon-icon-arrow-left2" @click="backHome"></i>
        <span class="nav-tit">组织结构</span>
        <i class="icon iconfont icon-lingdang1" @click="backHome"></i>
      </div>
      <div class="search">
        <input
          type="text"
          class="search-ipt"
          placeholder="按名称过滤"
          v-model="searchValue"
        />
      </div>
    </div>
    <div class="navigateTree">
      <!-- 第一级标题 -->
      <div
        class="navigateTree-two"
        v-for="(item, index) in navigateTreeData"
        :key="index"
        @click="twoOpen(index)"
        v-show="isActive"
      >
        <i class="icon iconfont icon-xiangxia1" v-if="isShow"></i>
        <i class="icon iconfont icon-xiangshang1" v-else></i>
        <span>{{ item.name }}</span>
        <!-- 标题下内容 -->
        <div
          class="navigateTree-three"
          v-for="(items, index) in item.children"
          :key="index"
          v-show="isShow"
        >
          <p @click="toLocale(items.name,item.id)">{{ items.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getNavigateTree } from "@/assets/common/httpApi";
export default {
  name: "machineType",
  data() {
    return {
      isActive: true,
      isShow: true,
      searchValue: null,
      navigateTreeData: this.$route.query.data || [],
      index: ""
    };
  },
  methods: {
    twoOpen(index) {
      this.isShow = !this.isShow;

      console.log(index, this.index);
      if (index === this.index) {
        this.isShow = !this.isShow;
      }
    },
    //返回上一级
    backHome() {
      this.$router.go(-1);
    },
    //跳转toLocale页面
    toLocale(name,id) {
      console.log(name,id);
      this.$router.push({ path: "/newMachine", query: { name,id } });
    }
  },
  mounted() {}
};
</script>
<style lang="less">
.machineType {
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f1f1f3;
  }
  .machineType-top {
    width: 100%;
    position: fixed;
    top: 0;
    height: 192px;
    .nav {
      height: 98px;
      background: #2a87fe;
      color: #fff;
      display: flex;
      line-height: 98px;
      .nav-tit {
        font-size: 38px;
        font-weight: 800;
        margin: 0 365px 0 73px;
      }
      > i {
        font-size: 51px;
      }
    }
    .search {
      height: 79px;
      margin: 16px 0;
      padding: 0 16px;

      .search-ipt {
        font-size: 30px;
        width: 100%;
        height: 79px;
        background: #ccc;
        border: none;
        outline: none;
        text-align: center;
      }
    }
  }

  .navigateTree {
    margin-top: 200px;
    display: flex;
    height: 100%;
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
    background: #fff;
    font-size: 31px;

    .navigateTree-one {
      text-align: left;
      padding-top: 51px;
      box-sizing: border-box;
      .navigateTree-one-tit {
        color: #2a87fe;
      }
      .icon-xiangshang1,
      .icon-xiangxia1 {
        color: #a8a8aa;
        font-size: 25px;
      }
    }
  }
  .navigateTree-two {
    width: 100%;
    color: #a9a9a9;
    .icon-xiangshang1,
    .icon-xiangxia1 {
      color: #a8a8aa;
      font-size: 25px;
    }
    padding: 64px 0 24px 20px;
    text-align: left;
    box-sizing: border-box;
    .navigateTree-three {
      color: #373737;
      padding-left: 50px;
      box-sizing: border-box;
      text-align: left;
      margin-top: 30px;
    }
  }
}
</style>
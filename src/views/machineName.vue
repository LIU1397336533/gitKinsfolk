<template>
  <div class="machineName">
    <div class="nav">
      <i class="icon iconfont icon-icon-arrow-left2" @click="backHome"></i>
      <span class="nav-tit">新增机械</span>
      <i class="icon iconfont icon-lingdang1" @click="backHome"></i>
    </div>
    <div class="main">
      <div
        v-for="(item, index) in mechineName"
        :key="index"
        @click="toNewMachine(item.name, item.specification)"
      >
        <p>
          <span>{{ item.name }}</span>
          <span>{{ item.specification }}</span>
        </p>
        <p>单位：{{ item.unit }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "machineName",
  data() {
    return {
      a: 1,
      mechineName: this.$route.query.data
    };
  },
  methods: {
    //返回上一级
    backHome() {
      this.$router.go(-1);
    },
    toNewMachine(machineName, specification) {
      console.log(machineName, specification);
      this.$router.push({ path: "/newMachine", query: { machineName, specification } });
    }
  }
};
</script>
<style lang="less">
.machineName {
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
  .main {
    padding: 0 32px;
    flex: 1;
    box-sizing: border-box;
    overflow-y: scroll;
    > div {
      display: flex;
      justify-content: space-between;
      line-height: 120px;
      height: 120px;
      border-bottom: 1px solid #dedede;
      > p {
        display: flex;
        font-size: 35px;
      }
    }
  }
}
</style>
<template>
  <div class="locale">
    <div class="top">
      <div class="nav">
        <i class="icon iconfont icon-caidan2"></i>
        <p class="nav-tit">现场机械管理系统</p>
        <i class="icon iconfont icon-lingdang1"></i>
      </div>
      <div class="title" @click="toOrganization">
        <span>{{ title }}</span>
        <i class="icon iconfont icon-icon11"></i>
      </div>
    </div>

    <div class="todo">
      <i class="icon iconfont icon-saoma"></i>
      <input
        type="text"
        class="search-ipt"
        placeholder="搜索机械名称/规格型号/项目设备编码
"
      />
      <i class="icon iconfont icon-shaixuan"></i>
    </div>
    <div class="RegistrationList">
      <div class="RegistrationList-tit">
        <span :class="isActive == 1 ? 'active' : ''" @click="onTabs(1)"
          >全部</span
        >
        <span :class="isActive == 2 ? 'active' : ''" @click="onTabs(2)"
          >未申报</span
        >
        <span :class="isActive == 3 ? 'active' : ''" @click="onTabs(3)"
          >待审核</span
        >
      </div>
      <div class="RegistrationList-box" v-if="isActive == 1">
        <div class="RegistrationList-scroll">
          <div
            class="RegistrationList-list"
            v-for="(item, index) in mechanicalListData"
            :key="index"
            @click="viewDetails"
          >
            <div class="one-row">
              <span class="use-status">使用中</span>
              <span class="machineryName">{{ item.machineryTypeName }}</span>
            </div>
            <div class="two-row">
              <span class="projectEquipmentCode">{{
                item.projectEquipmentCode
              }}</span>
              <span class="type-name">特种</span>
              <span class="type-tip">信息未完善</span>
            </div>
            <div class="three-row">
              <span class="projectName">{{ item.projectName }}</span>
              <span class="actualApproachDate"
                >进场时间:{{ item.createTime }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="isActive == 2">2</div>
      <div v-else-if="isActive == 3">3</div>
    </div>
    <div class="footer">
      <p class="inspect-btn">
        <i class="icon iconfont icon-cz-qkjc"></i>
        <span>日常检查</span>
      </p>
      <p class="add-btn" @click="toNewMachine">+</p>
      <p class="work-btn">
        <i class="icon iconfont icon-cz-qkjc"></i>
        <span>吊装作业</span>
      </p>
    </div>
  </div>
</template>
<script src="https://unpkg.com/mint-ui/lib/index.js"></script>
import { Indicator } from 'mint-ui';
<script>
import { getmechanicalList } from "@/assets/common/httpApi";
export default {
  props: { name },
  data() {
    return {
      title: this.$route.query.name,
      mechanicalListData: {},
      loading: true,
      list: [1, 2, 3, 4],
      isActive: "1"
    };
  },
  methods: {
    toNewMachine() {
      this.$router.push({ path: "/newMachine" });
    },
    //tabs切换
    onTabs(e) {
      this.isActive = e;
    },
    handleClick() {
      console.log(1);
    },
    // 查看详情
    viewDetails() {
      this.$router.push({ path: "/record" });
    },

    //跳转组织结构页面
    toOrganization() {
      this.$router.push("/organization");
    },
    // 请求数据列表

    async getmechanicalList() {
      let getmechanicalListData = await getmechanicalList();
      console.log(getmechanicalListData.data.result.content);
      this.mechanicalListData = getmechanicalListData.data.result.content;
    }
  },
  async mounted() {
    this.getmechanicalList(); // 调用请求数据列表
  }
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.locale {
  background: #2a87fe;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;

  .top {
    width: 100%;
    .nav {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 91px;
      background: #2a87fe;
      font-size: 35px;
      color: #fff;
      .nav-tit {
        font-size: 35px;
      }
      .icon-lingdang1 {
        color: #fff;
        font-size: 50px;
      }
      .icon-caidan2 {
        color: #fff;
        font-size: 35px;
      }
    }
    .title {
      background: #2a87fe;
      height: 84px;
      line-height: 84px;
      color: #fff;
      text-align: center;
      font-size: 33px;
      .icon-icon11 {
        font-size: 33px;
      }
    }
  }

  .todo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    line-height: 56px;
    background: #fff;
    margin: 20px 0;
    padding: 0 20px;
    box-sizing: border-box;
    > i {
      font-size: 45px;
      color: #888888;
    }
    .search-ipt {
      font-size: 30px;
      width: 100%;
      height: 47px;
      background: #f8f8f8;
      border: none;
      outline: none;
      text-align: center;
    }
  }
  .RegistrationList {
    background: #fff;
    padding: 0 33px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    .RegistrationList-tit {
      display: flex;
      justify-content: space-around;
      line-height: 95px;
      height: 95px;
      text-align: left;
      font-size: 30px;

      > span {
        width: 190px;
        text-align: center;
        line-height: 95px;
      }
      .active {
        color: #40a4d6;
        font-weight: 600;
        border-bottom: 4px solid #40a4d6;
      }
    }
    .RegistrationList-box {
      flex: 1;
      overflow-y: scroll;
      .RegistrationList-scroll {
        height: 2000px;
        .RegistrationList-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: space-between;
          height: 217px;
          border-bottom: 1px solid #e2e2e0;
          box-sizing: border-box;
          .one-row {
            height: 37px;
            margin-bottom: 22px;
            display: flex;
            .use-status {
              margin-right: 9px;
              display: inline-block;
              height: 37px;
              border-radius: 5px;
              font-size: 19px;
              width: 77px;
              text-align: center;
              color: #fff;
              line-height: 37px;
              background: #2389f8;
              box-sizing: border-box;
            }
            .machineryName {
              height: 37px;
              font-size: 30px;
              font-weight: 700;
            }
          }
          .two-row {
            display: flex;
            margin-bottom: 27px;
            height: 30px;
            .projectEquipmentCode {
              color: black;
            }
            .type-name {
              width: 65px;
              height: 30px;
              background: #f3e1fd;
              border: 2px solid #5800f0;
              border-radius: 20px;
              padding: 0 14px;
              margin: 0 11px;
            }
            .type-tip {
              display: inline-block;
              width: 128px;
              height: 30px;
              background: #fffeff;
              border: 2px solid #aeaeae;
              color: #aeaeae;
              border-radius: 20px;
              padding: 0 9px;
            }
          }
          .three-row {
            display: flex;
            margin-bottom: 10px;
            color: #545555;
            font-size: 27px;
            height: 30px;
            display: flex;
            justify-content: space-between;
            .projectName {
              color: #545555;
            }
            .actualApproachDate {
              color: #545555;
              font-size: 27px;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 110px;
    background: #f6f6f8;
    font-size: 34px;
    .inspect-btn {
      color: #2d86fd;
      > i {
        font-size: 30px;
      }
    }
    .add-btn {
      width: 95px;
      height: 95px;
      background: #2d86fd;
      font-size: 45px;
      border-radius: 50%;
      text-align: center;
      line-height: 95px;
      color: #fff;
    }
    .work-btn {
      color: #2d86fd;
      > i {
        font-size: 30px;
      }
    }
  }
}
</style>

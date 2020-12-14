<template>
  <div class="home">
    <div class="nav">
      <i class="icon iconfont icon-caidan2"></i>
      <p class="nav-tit">现场机械管理系统</p>
      <i class="icon iconfont icon-lingdang1"></i>
    </div>
    <div class="title" @click="toOrganization">
      <span>地铁12号线建设工程</span>
      <i class="icon iconfont icon-icon11"></i>
    </div>
    <div class="todo">
      <p class="todo-left">待办事项</p>
      <p class="todo-right">·待审核机械40</p>
    </div>
    <div class="RegistrationList">
      <div class="RegistrationList-tit">最新登记机械</div>
      <div class="RegistrationList-box">
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
    </div>
  </div>
</template>
<script>
import { getmechanicalList } from "@/assets/common/httpApi";

export default {
  data() {
    return {
      num: "1",
      mechanicalListData: {},
      loading: true
    };
  },
  methods: {
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
#app {
  height: 100%;
  overflow: hidden;
}
.home {
  width: 100%;
  height: 100vh;
  background: #2988ff;
  padding: 0 18px;
  box-sizing: border-box;
  overflow: hidden;
  .nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 91px;
    background: #2a87fe;
    font-size: 35px;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    .nav-tit {
      font-weight: 900;
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
    margin-top: 91px;
    height: 84px;
    line-height: 84px;
    color: #fff;
    text-align: center;
    font-size: 33px;
    .icon-icon11 {
      font-size: 33px;
    }
  }
  .todo {
    display: flex;
    justify-content: space-between;
    height: 85px;
    line-height: 85px;
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 0 23px;
    box-sizing: border-box;
    .todo-left {
      color: #282826;
    }
    .todo-right {
      color: #f62d2a;
      font-weight: 700;
    }
  }
  .RegistrationList {
    display: flex;
    flex-direction: column;
    border-radius: 20px 20px 0 0;
    background: #fff;
    height: 100%;
    padding: 0 33px;
    box-sizing: border-box;

    .RegistrationList-tit {
      line-height: 95px;
      height: 95px;
      font-weight: 800;
      text-align: left;
      font-size: 30px;
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
}
</style>

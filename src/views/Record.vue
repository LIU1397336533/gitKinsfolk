<template>
  <div class="record">
    <div class="nav">
      <i class="icon iconfont icon-icon-arrow-left2" @click="backHome"></i>
      <span class="nav-tit">机械档案</span>
      <i class="icon iconfont icon-lingdang1" @click="backHome"></i>
    </div>
    <main>
      <div class="record">
        <p class="introduce">
          <span class="used">使用中</span><span>土压泥水双模盾构机</span
          ><span>直径6.66m</span>
        </p>
        <p class="type">
          <span>DGJ-08-057-Z097</span><span class="type_two">大型</span
          ><i>信息未完善</i>
        </p>
        <div class="date">
          <p>
            <span>所属工点:大北~大南.</span>
            <span>进场日期: 2020-10-27</span>
          </p>
          <p>
            <span>申报人:梁路路</span>
            <span>申报时间: 2020-10-27 11:03</span>
          </p>
        </div>
      </div>
      <div class="tabs">
        <span :class="isActive == 1 ? 'active' : ''" @click="onTabs(1)"
          >设备信息</span
        >
        <span :class="isActive == 2 ? 'active' : ''" @click="onTabs(2)"
          >设备资料</span
        >
        <span :class="isActive == 3 ? 'active' : ''" @click="onTabs(3)"
          >检查及维保</span
        >
        <span :class="isActive == 4 ? 'active' : ''" @click="onTabs(4)"
          >更多信息</span
        >
      </div>
      <div class="tabs_content">
        <div class="tabs_content-box" v-if="isActive == 1">
          <div class="basic">
            <p>基本信息</p>
            <p>
              <span>机械名称</span>
              <span>土压泥水双模盾构机</span>
            </p>
            <p>
              <span>规格型号</span>
              <span>直径6.66m</span>
            </p>
            <p>
              <span>项目设备编码</span>
              <span>DGJ-08-057-Z097</span>
            </p>
            <p>
              <span>属性</span>
              <span>大</span>
            </p>
            <div>
              <button
                class="search_btn"
                @click="searchMore"
                v-if="moreShow == false"
              >
                查看更多
              </button>
            </div>
            <div class="more" v-show="moreShow">
              <p>
                <span> 来源</span>
                <span>租赁(临时)</span>
              </p>
              <p>
                <span> 产权单位</span>
                <span>广州市建筑科学研究院新技术</span>
              </p>
              <p>
                <span> 开发中心有限公司</span>
                <span></span>
              </p>
              <p>
                <span>车牌号</span>
                <span></span>
              </p>
              <p>
                <span>现场照片</span>
                <span></span>
              </p>
            </div>
          </div>
          <div class="basic">
            <p>使用信息</p>
            <p>
              <span>实际进场日期</span>
              <span>2020-10-27</span>
            </p>
            <p>
              <span>拟退场日期</span>
              <span></span>
            </p>
            <p>
              <span>设备管理员</span>
              <span>梁路路</span>
            </p>
            <p>
              <span>使用单位</span>
              <span>广州市建筑科学研究院新技术</span>
            </p>
            <div>
              <button
                class="search_btn"
                @click="searchMore"
                v-if="moreShow == false"
              >
                查看更多
              </button>
            </div>
          </div>
          <div class="basic">
            <p>出厂信息</p>
            <p>
              <span>出厂编号</span>
              <span>CREC929</span>
            </p>
            <p>
              <span> 出厂日期</span>
              <span>直径6.66m</span>
            </p>
            <p>
              <span>已使用年限</span>
              <span>DGJ-08-057-Z097</span>
            </p>
            <p>
              <span>生产厂商</span>
              <span>大</span>
            </p>
            <p>
              <span>设备识别码(后6位)</span>
              <span>大</span>
            </p>
            <p>
              <span>备注</span>
              <span>大</span>
            </p>
          </div>
          <div class="basic">
            <p>保险信息</p>
            <p>
              <span>出厂编号</span>
              <span>CREC929</span>
            </p>
            <p>
              <span> 出厂日期</span>
              <span>直径6.66m</span>
            </p>
          </div>
          <div class="basic">
            <p>第三方检测报告</p>
            <p>
              <span>出厂编号</span>
              <span>CREC929</span>
            </p>
            <p>
              <span> 出厂日期</span>
              <span>直径6.66m</span>
            </p>
            <p>
              <span>已使用年限</span>
              <span>DGJ-08-057-Z097</span>
            </p>
            <p>
              <span>生产厂商</span>
              <span>大</span>
            </p>
          </div>
          <div class="basic">
            <p>本次维修信息</p>
            <p>
              <span>出厂编号</span>
              <span>CREC929</span>
            </p>
            <p>
              <span> 出厂日期</span>
              <span>直径6.66m</span>
            </p>
            <p>
              <span>已使用年限</span>
              <span>DGJ-08-057-Z097</span>
            </p>
            <p>
              <span>生产厂商</span>
              <span>大</span>
            </p>
          </div>
          <div class="basic">
            <p>作业人员</p>
          </div>
        </div>
        <div v-else-if="isActive == 2">2</div>
        <div v-else-if="isActive == 3">3</div>
        <div v-else-if="isActive == 4">4</div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: 1,
      moreShow: false
    };
  },
  methods: {
    //返回home页
    backHome() {
      this.$router.push({ path: "/" });
    },
    //tabs切换
    onTabs(e) {
      this.isActive = e;
    },
    // 查看更多
    searchMore() {
      this.moreShow = !this.moreShow;
      console.log(1);
    }
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.nav {
  width: 100%;
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

main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .record {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: 355px;
    padding: 49px 53px 52px 29px;
    box-sizing: border-box;

    > p {
      display: flex;
      height: 42px;
      margin-top: 13px;
      font-size: 25px;
    }

    .introduce {
      display: flex;
      font-size: 25px;
      margin-bottom: 15px;
      .used {
        width: 87px;
        height: 46px;
        display: inline-block;
        background: #1d85ff;
        color: #fff;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
        line-height: 46px;
        margin-right: 6px;
      }
    }

    .type {
      display: flex;
      align-items: center;
      font-size: 22px;
      color: #959595;
      height: 40px;
      margin-bottom: 41px;
      .type_two {
        width: 68px;
        height: 37px;
        display: inline-block;
        border: solid 1px #5a0eb7;
        color: #5a0eb7;
        border-radius: 15px;
        text-align: center;
        margin-left: 7px;
      }

      i {
        width: 130px;
        height: 37px;
        display: inline-block;
        border: solid 1px #ccc;
        color: #ccc;
        border-radius: 20px;
        text-align: center;
        margin-left: 0.07px;
      }
    }

    .date {
      display: flex;
      height: 22px;
      flex-direction: column;
      justify-content: space-between;
      font-size: 22px;
      > p {
        font-size: 22px;
        display: flex;
        margin-bottom: 30px;

        > span {
          margin-right: 30px;
          font-size: 22px;
          color: #4f4f4f;
        }
      }
    }
  }

  .tabs {
    width: 100%;
    display: flex;
    height: 95px;
    line-height: 96px;
    font-size: 25px;
    > span {
      width: 188px;
      font-size: 25px;
      color: #636363;
      text-align: center;
    }

    .active {
      color: #40a4d6;
      border-bottom: 4px solid #40a4d6;
    }
  }

  .tabs_content {
    background-color: #f5f5f5;
    overflow-y: scroll;
    .tabs_content-box {
      .basic {
        padding: 53px 0 50px 35px;
        display: flex;
        flex-direction: column;
        background: #ffffff;
        border-radius: 9px;
        margin-bottom: 10px;
        font-size: 25px;
        > p {
          margin-bottom: 40px;
          height: 30px;
          text-align: left;
          &:first-child {
            color: #000000;
            font-weight: bolder;
          }

          > span {
            &:first-child {
              display: inline-block;
              width: 174px;
            }
          }
        }
      }

      > div {
        .search_btn {
          border: none;
          outline: none;
          width: 246px;
          height: 43px;
          border-radius: 9px;
          background-color: #f2f2f2;
          font-size: 20px;
        }

        .more {
          > p {
            display: flex;
            margin-bottom: 40px;
            height: 30px;
            text-align: left;
            > span {
              display: inline-block;
              width: 174px;
              &:nth-of-type(2) {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
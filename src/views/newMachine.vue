<template>
  <div class="newMachine">
    <div class="nav">
      <i class="icon iconfont icon-icon-arrow-left2" @click="backHome"></i>
      <span class="nav-tit">新增机械</span>
      <i class="icon iconfont icon-lingdang1" @click="backHome"></i>
    </div>
    <div class="step-box">
      <div class="step-line">
        <p class="checked"></p>
        <p></p>
        <p></p>
      </div>
      <div class="step-tit">
        <p class="step-tit-left">基本信息</p>
        <p>完善信息</p>
      </div>
    </div>
    <div class="cell-box">
      <div class="tip">
        <p><span class="red-x">*</span><span>红色型号为必填项</span></p>
        <p><span class="blue-x">*</span><span>蓝色星号为完善项</span></p>
        <p>x</p>
      </div>
      <div>
        <div class="cell-option" @click="toMachineType">
          <p><span>机械类别</span><span>*</span></p>
          <p>
            <span>{{ machineType ? machineType : "请选择" }}</span>
            <i class="icon iconfont icon-toRight-fill"></i>
          </p>
        </div>
        <div class="cell-option" @click="toMachineName">
          <p><span>机械名称-型号</span><span>*</span></p>
          <p>
            <span>{{ machineName ? machineName : "请选择" }}</span>
            <i class="icon iconfont icon-toRight-fill"></i>
          </p>
        </div>
        <div class="cell-option">
          <p><span>机械来源</span><span>*</span></p>
          <p>
            <span>请选取</span>
            <i class="icon iconfont icon-toRight-fill"></i>
          </p>
        </div>
        <div class="cell-option">
          <p><span>项目设备编号</span><span>*</span></p>
          <p>
            <span>请选取</span>
            <i class="icon iconfont icon-toRight-fill"></i>
          </p>
        </div>
        <div class="cell-option">
          <p><span>机械来源</span><span>*</span></p>
          <p>
            <span>请选取</span>
            <i class="icon iconfont icon-toRight-fill"></i>
          </p>
        </div>
        <div class="cell-option">
          <p><span>机械类别</span><span>*</span></p>
          <p>
            <span>请选取</span>
            <i class="icon iconfont icon-toRight-fill"></i>
          </p>
        </div>
        <div class="cell-option">
          <p><span>机械类别</span><span>*</span></p>
          <p>
            <span>请选取</span>
            <i class="icon iconfont icon-toRight-fill"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCategory, getNames } from "../assets/common/httpApi";
export default {
  name: "newMachine",
  data() {
    return {
      machineType: this.$route.query.name,
      machineName: this.$route.query.machineName + this.$route.query.specification
    };
  },
  methods: {
    //返回上一级
    backHome() {
      this.$router.go(-1);
    },
    //点击获取机械类型数据
    async toMachineType() {
      let res = await getCategory();
      console.log(res);
      this.$router.push({
        path: "/machinetype",
        query: { data: res.data.result }
      });
    },
    async toMachineName() {
      let res = await getNames({ id: "1230029003514249217" });
      console.log(res.data.data.result.records);
      this.$router.push({
        path: "/machineName",
        query: { data: res.data.data.result.records }
      });
    }
  }
};
</script>
<style lang="less">
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
.step-box {
  margin-top: 43px;
  .step-line {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    > p {
      &:nth-of-type(1) {
        width: 25px;
        height: 25px;
        background: #d9d9d9;
        border-radius: 50%;
      }
      &:nth-of-type(2) {
        width: 468px;
        height: 4px;
        background: #d9d9d9;
        margin: 0 20px;
      }
      &:nth-of-type(3) {
        width: 25px;
        height: 25px;
        background: #d9d9d9;
        border-radius: 50%;
      }
    }
    .checked {
      border: 10px solid #d7e4f9;
      background: #268afd !important;
    }
  }
  .step-tit {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 31px;
    color: #333436;
    .step-tit-left {
      margin-right: 422px;
    }
  }
}
.cell-box {
  padding: 0 20px;
  box-sizing: border-box;
  .tip {
    margin:  10px 0;
    display: flex;
    height: 46px;
    border: 2px solid#debc56;
    background: #fff1d6;

    > p {
      line-height: 46px;
      font-size: 25px;
      &:nth-of-type(1) {
        margin-left: 22px;
      }
      &:nth-of-type(2) {
        margin-left: 32px;
        margin-right: 168px;
      }
      .red-x {
        color: red;
      }
      .blue-x {
        color: blue;
      }
    }
  }
  .cell-option {
    display: flex;
    justify-content: space-between;
    height: 115px;
    line-height: 115px;
    font-size: 28px;
    border-bottom: 1px solid #939393;
    > p {
      &:nth-of-type(1) {
        > span {
          &:nth-of-type(1) {
            color: #363636;
          }
          &:nth-of-type(2) {
            color: red;
          }
        }
      }
      &:nth-of-type(2) {
        color: #939393;
        > i {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="head">
    <!-- <router-link to="/login">退出</router-link> -->
    <div class="box">
      <button @click="loginout">退出</button>
    </div>
  </div>
</template>

<script>
import { resetRouter } from "@/router";
export default {
  methods: {
    loginout() {
      resetRouter(); //重置路由
      this.$router.replace({
        name: "Login"
      });
    }
  }
};
</script>

<style lang='scss'>
.head {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  flex: 1;
  .box {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
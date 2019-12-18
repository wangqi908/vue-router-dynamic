<template>
  <div class="layout">
    <app-menu />
    <div class="main">
      <app-head />
      <app-main />
    </div>
  </div>
</template>

<script>
import AppMain from "./AppMain.vue";
import { AppMenu, AppHead } from "@/components";
export default {
  components: { AppMain, AppMenu, AppHead }
};
</script>

<style lang='scss'>
.layout {
  display: flex;
  .main {
    border: 1px solid #000;
    flex: 1;
  }
}
</style>
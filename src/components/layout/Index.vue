<template>
  <div class="layout">
    <app-menu />
    <div>
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

<style>
.layout {
  display: flex;
}
</style>
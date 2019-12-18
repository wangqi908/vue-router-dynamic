<template>
  <div class="menu">
    
    <div class="main" v-for="(item, index) in menuList" :key="index">
      <router-link :to="item.meta.url">{{item.meta.name}}</router-link>
      <div class="sub" v-for="(sub, index) in item.children" :key="index">
        <router-link :to="sub.meta.url">{{sub.meta.name}}</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    let { menuList } = this;
  },
  computed: {
    ...mapState(["menuList"])
  }
};
</script>

<style lang='scss'>
.menu {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  .main{
    border: 1px solid #000;
    padding: 10px;
  }
  .sub{
    border: 1px solid rgb(161, 166, 241);
  }
}
</style>
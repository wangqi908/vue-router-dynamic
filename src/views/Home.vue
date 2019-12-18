<template>
  <div class="home">
    <h1>首页</h1>
    <div>
      <h3>配置菜单</h3>
      <input type="checkbox" id="About" value="About" v-model="checkedNames">
      <label for="About">About</label>
      <input type="checkbox" id="Info" value="Info" v-model="checkedNames">
      <label for="Info">Info</label>
      <input type="checkbox" id="Role" value="Role" v-model="checkedNames">
      <label for="Role">Role</label>
      <input type="checkbox" id="User" value="User" v-model="checkedNames">
      <label for="User">User</label>
      <input type="checkbox" id="Shop" value="Shop" v-model="checkedNames">
      <label for="Shop">Shop</label>
      <br>
      <span>权限 {{ checkedNames }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {
      checkedNames: this.$store.state.roles
      // checkedNames: this.roles
    };
  },
  methods: {
    ...mapMutations(["setRoles"])
  },
  computed: {
    ...mapState(['roles'])
  },
  watch: {
    checkedNames: {
      handler(val) {
        this.setRoles(val);
      },
      deep: true
    }
  }
};
</script>

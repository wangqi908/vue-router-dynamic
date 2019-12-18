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
    <div>
      <h3>自定义指令控制元素的权限</h3>
      <button>都可看到</button>
      <button v-role-show="['Home']">Home</button>
      <button v-role-show="['About']">About</button>
      <button v-role-show="['About','Info']">About或Info</button>
      <button v-role-show="['Info']">Info</button>
      <button v-role-show="['Role']">Role</button>
      <button v-role-show="['User']">User</button>
      <button v-role-show="['Shop']">Shop</button>
    </div>
  </div>
</template>

<script>
import roleShow from "@/directive/roles-show";
import { mapMutations } from "vuex";
export default {
  name: "home",
  directives: {
    roleShow
  },
  data() {
    return {
      checkedNames: this.$store.state.roles
    };
  },
  methods: {
    ...mapMutations(["setRoles"])
  },
  computed: {},
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

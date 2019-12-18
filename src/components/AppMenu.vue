<template>
  <div class="menu">
    <router-link to="/">首页</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/info/role">role</router-link>
    <router-link to="/info/user">user</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.menu{
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
}
</style>
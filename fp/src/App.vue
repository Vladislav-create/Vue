<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Я ВЬЮ" />
    <MyExp />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyExp from "./components/MyExp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MyExp,
  },
  data() {
    return {
      arr: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

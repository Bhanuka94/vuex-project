<template>
  <div>
    <h1>Home</h1>
    <button v-on:click="clickNew">Enter</button>
  </div>
</template>

<script>
const { remote, ipcRenderer } = require("electron");
var windowManager = remote.require("electron-window-manager");

export default {
  name: "home",
  methods: {
    clickOn() {
      // console.log("baatman");
      this.$router.push({ path: "/todo" });
    },
    clickNew() {
      const winURL_Second =
        process.env.NODE_ENV === "development"
          ? "http://localhost:9080/#/todo"
          : `file://${__dirname}/index.html#todo`;

      windowManager.open("home", "Welcome ...", winURL_Second);
    }
  }
};
</script>

<style>
</style>
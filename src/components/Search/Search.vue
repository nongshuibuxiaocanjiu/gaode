<template>
  <div id="search_container">
    <el-input
      placeholder="请输入内容"
      v-model="input"
      :id="search_id"
    ></el-input>
    <button id="searchBtn" @click="sendId">search</button>
  </div>
</template>

<script>
import bus from "@/eventBus/eventBus.js";
export default {
  data() {
    return {
      search_id: "searchId",
      input: "",
    };
  },

  created() {},
  mounted() {
    this.sendId();
  },

  methods: {
    sendId() {
      bus.$emit("share_id", this.search_id);
      // console.log(this.inputId, "this.inputObject");
    },
  },
};
</script>

<style scoped lang="less">
#search_container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: baseline;
  align-items: center;
  input {
    height: 30px;
    width: 300px;
  }
  #searchBtn {
    height: 36px;
    width: 100px;
    background-color: pink;
  }
}
</style>

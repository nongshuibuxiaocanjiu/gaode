<template>
  <div id="container"></div>
</template>

<script>
import bus from "@/eventBus/eventBus.js";
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
  securityJsCode: "051c3e0c82e8df387d4ef81b23b6f3f6",
};
export default {
  name: "mapContainer",
  data() {
    return {
      map: null,
      autoOptions: {
        input: "",
      },
      auto: null,
    };
  },

  created() {
    bus.$on("share_id", (val) => {
      this.autoOptions.input = val;
    });
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },

  methods: {
    initMap() {
      AMapLoader.load({
        key: "2c1c4affeb410923990fec54c5af721a", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.AutoComplete"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            resizeEnable: true,
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 10, //初始化地图级别
            center: [121.473667, 31.230525], //初始化地图中心点位置
          });
          this.auto = new AMap.AutoComplete(this.autoOptions);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="less">
#container {
  padding: 0px;
  margin: 0px;
  width: 80%;
  height: 80%;
}
</style>

<template>
  <div id="index_c">
    <div id="search_wrap">
      <search></search>
    </div>
    <div id="map_warp">
      <map-container></map-container>
    </div>
  </div>
</template>

<script>
import MapContainer from "@/components/MapContainer/MapContainer.vue";
import Search from "@/components/Search/Search.vue";

export default {
  components: { MapContainer, Search },
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="less">
#index_c {
  width: 100%;
  height: 100%;
  position: relative;
  #map_warp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
  }
  #search_wrap {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60px;
    width: 400px;
  }
}
</style>

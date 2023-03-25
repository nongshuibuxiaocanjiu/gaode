<template>
  <div class="index_c">
    <div class="map_warp">
      <map-container></map-container>
    </div>
  </div>
</template>

<script>
import MapContainer from "@/components/MapContainer/MapContainer.vue";

export default {
  components: { MapContainer },
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="less">
.index_c {
  width: 100%;
  height: 100%;
  position: relative;
  .map_warp {
    width: 100%;
    height: 100%;
  }
}
</style>

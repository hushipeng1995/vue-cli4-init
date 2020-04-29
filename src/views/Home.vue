<template>
  <div class="home">
    home
    <div class="box"></div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.box {
  width: 750px;
  height: 200px;
  background: black;
}
</style>

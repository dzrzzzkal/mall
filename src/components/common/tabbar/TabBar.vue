<template>
<div>
  <div id="tab-bar">
    <slot name="tab-bar-slot"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {

  }
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  text-align: center;
  /* height: 49px; */

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
}
</style>

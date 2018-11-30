<template>
  <main class="mdl-layout__content">
    <div class="mdl-layout__tab-panel is-active" id="user">
       <router-view></router-view>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Content'
};
</script>

<style>

</style>

<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header :title="title" :tabs="tabs"></Header>
    <Content></Content>
  </div>
</template>
<script>
import Header from './Header';
import Content from './Content';

export default {
  name: 'Layout',
  components: { Header, Content },
  data() {
    return {
      title: '맛집탐방',
      tabs: [
        { title: 'MANAGEMENT', uri: '/management', active: true },
        { title: 'MAP', uri: '/map', active: false },
        { title: 'TRY', uri: '/try', active: false },
        { title: 'LOGIn', uri: '/login', active: false }
      ]
    };
  }
};
</script>

<style>

</style>

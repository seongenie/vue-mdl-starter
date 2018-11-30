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
      title: 'MDL STARTER',
      tabs: [{ title: 'TRY', uri: '/try', active: true },
        { title: 'LOGIn', uri: '/login' }
      ]
    };
  }
};
</script>

<style>

</style>

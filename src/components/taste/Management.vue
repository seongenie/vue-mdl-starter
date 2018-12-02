<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
    <Left></Left>
    <main class="mdl-layout__content">
      <div class="page-content">
        <NaverStore v-for="(store, index) in naverStores" :key="`${store.id}-${index}`"
          :naverStore="store"></NaverStore>
      </div>
    </main>
  </div>
</template>
<script>
import api from '../../api/Sample';
import NaverStore from './NaverStore';
import Left from './Left';

export default {
  name: 'Management',
  components: { NaverStore, Left },
  data() {
    return {
      naverStores: []
    };
  },
  mounted() {
    api.getSample().then((response) => {
      this.naverStores = response.data;
    });
  }
};
</script>

<style>

</style>

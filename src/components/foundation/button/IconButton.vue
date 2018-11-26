<template>
  <!-- Icon button -->
  <button :id="id" class="mdl-button mdl-js-button mdl-button--icon">
    <i class="material-icons">{{label}}</i>
  </button>
</template>
<script>
import v4 from 'uuid/v4';

export default {
  name: 'IconButton',
  props: {
    id: {
      type: String,
      default: () => v4()
    },
    label: { type: String, required: true }
  }
};
</script>

<style>

</style>

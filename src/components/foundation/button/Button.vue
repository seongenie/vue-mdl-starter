<template>
  <button
    :class="['mdl-button', 'mdl-js-button', 'mdl-button--raised',
      'mdl-button--colored', buttonStyle]"
    @click="click"
  >
  {{title}}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    title: { type: String },
    buttonStyle: { type: String }
  },
  methods: {
    click() {
      this.$emit('onClick');
    }
  }
};
</script>
<style>
.mdl-button--raised.mdl-button--colored:hover{background-color: rgb(200,67,70)}
</style>
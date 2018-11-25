<template>
  <button
    :class="['mdl-button', 'mdl-js-button',
      'mdl-button--raised', 'mdl-js-ripple-effect',
      'mdl-button--accent', buttonStyle]"
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

<template>
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" :for="`checkbox-${id}`">
    <input type="checkbox"
      :id="`checkbox-${id}`"
      class="mdl-checkbox__input"
      :checked="checked"
      @click="clickCheck"
    >
    <span class="mdl-checkbox__label">{{title}}</span>
  </label>
</template>

<script>
import v4 from 'uuid/v4';

export default {
  name: 'Checkbox',
  props: {
    id: {
      type: String,
      default: () => v4()
    },
    title: {
      type: String
    },
    checked: {
      type: Boolean,
      default: () => false
    },
    value: {
      type: Object
    }
  },
  methods: {
    clickCheck(e) {
      this.$emit('onCheck', e.currentTarget.checked, this.value);
    }
  }
};
</script>
<style>
</style>

<template>
  <div v-mdl :class="['mdl-textfield', 'mdl-js-textfield',
    floating ? 'mdl-textfield--floating-label' : '']">
    <input class="mdl-textfield__input"
      :id="id"
      :type="type"
      :pattern="inputPattern"
      :maxLength="maxLength"
      :value="value"
      >
    <label class="mdl-textfield__label" :for="id">{{placeHolder}}</label>
    <span class="mdl-textfield__error">{{errorMessage}}</span>
  </div>
</template>
<script>
import v4 from 'uuid/v4';

export default {
  name: 'TextField',
  props: {
    id: { type: String, default: () => v4() },
    type: {
      type: String,
      default: () => {
        'text';
      }
    },
    placeHolder: { type: String },
    pattern: { type: String, default: () => '' },
    maxLength: { type: Number },
    value: { type: String },
    errorMessage: {
      type: String,
      default: () => 'Input value error!'
    },
    floating: { type: Boolean, default: () => false }
  },
  computed: {
    inputPattern() {
      if (this.pattern.toLowerCase() === 'number') return '-?[0-9]*(.[0-9]+)?';
      else if (this.pattern) return this.pattern;
      return null;
    }
  }
};
</script>

<style>
</style>

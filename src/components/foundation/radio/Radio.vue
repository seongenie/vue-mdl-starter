<template>
  <div class="container-radio">
    <div class="mdl-radio-item">
      <label v-mdl v-for="(item, index) in radioValue" :key="`${id}-${index}`"
        class="mdl-radio mdl-js-radio mdl-js-ripple-effect" :for="`${id}-${index}`">
        <input type="radio" :id="`${id}-${index}`"
          class="mdl-radio__button" :name="name" :value="item.value" :checked="item.checked">
        <span class="mdl-radio__label">{{item.label}}</span>
      </label>
    </div>
  </div>
</template>

<script>
import v4 from 'uuid/v4';

export default {
  name: 'Radio',
  props: {
    name: { type: String },
    radioValue: { type: Array }
  },
  data() {
    return {
      id: v4()
    };
  }
};
</script>
<style>
.mdl-js-radio { margin-right: 10px}
</style>


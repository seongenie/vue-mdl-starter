<template>
  <div v-mdl class="mdl-tooltip" :data-mdl-for="id">{{label}}</div>
</template>
<script>
export default {
  name: 'Tooltip',
  props: {
    label: { type: String },
    id: { type: String, required: true }
  }
};
</script>

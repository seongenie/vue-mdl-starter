<template>
  <div class="mdl-tooltip" :data-mdl-for="matchId">{{label}}</div>
</template>
<script>
export default {
  name: 'Tooltip',
  props: {
    label: { type: String },
    matchId: { type: String, required: true }
  }
};
</script>

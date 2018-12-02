<template>
  <div v-mdl class="mdl-card mdl-shadow--2dp"
    :style="`width:${width}px; height:${height}px`">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">{{title}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <slot name="content"></slot>
    </div>
    <!-- <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        {{bottom}}
      </a>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: { type: String },
    width: { type: Number, default: () => 200 },
    height: { type: Number, default: () => 50 }
  }
};
</script>
<style>
</style>

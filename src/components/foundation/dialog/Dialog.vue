<template>
  <dialog class="mdl-dialog" :style="`width:${width}px; height:${height}px`">
    <h4 class="mdl-dialog__title">{{title}}</h4>
    <div class="mdl-dialog__content">
      <slot name="content"></slot>
    </div>
  </dialog>
</template>
<script>
export default {
  name: 'Dialog',
  props: {
    title: { type: String },
    width: { type: Number, default: () => 500 },
    height: { type: Number, default: () => 300 }
  }
};
</script>

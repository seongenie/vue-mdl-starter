<template>
  <table v-mdl :class="['mdl-data-table', 'mdl-js-data-table', 'mdl-shadow--2dp', chcekBoxStyle]">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Material</th>
        <th>Quantity</th>
        <th>Unit price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
        <td>25</td>
        <td>$2.90</td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
        <td>50</td>
        <td>$1.25</td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
        <td>10</td>
        <td>$2.35</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'Table',
  props: {
    useCheckBox: {
      type: Boolean,
      default: () => true
    },
    heads: { type: Array },
    items: { type: Array }
  },
  computed: {
    chcekBoxStyle() {
      if (this.useCheckBox) return 'mdl-data-table--selectable';
      return 'mdl-data-table';
    }
  }
};
</script>
<style>
</style>

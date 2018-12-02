<template>
    <div class="naver-store">
      <Card :title="naverStore.title" :width="500" :height="250">
        <div slot="content">
          <p v-html="naverStore.description"/>
          <p v-html="naverStore.category"/>
          <p v-html="naverStore.telephone"/>
        </div>
      </Card>
  </div>
</template>
<script>
import Card from '../foundation/card/Card';

export default {
  name: 'NaverStore',
  components: { Card },
  props: {
    naverStore: { type: Object, required: true }
  }
};
// address: "부산광역시 중구 신창동1가 2-1"
// category: "음식점>피자"
// createDate: 1543667636000
// description: "<b>피자</b> 전문점."
// id: 1
// link: ""
// mapx: "494170"
// mapy: "278640"
// roadAddress: "부산광역시 중구 광복중앙로 31"
// telephone: "051-245-1478"
// title: "이재모<b>피자</b>"
// updateDate: 1543667636000
</script>
<style>
.naver-store > .mdl-card {float:left; border: gray 1px solid; margin:2px}
</style>


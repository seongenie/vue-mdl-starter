<template>
  <div class="naver-map">
    <div :id="id" style="width:100%;height:600px;float:left"></div>
  </div>
</template>
<script>
import v4 from 'uuid/v4';
import naver from '../../utils/MapUtil';
import Button from '../foundation/button/Button';

export default {
  name: 'Map',
  components: { Button },
  props: {
    lat: { type: Number, default: () => 37.2639167 },
    lng: { type: Number, default: () => 127.0312625 }
  },
  data() {
    return {
      id: v4(),
      map: {}
    };
  },
  mounted() {
    // mapmode=0&lat=37.2639167&lng=127.0312625&pinId=13009347&dlevel=11&enc=b64&pinType=site"

    const store = new naver.maps.LatLng(this.lat, this.lng);
    const map = new naver.maps.Map(this.id, {
      center: store,
      zoom: 10
    });

    const marker = new naver.maps.Marker({
      map: map,
      position: store
    });
    const contentString = [
      '<div class="iw_inner">',
      '   <h3>도토네 집</h3>',
      '   <p>경기도 광명시 철산<br />',
      '       <br />',
      '       010-1234-5678 | 도토네 집<br />',
      '       <a href="http://www.limmi.dot" target="_blank">www.limmi.dot/</a>',
      '   </p>',
      '</div>'
    ].join('');

    const infowindow = new naver.maps.InfoWindow({
      content: contentString
    });

    naver.maps.Event.addListener(marker, 'click', () => {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });
  }
};
</script>

<style>
.iw_inner {
  padding: 20px;
  width: 300px;
}
</style>

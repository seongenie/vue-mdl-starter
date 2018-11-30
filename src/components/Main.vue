<template>
<div id='main'>
  <!-- <Container/> -->
  <Layout></Layout>
</div>
</template>
<script>
// import Container from './tryItOut/Container';
import Layout from './foundation/layout/Layout';
import routes from '../router';

export default {
  name: 'Main',
  // components: { Container }
  components: { Layout },
  routes
};
</script>
<style>
</style>

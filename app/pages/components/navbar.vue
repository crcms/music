<template>
  <f7-navbar>
    <f7-nav-left>
      <f7-link icon-ion="ios-list-outline" icon-size="25" open-panel="left"></f7-link>
    </f7-nav-left>
    <f7-nav-center class="main-nav">
      <!--<f7-link @click="$router.load({pageName: 'main'})" active>听</f7-link>-->
      <!--<f7-link @click="$router.load({pageName: 'main'})" active>听</f7-link>-->
      <f7-link href="/home">听</f7-link>
      <f7-link href="/look/">看</f7-link>
      <f7-link href="/test/">唱</f7-link>
    </f7-nav-center>
    <f7-nav-right>
      <f7-link icon="ion-ios-search-outline" icon-size="25" href="###"></f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {}
  },
}
</script>

<style scoped>
.navbar .main-nav {
  display: flex;
  flex:auto;
  justify-content:center;
}
</style>

<template>
  <f7-navbar>
    <f7-nav-left>
      <f7-link icon="ion-ios-arrow-back-outline" icon-size="25" back text="返回"></f7-link>
    </f7-nav-left>
    <f7-nav-center></f7-nav-center>
    <f7-nav-right>
      <f7-link icon="ion-ios-search-outline" icon-size="25" href="###"></f7-link>
    </f7-nav-right>

    <f7-subnavbar>
      <f7-buttons>
        <f7-button tab-link="#recommend" active>推荐</f7-button>
        <f7-button tab-link="#singer">歌手</f7-button>
      </f7-buttons>
    </f7-subnavbar>
  </f7-navbar>
</template>

<script>
export default {
  name: 'repository-navbar',
}
</script>

<style scoped>

</style>

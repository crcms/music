<template>
  <div id="app">
    <login-popup />
    <!-- Left Panel -->
    <left-panel-sidebar></left-panel-sidebar>
    <!--<f7-views>-->
      <!--<f7-view main url="/home/" navbar-through :dynamic-navbar="$theme.ios" />-->
    <!--</f7-views>-->

    <f7-views navbar-through>
      <f7-view main url="/home/" :dynamic-navbar="true"></f7-view>
    </f7-views>
  </div>
</template>
<script>
import LeftPanelSidebar from './pages/left-pannel-sidebar.vue'

require('./css/main.css')

export default {
  components: {
    LeftPanelSidebar,
  },
}
</script>
<style>

</style>

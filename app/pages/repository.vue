<template>
  <f7-page class="with-subnavbar hide-bars-on-scroll">
    <navbar></navbar>
    <div class="tabs">
      <div id="recommend" class="tab active">
        <recommend></recommend>
      </div>
      <div id="singer" class="tab ">
        <singer></singer>
      </div>
    </div>





    <!--<f7-toolbar top >-->
      <!--<f7-link icon="icon-1" text="Tab 3" tab-link="#recommend"></f7-link>-->
      <!--<f7-link icon="icon-2" text="Tab 4" tab-link="#singer"></f7-link>-->
    <!--</f7-toolbar>-->


    <!--<f7-toolbar tabbar bottom>-->
      <!--<f7-link icon="icon-1" text="Tab 1" tab-link="#tab1"></f7-link>-->
      <!--<f7-link icon="icon-2" text="Tab 2" tab-link="#tab2"></f7-link>-->
    <!--</f7-toolbar>-->

  </f7-page>
</template>

<script>
import Navbar from './repository/navbar.vue'
import Recommend from './repository/recommend.vue'
import Singer from './repository/singer.vue'

export default {
  name: 'repository',
  data() {
    return {}
  },
  methods: {

  },
  components: {
    Navbar, Recommend, Singer,
  },
}
</script>

<style scoped>

</style>

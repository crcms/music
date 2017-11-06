<template>
        <f7-page>
          <navbar></navbar>
            <f7-toolbar bottom >
                <f7-link>Left Link</f7-link>
                <f7-link>Right Link</f7-link>
            </f7-toolbar>
            <!--<f7-navbar>-->
                <!--look-->
            <!--</f7-navbar>-->
            cordova run browser -- --lrcordova run browser -- --lrcordova run browser -- --lr
        </f7-page>
</template>

<script>
import Navbar from './components/navbar.vue'

export default {
  name: 'look',
  data() {
    return {}
  },
  components: {
    Navbar,
  },
}
</script>


<style scoped>

</style>

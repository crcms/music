<template>
        <f7-page>
            <f7-navbar>
                <f7-nav-left>
                    <f7-link icon="icon-bars" open-panel="left"></f7-link>
                </f7-nav-left>
                <f7-nav-center  class="main-nav">

                    <f7-grid class="main-nav-row">
                        <f7-col>
                            <!--<f7-link @click="$router.load({pageName: 'main'})" active>听</f7-link>-->
                            <f7-link href="/home/" active>听</f7-link>
                        </f7-col>
                        <f7-col>
                            <f7-link href="/look/">看</f7-link>
                        </f7-col>
                        <f7-col>
                            <f7-link href="/test/">唱</f7-link>
                        </f7-col>
                    </f7-grid>
                </f7-nav-center>
                <f7-nav-right>
                    <f7-link icon="fa fa-search" href="###"></f7-link>
                </f7-nav-right>
            </f7-navbar>
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
    export default {
      name: 'look',
      data() {
        return {}
      },
    }
</script>


<style scoped>

</style>

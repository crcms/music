<template>
    <f7-navbar>
        <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
        </f7-nav-left>
        <f7-nav-center sliding class="main-nav">
            <f7-grid class="main-nav-row">
                <f7-col>
                    <!--<f7-link @click="$router.load({pageName: 'main'})" active>听</f7-link>-->
                    <f7-link @click="$router.load({pageName: 'main'})" active>听</f7-link>
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

</style>

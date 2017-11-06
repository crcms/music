<template>
    <div class="left-panel-sidebar">
        <f7-panel left reveal :opened="false">
            <f7-view id="left-panel-sidebar-view">
                <f7-pages no-navbar>
                    <f7-page>
                        <f7-block>
                            <f7-grid>
                                <f7-col width="40">
                                    <img class="avatar" src="http://iph.href.lu/70x70" alt="">
                                </f7-col>
                                <f7-col width="60">
                                    28737164@qq.com
                                </f7-col>
                            </f7-grid>
                        </f7-block>
                        <f7-list media-list class="basic">
                            <f7-list-item
                                    link="/item/"
                                    media="<i class='icon ion-ios-mail-outline'></i>"
                                    title="我的消息"
                            ></f7-list-item>
                            <f7-list-item
                                    link="/item/"
                                    media="<i class='icon ion-ios-person-outline'></i>"
                                    title="会员中心"
                            ></f7-list-item>
                            <f7-list-item
                                    link="/item/"
                                    media="<i class='fa fa-user-o'></i>"
                                    title="个性换肤"
                            ></f7-list-item>
                            <f7-list-item
                                    link="/item/"
                                    media="<i class='icon ion-ios-clock-outline'></i>"
                                    title="定时停止播放"
                            ></f7-list-item>
                            <f7-list-item
                                    link="/item/"
                                    media="<i class='icon ion-ios-qr-scanner-outline'></i>"
                                    title="扫一扫"
                            ></f7-list-item>
                        </f7-list>
                        <f7-list media-list class="system-setting">
                            <f7-list-item
                                    link="/#/"
                                    title="我的好友"
                                    media="<i class='icon ion-ios-people-outline'></i>"
                                    after=""
                            >
                            </f7-list-item>
                            <f7-list-item
                                    link="/#/"
                                    title="附近的人"
                                    media="<i class='icon ion-ios-pin-outline'></i>"
                                    after=""
                            >
                            </f7-list-item>
                        </f7-list>
                        <f7-list media-list class="fast" form>
                            <f7-list-item
                                    title="仅WIFI联网"
                                    media="<i class='icon ion-ios-wifi-outline'></i>"
                            >
                                <f7-input slot="after" type="switch"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-toolbar bottom>
                            <f7-link icon-ion="ios-moon-outline" text="夜间模式"></f7-link>
                            <f7-link icon-ion="ios-settings-outline" text="设置"></f7-link>
                            <f7-link icon-ion="ios-power-outline" text="退出"></f7-link>
                        </f7-toolbar>
                      <f7-list>
                        <f7-list-item>
                          <f7-icon ion="ios-power-outline" size="40"></f7-icon>
                        </f7-list-item>
                      </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>
    </div>
</template>

<script>
    export default {
      name: 'left-panel-sidebar',
      data() {
        return {}
      },
    }
</script>
<style>
  .media-list li .item-link .item-media {
    padding-top: 10px;
  }

  .media-list li .item-link .item-media i.icon{
    font-size: 20px;
  }
    .left-panel-sidebar .list-block .item-media + .item-inner {
        margin-left: 0px;
    }

    .left-panel-sidebar .list-block .item-inner:after {
        height: 0px;
    }

    .left-panel-sidebar .list-block.media-list .item-link .item-title-row,.left-panel-sidebar .list-block li.media-item .item-link .item-title-row {
        background-image: none;
    }
</style>

<style scoped>


    .avatar {
        display: block;border-radius: 50%;
    }



    /*.list-block ul:before,.list-block ul:after {*/
        /*height: 0px;*/
    /*}*/

    /*.list-block li.media-item .item-link .item-title-row, .list-block.media-list .item-link .item-title-row {*/
        /*background-image: none;*/
    /*}*/

    /*.item-inner:after {*/
        /*height: 0px;*/
    /*}*/

    /*.list-block {*/
        /*margin-bottom: 7px;*/
        /*margin-top: 0px;*/
    /*}*/


    /*.list-block .item-media + .item-inner {*/
        /*margin-left: 0px;*/
    /*}*/
    /*.left-panel-sidebar .basic .item-inner:after {*/
        /*height: 0px!important;*/
    /*}*/
    /*.basic {*/
    /*}*/

    /*.fast  .label-switch {margin-top: 5px;}*/

    /*.system-setting {*/
    /*}*/
</style>

<template>
    <f7-page name="main" @page:init="init"><!--toolbar-fixed no-toolbar-->
        <navbar></navbar>

        <f7-block class="home-box-one">
            <f7-grid class="commonly-used">
                <f7-col>
                    <f7-link href="/look/">
                        <div>
                            <f7-icon ion="ios-phone-portrait" size="35"></f7-icon>
                        </div>
                        <div>本地音乐</div>
                        <div>5</div>
                    </f7-link>
                </f7-col>
                <f7-col>
                    <f7-link href="/look/">
                        <div>
                            <f7-icon ion="md-heart-outline" size="35"></f7-icon>
                        </div>
                        <div>喜欢</div>
                        <div>10</div>
                    </f7-link>
                </f7-col>
                <f7-col>
                    <f7-link href="/look/">
                        <div>
                            <f7-icon ion="ios-cloud-download-outline" size="35"></f7-icon>
                        </div>
                        <div>下载</div>
                        <div>10</div>
                    </f7-link>
                </f7-col>
                <f7-col>
                    <f7-link href="/look/">
                        <div>
                            <f7-icon ion="ios-clock-outline" size="35"></f7-icon>
                        </div>
                        <div>最近</div>
                        <div>3</div>
                    </f7-link>
                </f7-col>
            </f7-grid>
        </f7-block>

        <f7-block>
            <f7-grid class="center all-list">
                <f7-col class="select-list-item">
                    <f7-link href="/look/">
                        <div><img src="http://iph.href.lu/60x60" class="radius-50" alt=""></div>
                        <div>最近</div>
                    </f7-link>
                </f7-col>
                <f7-col>
                    <f7-link href="/look/">
                        <div><img src="http://iph.href.lu/60x60" class="radius-50" alt=""></div>
                        <div>最近</div>
                    </f7-link>
                </f7-col>
                <f7-col>
                    <f7-link href="/look/">
                        <div><img src="http://iph.href.lu/60x60" class="radius-50" alt=""></div>
                        <div>最近</div>
                    </f7-link>
                </f7-col>
            </f7-grid>
            <f7-grid class="center mt10">
                <f7-col>
                    <f7-link href="/look/">
                        <div><img src="http://iph.href.lu/60x60" class="radius-50" alt=""></div>
                        <div>最近</div>
                    </f7-link>
                </f7-col>
                <f7-col>
                    <f7-link href="/look/">
                        <div><img src="http://iph.href.lu/60x60" class="radius-50" alt=""></div>
                        <div>最近</div>
                    </f7-link>
                </f7-col>
                <f7-col>
                    <f7-link href="/look/">
                        <div><img src="http://iph.href.lu/60x60" class="radius-50" alt=""></div>
                        <div>最近</div>
                    </f7-link>
                </f7-col>
            </f7-grid>
        </f7-block>
        <f7-block>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </f7-block>

        <f7-toolbar bottom class="process">
            <div class="process-left">
                <!--<div class="pull-left">-->
                    <!--<img src="http://iph.href.lu/30x30" alt="">-->
                <!--</div>-->
                <!--<f7-list media-list>-->
                    <!--<f7-list-item-->
                            <!--media="<img src='http://iph.href.lu/40x40'>"-->
                            <!--title="Item Title"-->
                            <!--subtitle="Item Subtitle"-->
                    <!--&gt;-->

                    <!--</f7-list-item>-->
                <!--</f7-list>-->
              <f7-swiper id="a">
                <f7-swiper-slide v-for="item in list" class="swiper-slide">
                  <div class="swiper-slide-image">
                    <img src="http://iph.href.lu/40x40" alt="">
                  </div>
                  <div class="swiper-slide-text">
                    main
                  </div>
                  Slide {{item}}
                </f7-swiper-slide>
              </f7-swiper>
            </div>
            <div class="process-control">
              <f7-icon ion="ios-play-outline" size="35"></f7-icon>
            </div>
            <div class="process-list">
              <f7-icon ion="ios-list" size="35"></f7-icon>
            </div>
            <!--</f7-block>-->
        </f7-toolbar>

        <!--<f7-navbar :title="$root.config.title" />-->
        <!--<f7-block inner inset>{{$lang('text')}}</f7-block>-->
        <f7-block>
            <f7-link icon="android-phone-portrait" text="Home" color="red"></f7-link>
            <f7-button big fill raised bg="green"
                       href="https://github.com/scriptPilot/app-framework/blob/master/DOCUMENTATION.md" external>
                Documentation
            </f7-button>
          <f7-button @click="addList">Add List</f7-button>
        </f7-block>
    </f7-page>
</template>

<script>
  import Navbar from './components/navbar.vue'
  import '../controller/test'
// import Navbar from './components/navbar.vue'
//
// export default {
//  components: {
//    Navbar,
//  },
//  data() {
//    return {
//      list: [1, 2, 3, 4],
//    }
//  },
//  methods: {
//    //    onF7Init() {
//    //      this.$f7.alert('Page is mounted!')
//    //    },
//
//    addList() {
//      // console.log(this.list);
//      this.list.push(8)
//    },
//    init() {
//      /* this.$f7.swiper('#a').slideChange(function(){
//          console.log('123');
//      }); */
//
//      this.$f7.swiper('#a').on('slideChange', () => {
//        console.log('slide changed')
//      })
//      /* this.$f7.swiper('#a').on('click', function () {
//        console.log('slide changed');
//      }); */
//
//      console.log(this.$f7.swiper)
//    },
//    a() {
//      alert('123')
//    },
//
//
//  },
// }
</script>
<style>
/*.process .item-media {padding-top: 17px!important;}*/
</style>
<style scoped>
  .a-slide {color:red;background: green}
  .process {
    display: flex;
    justify-content:flex-end;
  }
.process-left {
  flex: none;
  width: 80%;

}
  .process-left .swiper-slide {
    display: flex;
    align-items:center;
}
  .process-left .swiper-slide .swiper-slide-image {
    flex: none;
    width: 50px;
    text-align: right;
    padding-top: 5px;
  }
  .process-left .swiper-slide .swiper-slide-text {
    flex: 1;
    padding-left: 10px;
  }
.process-control {
  flex:1;
}

.process-list {
  flex:1;
}
/*.process-left .list-block {margin: 0px;}
.process-left .list-block ul:before,.process-left .list-block ul:after {
    height: 0px;
}*/

    .content-block {
        margin-top: 0px;
    }

    .commonly-used {
        text-align: center;
    }



    .select-list-item div:first-child {
        margin-bottom: 5px;
    }
</style>

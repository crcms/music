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
          <f7-link href="/repository/">
            <div><img src="http://iph.href.lu/60x60" class="radius-50" alt=""></div>
            <div>最近1</div>
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
              main{{item}}
            </div>
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
    <f7-block>
      aaaaa
      <audio  controls id="audio" src="http://m10.music.126.net/20171108211517/b21184dc2276616a1cdd10490271717b/ymusic/9593/59ca/56ea/fc92992c2eac7137bf4cc1d7851fe094.mp3"></audio>
      aaaa
      <f7-progressbar  :progress="30" color="red"></f7-progressbar>
    </f7-block>
    <f7-block>
      <f7-link view="a" text="aaaaa" href="/repository/test2"></f7-link>
    </f7-block>
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

// const NeteaseMusic = require('simple-netease-cloud-music')
//
// const nm = new NeteaseMusic()
//
// nm.album('35327877').then(data => {
//   console.log('歌单', data)
// })

// import NetMusic from 'simple-netease-cloud-music'
// const nm = new NeteaseMusic()
//
// nm.album('35327877').then(data => {
//   console.log('歌单', data)
// });

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      list: [1, 2, 3, 4],
    }
  },
  methods: {
    //    onF7Init() {
    //      this.$f7.alert('Page is mounted!')
    //    },

    addList() {
      this.list.push(8)
    },
    init() {
      this.$f7.swiper('#a').on('slideChange', () => {
        // console.log('slide changed');
      })

      // const audio = document.createElement('audio')
      // console.log(audio)
      // console.log(audio.duration)
      // console.log(audio.currentSrc)
    },
  },
}
</script>
<style>
  /*.process .item-media {padding-top: 17px!important;}*/
</style>
<style scoped>
  .a-slide {
    color: red;
    background: green
  }

  .process {
    display: flex;
    justify-content: flex-end;
  }

  .process-left {
    flex: none;
    width: 80%;

  }

  .process-left .swiper-slide {
    display: flex;
    align-items: center;
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
    flex: 1;
  }

  .process-list {
    flex: 1;
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

import Navbar from '../pages/components/navbar.vue'

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
      // console.log(this.list);
      this.list.push(8)
    },
    init() {
      /* this.$f7.swiper('#a').slideChange(function(){
       console.log('123');
       }); */

      this.$f7.swiper('#a').on('slideChange', () => {
        console.log('slide changed')
      })
      /* this.$f7.swiper('#a').on('click', function () {
       console.log('slide changed');
       }); */

      console.log(this.$f7.swiper)
    },
    a() {
      alert('123')
    },


  },
}

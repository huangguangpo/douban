export default {
  data () {
    return {
      categoryList: [
        {
          name: '影院热映',
          param: 'in_theaters',
          list: []
        },
        {
          name: 'top250',
          param: 'top250',
          list: []
        }
      ]
    }
  },
  created () {
    this.categoryList.forEach(v => {
      this.getMove(v)
    })
  },
  methods: {
    getMove (v) {
      wx.request({
        url: `https://api.douban.com/v2/movie/${v.param}?apikey=0df993c66c0c636e29ecbb5344252a4a`,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          let numstart = res.data.subjects
          numstart.forEach(v => {
            v.startNum = Math.ceil(v.rating.average / 2)
          })
          v.list = res.data.subjects
        }
      })
    }
  }

}

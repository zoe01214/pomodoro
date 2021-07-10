<template lang="pug">
  #home.w-100.bg-green
    b-container.w-100.px-0
      b-row.vh-100.mx-0
        b-col(cols='12')
          div.text-right
            p.dateText {{ nowdate | dateformat }}
            p.dateText {{ nowdate | timeformat }}
        b-col(cols='12')
          b-row.text-center
            b-col.col-sm-6.s(cols='12')
              div.mb-0
                p.taskTime 25:00
                div.d-flex.justify-content-center.align-items-center
                  div.px-2
                    img.circle(:src='require("../assets/icon-bell.svg")')
                  div.px-2
                    img.playcircle(:src='require("../assets/icon-play--orange.svg")')
                  div.px-2
                    img.circle(:src='require("../assets/icon-delete.svg")')
            b-col.col-sm-6.text-left(cols='12')
             div.pt-5.pb-2
              ul
                template(v-for="(item,index) in list")
                  li.my-3.position-relative
                    div.d-flex.align-items-center
                      span.taskcircle.mr-3
                      span.taskText.mr-auto {{ item }}
                    div.tomatoLeft2.mb-3.pl-3(v-if='index===0')
                      span.tomato.opacity-1
                      span.tomato.ml-1.opacity-1
                      span.tomato.ml-1.opacity-1
                      span.tomato.ml-1
        b-col.mt-auto.orange.d-flex.justify-content-center.align-items-end(cols='12')
            img.img-height(:src='require("../assets/tomato--orange.svg")')
</template>

<script>
const format = function (value) {
  return value < 10 ? '0' + value : value
}

export default {
  name: 'Home',
  data () {
    return {
      nowdate: new Date(),
      list: ['學習 Vue', '練習番茄鐘', '只有list新增功能', '其他功能沒有寫']
    }
  },
  filters: {
    dateformat: function (nowdate) {
      const year = format(nowdate.getFullYear())
      const month = format(nowdate.getMonth() + 1)
      const date = format(nowdate.getDate())
      return `${year}.${month}.${date}`
    },
    timeformat: function (nowdate) {
      const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      const hours = format(nowdate.getHours())
      const minutes = format(nowdate.getMinutes())
      const day = parseInt(format(nowdate.getDay()), 0)
      return `${week[day]} ${hours}:${minutes}`
    }
  },
  mounted () {
    const that = this
    this.timer = setInterval(function () {
      that.nowdate = new Date()
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

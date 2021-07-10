<template lang="pug">
  #list.w-100.bg-green
    b-container.w-100.px-0.ml-5
      b-row.mx-0.vh-100
        b-col(cols='5').pr-5.boxShadow.h-100
          div.d-flex.flex-row.align-items-center.mb-3.mt-5
            p.listText.mr-auto 代辦事項
            p.finishText.mr-5 已完成
            p.finishText 未完成
          div.position-relative.mb-4
            b-form-input.inputblock(v-model='newitem' :state="state" @keydown.enter='additem' placeholder="新增代辦事項")
            b-button(pill @click='additem').addbtn +
          div.pt-2
            ul
              template(v-for="item in list")
                li.my-3.position-relative
                  div.d-flex.align-items-center
                    span.taskcircle.mr-3
                    span.taskText.mr-auto {{ item }}
                    img(:src='require("../assets/icon-edit.svg")').mr-2
                    img(:src='require("../assets/icon-delete.svg")')
                  div.tomatoLeft2.mb-3
                    span.tomato.opacity-1
                    span.tomato.ml-1.opacity-1
                    span.tomato.ml-1
                    span.tomato.ml-1
        b-col(cols='7').w-100
          b-row.h-100.d-flex.align-items-start
            b-col(cols='12').fit
              router-link(to='/')
                div.text-right
                  p.dateText {{ nowdate | dateformat }}
                  p.dateText {{ nowdate | timeformat }}
            b-col(cols='12').h-75
              div
                p.taskTime.text-center 25:00
                div.d-flex.justify-content-center.align-items-center
                  div.px-2
                    img.circle(:src='require("../assets/icon-bell.svg")')
                  div.px-2
                    img.playcircle(:src='require("../assets/icon-play--orange.svg")')
                  div.px-2
                    img.circle(:src='require("../assets/icon-delete.svg")')
            b-col.mt-auto(cols='12')
              router-link(to='/')
                div.w-100.h-100.position-relative
                  img.img-fluid.position-absolute.imgPosition(:src='require("../assets/tomato--orange.svg")')
</template>

<script>
const format = function (value) {
  return value < 10 ? '0' + value : value
}

export default {
  name: 'List',
  data () {
    return {
      nowdate: new Date(),
      newitem: '',
      list: []
    }
  },
  computed: {
    state () {
      if (this.newitem.length === 0) {
        return null
      } else if (this.newitem.length < 2) {
        return false
      } else {
        return true
      }
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
  methods: {
    additem () {
      if (this.newitem.length >= 2) {
        this.list.push(this.newitem)
        this.newitem = ''
      }
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

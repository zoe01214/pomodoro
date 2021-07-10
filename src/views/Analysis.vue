<template lang="pug">
 #analysis.w-100.bg-green
    b-container.w-100.px-0.ml-5
      b-row.mx-0.vh-100
        b-col(cols='5').pr-5.boxShadow.h-100
          div.mb-3.mt-5
            p.listText 專注度分析
          div.mt-5
            b-row
              b-col(cols='6')
                div.mb-2
                  span.title.mr-4 今日
                  span.date  {{ nowdate | dateformat }}
                div.d-flex.border.px-1
                  div.w-50.text-center.mr-2
                    p.text-green.mb-0 9
                    p.title 代辦事項
                  div.w-50.text-center
                    p.text-orange.mb-0 18
                    p.title 已完成
              b-col(cols='6')
                div.mb-2
                  span.title.mr-4 本週
                div.d-flex.border.px-1
                  div.w-50.text-center.mr-2
                    p.text-green.mb-0 54
                    p.title 代辦事項
                  div.w-50.text-center
                    p.text-orange.mb-0 48
                    p.title 已完成
            div.mt-5
              p.week.text-center
                img(:src='require("../assets/icon-arrow--prev.svg")')
                span.p-3 2019.07.07~2019.07.13
                img(:src='require("../assets/icon-arrow--next.svg")')
              div
                apexchart(width="400" type="bar" :options='options' :series='series')
        b-col(cols='7').w-100
          b-row.h-100
            b-col(cols='12')
              router-link(to='/')
                div.text-right
                  p.dateText {{ nowdate | dateformat }}
                  p.dateText {{ nowdate | timeformat }}
            b-col(cols='12').h-75
              div.mb-0
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
const today = {
  month: new Date().getMonth() + 1,
  date: new Date().getDate()
}
export default {
  name: 'Analysis',
  data () {
    return {
      nowdate: new Date(),
      series: [
        {
          name: '已完成事項',
          data: [7, 3, 5, 12, 8, 10, 9]
        }
      ],
      options: {
        chart: {
          height: 450,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: ['#6C9460', '#6C9460', '#6C9460', '#6C9460', '#6C9460', '#6C9460', '#F08448'],
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            [`${today.month}/${today.date - 7}`],
            [`${today.month}/${today.date - 6}`],
            [`${today.month}/${today.date - 5}`],
            [`${today.month}/${today.date - 4}`],
            [`${today.month}/${today.date - 3}`],
            [`${today.month}/${today.date - 2}`],
            [`${today.month}/${today.date - 1}`],
            [`${today.month}/${today.date}`]
          ],
          labels: {
            style: {
              colors: '#E8E8E8',
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          tickAmount: 8,
          min: 0,
          labels: {
            style: {
              colors: '#E8E8E8',
              fontSize: '12px'
            }
          },
          axisBorder: {
            show: true,
            color: '#E8E8E8',
            offsetX: -1,
            offsetY: 0
          }
        }
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
  mounted () {
    const that = this
    this.timer = setInterval(function () {
      that.nowdate = new Date()
    }, 1000)
    this.renderChart(this.chartdata, this.options)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

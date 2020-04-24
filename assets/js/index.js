let section1Height = $('#section1').height()
let liArr = $('#section2 ul li')
$(function () {
  console.log({ section1Height })
  scroll()
  initMap()
  // click_scroll_abountMe('#section1', 0)
})
function initMap() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));

  // 指定图表的配置项和数据
  var option = option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['javaScript&jquery', 'html5&css3', 'Vue', 'React', '微信小程序']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 30, name: 'javaScript&jquery' },
          { value: 30, name: 'html5&css3' },
          { value: 15, name: 'Vue' },
          { value: 5, name: 'React' },
          { value: 20, name: '微信小程序' }
        ]
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
// 监听页面滚动
function scroll() {
  $(document).scroll(function () {
    var scroH = $(document).scrollTop();  //滚动高度
    var viewH = $(window).height();  //可见高度 
    var contentH = $(document).height();  //内容高度
    console.log({ scroH })
    if (scroH > section1Height) {  //距离顶部大于100px时
      $('.navigator').addClass('fixed')
    } else {
      $('.navigator').removeClass('fixed')
    }
    if (contentH - (scroH + viewH) <= 100) {  //距离底部高度小于100px

    }
    if (contentH = (scroH + viewH)) {  //滚动条滑到底部啦

    }
  })
}

// 
let preIndex = null
function click_scroll_abountMe(val, index) {
  var scroll_offset = $(val).offset().top;
  if (preIndex !== index) {
    liArr.eq(index).addClass('active')
    liArr.eq(index).siblings().removeClass("active");
  }
  preIndex = index
  $("body,html").animate({
    scrollTop: scroll_offset
  }, 500);
}
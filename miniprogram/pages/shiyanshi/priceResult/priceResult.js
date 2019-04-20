import * as echarts from '../../../ec-canvas/echarts';
const app = getApp();

let  chart = null;
let  content=app.globalData


function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    xAxis: {
      type: 'category',
      data: ['物攻', '物防', '法功', '法防', '生命']
    },
    yAxis: {
      type: 'value',
      axisLabel : {
          textStyle: {
              color: 'rgb(51,51,51)'
          }
      }
    },
    series: [{
      data: [content.Price.endScoreArr?content.Price.endScoreArr[0]:20, content.Price.endScoreArr?content.Price.endScoreArr[1]:20, content.Price.endScoreArr?content.Price.endScoreArr[2]:20, content.Price.endScoreArr?content.Price.endScoreArr[3]:20, content.Price.endScoreArr?content.Price.endScoreArr[4]:20],
      type: 'bar',
      itemStyle: {
        normal: {
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            textStyle: { //数值样式
              color: 'white',
              fontSize: 16
            }
          }
        }
      },
    }],
    textStyle: {
      color: 'white',
      fontSize:18
    }
  };

  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    },
    result:100,
    contentDetail:'你还没有鉴定过妖灵哦,赶紧去鉴定吧',
    ifHasGlobal:false
  },
  onLoad(){
    if(content.Price.endScore){
      this.setData({
        result:content.Price.endScore,
        contentDetail:content.Price.content,
        ifHasGlobal:true
      })
    }
  },
  toJDing(){
    wx.navigateTo({
      url:'/pages/shiyanshi/price/price'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '《一起来捉妖》妖灵鉴定分数:'+this.data.result+'你也来鉴定一下吧！',
      imageUrl: "https://636c-cloudfdh-1259038312.tcb.qcloud.la/article/封面2.jpg?sign=3195976fb9c301ddc05900c6cc42e564&t=1555645749"
    }

  }
});


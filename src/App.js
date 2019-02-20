import React from 'react';
// import {Card} from 'antd';
//不是按需加载的话文件太大
//import echarts from 'echarts'
//下面是按需加载
import echarts from 'echarts/lib/echarts'
//导入折线图
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
export default class App extends React.Component{
  getOption =()=> {
    let option = {
      title:{
        text:'用户骑行订单',
        x:'center'
      },
      tooltip:{
        trigger:'axis',
      },
      xAxis:{
        data:['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'OFO订单量',
          type:'line',
          data:[1000,2000,1500,3000,2000,1200,800]
        }
      ]
    }
   return option
  }

  getOption2 =()=> {
    let option = {
        title:{
          text:'用户骑行订单'
        },
        legend:{
          data:['OFO','摩拜','小蓝']
        },
        tooltip:{   //展示数据
          trigger:'axis'
        },
        xAxis:{
          data:['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis:{
          type:'value'
        },
        series:[
          {
            name:'OFO',
            type:'bar',
            data:[2000,3000,5500,7000,8000,12000,20000]
          },{
            name:'摩拜',
            type:'bar',
            data:[1500,3000,4500,6000,8000,10000,15000]
          },{
            name:'小蓝',
            type:'bar',
            data:[1000,2000,2500,4000,6000,7000,8000]
          }
        ]
    }
    return option;
  }

  getOption3 =()=> {
    let option = {
      title:{
        text:'用户骑行订单',
        x:'center'
      },
      legend:{
        orient:'vertical',
        right:10,
        top:20,
        bottom:20,
        data:['周一','周二','周三','周四','周五','周六','周日']
      },
      tooltip:{
        trigger:'item',
        formatter:'{a}<br/>{b}:{c}({d}%)' //自定义展示的tootip
      },
      series:[
        //饼图中的series没有x,y轴，所以通过series中必须有value和name
        {
          name:'订单量',
          type:'pie',
          radius:['50%','80%'], //控制内环、外环
          data:[
          { 
            value:1000,
            name:'周一'
          },{ 
            value:2000,
            name:'周二'
          },{ 
            value:1000,
            name:'周三'
          },{ 
            value:1000,
            name:'周四'
          },{ 
            value:1000,
            name:'周5五'
          },{ 
            value:1000,
            name:'周六'
          },{ 
            value:1000,
            name:'周日'
          },
          ]
        }
      ]
    }
   return option
  }

  render(){
    return(
      <div>
        <div title="折线图表之一">
            <ReactEcharts option={this.getOption()} theme="Imooc"  style={{height:'400px'}}/>
        </div>
        <div title="柱形图表之一">
            <ReactEcharts option={this.getOption2()} theme="Imooc"  style={{height:'500px'}}/>
        </div>
        <div title="饼形图表之三" style={{marginTop:"10px"}}>
            <ReactEcharts option={this.getOption3()} theme="Imooc" style={{height:'400px'}}/>
        </div>
      </div>
    )
  }
}
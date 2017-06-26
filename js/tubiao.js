window.onload = function () {
    // Echarts 自适应缩放。
window.onresize = function(){
    myChart.resize(); 
    myChart2.resize(); 
    myChart3.resize(); 
};
    //第一个柱状图
var myChart = echarts.init(document.getElementById('zong'));

        // 指定图表的配置项和数据
        myChart.setOption({
            tooltip : {
            trigger: 'axis'
        },
            legend: {
                data:['点击','注册']
        },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
        },
            calculable : true,
            xAxis:[
                {
                    type : 'category',
                    data : ['6月','7月','8月','9月','10月','11月','12月']
                }
        ],
            yAxis:[
                {
                    type : 'value'
                }
        ],
            series:[
                {
            name:'点击',
            type:'bar',
            data:[5310, 5635, 5162, 6332, 5320, 5526, 5311],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'}
                ]
            },
        },
        {
            name:'注册',
            type:'bar',
            data:[2070, 1175, 3182, 1248, 2014, 1006, 1112],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'}
                ]
            },
        }
    ]
});

var myChart2 = echarts.init(document.getElementById('shu'));
    myChart2.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data: ['展现','点击','访问','咨询','订单']
        },
        series: [
        {
            name: '预期',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}预期'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}预期: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
            ]
        },
        {
            name: '实际',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}实际: {c}%'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: [
                {value: 30, name: '访问'},
                {value: 10, name: '咨询'},
                {value: 5, name: '订单'},
                {value: 50, name: '点击'},
                {value: 80, name: '展现'}
            ]
        }
    ]

});

var myChart3 = echarts.init(document.getElementById('bing'));
    myChart3.setOption({
        toolbox: {
            show : true,
            feature : {
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [

        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            labelLine: {
                normal: {
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },

            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
});
};

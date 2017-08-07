var dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};

var year, day, hour, minute, second;

var startTime = '1499179980';
var currentTime = parseInt($.now()/1000);
var totalSecond = currentTime - startTime;

year = parseInt(totalSecond / (86400*365));
day = parseInt((totalSecond - 86400*365*year)/86400);
hour = parseInt((totalSecond - 86400*365*year - 86400*day)/3600);
minute = parseInt((totalSecond - 86400*365*year - 86400*day - 3600*hour)/60);
second = parseInt(totalSecond - 86400*365*year - 86400*day - 3600*hour - 60*minute)%60;

function setTitle() {
    $("#title").html(year + ' Years ' + day + ' Days ' + hour + ' Hours ' + minute + ' Minutes ' + second + ' Seconds have passed.');
}

setTitle();

setInterval(function() {
    currentTime = parseInt($.now()/1000);
    totalSecond = currentTime - startTime;

    year = parseInt(totalSecond / (86400*365));
    day = parseInt((totalSecond - 86400*365*year)/86400);
    hour = parseInt((totalSecond - 86400*365*year - 86400*day)/3600);
    minute = parseInt((totalSecond - 86400*365*year - 86400*day - 3600*hour)/60);
    second = parseInt(totalSecond - 86400*365*year - 86400*day - 3600*hour - 60*minute)%60;

    // console.log(totalSecond);
    // console.log('year' + year);
    // console.log('day' + day);
    // console.log('hour' + hour);
    // console.log('minute' + minute);
    // console.log('second' + second);

    setTitle();
    myChart.setOption({
        series: [
            {
                name:'second',
                type:'pie',
                clockWise:false,
                RAdius : [180,200],
                itemStyle : dataStyle,
                hoverAnimation: false,

                data:[
                    {
                        value:second*6,
                    },
                    {
                        value:50,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'minute',
                type:'pie',
                clockWise:false,
                radius : [160, 180],
                itemStyle : dataStyle,
                hoverAnimation: false,

                data:[
                    {
                        value:minute*6,
                    },
                    {
                        value:60,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'hour',
                type:'pie',
                clockWise:false,
                hoverAnimation: false,
                radius : [140, 160],
                itemStyle : dataStyle,

                data:[
                    {
                        value:hour*360/24,
                    },
                    {
                        value:50,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'day',
                type:'pie',
                clockWise:false,
                hoverAnimation: false,
                radius : [120, 140],
                itemStyle : dataStyle,

                data:[
                    {
                        value:day*360/365,
                    },
                    {
                        value:30,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'year',
                type:'pie',
                clockWise: false,
                hoverAnimation: false,
                radius : [100, 120],
                itemStyle : dataStyle,

                data:[
                    {
                        value: year*360/100,
                    },
                    {
                        value:30,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
        ]
    })

}, 1000);

option = {

    color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
    series : [
        {
            name:'second',
            type:'pie',
            clockWise:false,
            radius : [180,200],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:second*6,
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'minute',
            type:'pie',
            clockWise:false,
            radius : [160, 180],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:minute*6,
                },
                {
                    value:60,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'hour',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [140, 160],
            itemStyle : dataStyle,

            data:[
                {
                    value:hour*360/24,
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'day',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [120, 140],
            itemStyle : dataStyle,

            data:[
                {
                    value:day*360/365,
                },
                {
                    value:30,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'year',
            type:'pie',
            clockWise: false,
            hoverAnimation: false,
            radius : [100, 120],
            itemStyle : dataStyle,

            data:[
                {
                    value: year*360/100,
                },
                {
                    value:30,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
    ]
};

var myChart = echarts.init(document.getElementById('countup'));
myChart.setOption(option);

var year, day, hour, minute, second;

var startTime = '1499179980';
var currentTime = parseInt($.now() / 1000);
var totalSecond = currentTime - startTime;

year = parseInt(totalSecond / (86400 * 365));
day = parseInt((totalSecond - 86400 * 365 * year) / 86400);
hour = parseInt((totalSecond - 86400 * 365 * year - 86400 * day) / 3600);
minute = parseInt((totalSecond - 86400 * 365 * year - 86400 * day - 3600 * hour) / 60);
second = parseInt(totalSecond - 86400 * 365 * year - 86400 * day - 3600 * hour - 60 * minute) % 60;

function setTitle() {
    var text = (year * 365 + day) + ' days ';
    text = text + hour + (hour <= 1 ? ' hour ' : ' hours ');
    text = text + minute + (minute <= 1 ? ' minute <br>' : ' minutes <br>');
    text = text + second + (second <= 1 ? ' second ' : ' seconds ');
    text = text + 'have passed.';
    $("#title").html(text);
}

var isBulletinShow = false;

function showCelebration(day) {
    if (!isBulletinShow) {
        isBulletinShow = true;
        $("#bulletin").fadeIn(2000);
        $("#bulletin").fireworks();
        var text = "Today is our <b><span style='color:orange;font-weight:bolder;font-style:italic'>" + day + "</span></b> days!";
        $("#bulletin-news").html(text);
    }
}

setTitle();

setInterval(function() {
    currentTime = parseInt($.now() / 1000);
    totalSecond = currentTime - startTime;

    year = parseInt(totalSecond / (86400 * 365));
    day = parseInt((totalSecond - 86400 * 365 * year) / 86400);
    hour = parseInt((totalSecond - 86400 * 365 * year - 86400 * day) / 3600);
    minute = parseInt((totalSecond - 86400 * 365 * year - 86400 * day - 3600 * hour) / 60);
    second = parseInt(totalSecond - 86400 * 365 * year - 86400 * day - 3600 * hour - 60 * minute) % 60;

    var totaldays = parseInt(totalSecond/86400);
    // totaldays = 100;
    if (totaldays%100 == 0) {
        showCelebration(totaldays);
    }

    setTitle();

    myChart.setOption({
        series: [{
                name: 'second',
                type: 'pie',
                clockWise: false,
                RAdius: [160, 180],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [{
                        value: second,
                    },
                    {
                        value: 60 - second,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'minute',
                type: 'pie',
                clockWise: false,
                radius: [140, 160],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [{
                        value: minute,
                    },
                    {
                        value: 60 - minute,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'hour',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [120, 140],
                itemStyle: dataStyle,

                data: [{
                        value: hour,
                    },
                    {
                        value: 24 - hour,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'day',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [100, 120],
                itemStyle: dataStyle,

                data: [{
                        value: day,
                    },
                    {
                        value: 365 - day,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'year',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [80, 100],
                itemStyle: dataStyle,

                data: [{
                        value: year,
                    },
                    {
                        value: 100 - year,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
        ]
    })
}, 1000);

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};

option = {
    color: ['#85b6b2', '#6d4f8d', '#cd5e7e', '#e38980', '#f7db88'],
    series: [{
            name: 'second',
            type: 'pie',
            clockWise: false,
            radius: [160, 180],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                    value: second,
                },
                {
                    value: 60 - second,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'minute',
            type: 'pie',
            clockWise: false,
            radius: [140, 160],
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
                    value: minute,
                },
                {
                    value: 60 - minute,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'hour',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [120, 140],
            itemStyle: dataStyle,

            data: [{
                    value: hour,
                },
                {
                    value: 24 - hour,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'day',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [100, 120],
            itemStyle: dataStyle,

            data: [{
                    value: day,
                },
                {
                    value: 365 - day,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
        {
            name: 'year',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [80, 100],
            itemStyle: dataStyle,

            data: [{
                    value: year,
                },
                {
                    value: 100 - year,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }
            ]
        },
    ]
};


var myChart = echarts.init(document.getElementById('countup'));
myChart.setOption(option);

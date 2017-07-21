$(document).ready(function() {
    $('#countup').ClassyCountdown({
        end: '1499179980',
        now: $.now()/1000,
        labels: true,
        style: {
            element: "",
            textResponsive: .5,
            days: {
                gauge: {
                    thickness: .05,
                    bgColor: "rgba(0,0,0,0.5)",
                    fgColor: "#1abc9c"
                },
                textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
            },
            hours: {
                gauge: {
                    thickness: .05,
                    bgColor: "rgba(0,0,0,0.5)",
                    fgColor: "#2980b9"
                },
                textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
            },
            minutes: {
                gauge: {
                    thickness: .05,
                    bgColor: "rgba(0,0,0,0.5)",
                    fgColor: "#8e44ad"
                },
                textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
            },
            seconds: {
                gauge: {
                    thickness: .05,
                    bgColor: "rgba(0,0,0,0.5)",
                    fgColor: "#f39c12"
                },
                textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
            }

        },
        onEndCallback: function() {
            console.log("Time out!");
        }
    });
});

interface Theme {
    chartLayout: {
        layout: {
            backgroundColor: string,
            lineColor: string,
            textColor: string,
        },
        grid: {
            vertLines: {
                color: string,
            },
            horzLines: {
                color: string,
            },
        }
    },
    candleStickConfig: {

    },
    histogramConfig: {

    },

    
}

export const darkTheme: Theme = {

    //default for now
    candleStickConfig: {

    },
    histogramConfig: {

    },

    chartLayout: {
        layout: {
            backgroundColor: "#131722",
            lineColor: "#2B2B43",
            textColor: "#D9D9D9",
        },
        grid: {
            vertLines: {
                color: "rgba(250, 250, 250, .1)",
            },
            horzLines: {
                color: "rgba(250, 250, 250, .1)",
            },
        },
    }
}

export const lightTheme: Theme = {

    //default for now
    candleStickConfig: {

    },
    histogramConfig: {

    },

    chartLayout: {
        layout: {
            backgroundColor: "#ece8dd",
            lineColor: "#2B2B43",
            textColor: "#262626",
        },
        grid: {
            vertLines: {
                color: "rgba(0, 0, 0, .1)",
            },
            horzLines: {
                color: "rgba(0, 0, 0, .1)",
            },
        },
    }
}
interface Layout {
    backgroundColor: string,
    lineColor: string,
    textColor: string,
    watermarkColor: string,
}

export interface ChartLayout {
    layout: Layout,
    grid: {
        vertLines: {
            color: string,
        },
        horzLines: {
            color: string,
        },
    }
}
export interface Theme {
    name: string,
    chartLayout: ChartLayout,
    candleStickConfig: {

    },
    histogramConfig: {

    },

    
}

export const darkTheme: Theme = {
    name: 'dark',
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
            watermarkColor: 'rgba(250, 250, 250, .1)',
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
    name: 'light',
    //default for now
    candleStickConfig: {

    },
    histogramConfig: {

    },

    chartLayout: {
        layout: {
            backgroundColor: "#ffff",
            lineColor: "#0000",
            textColor: "#0000",
            watermarkColor: 'rgba(0, 0, 0, .1)',
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
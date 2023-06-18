/*
 * @Author: STATICHIT
 * @Date: 2023-06-18 17:17:39
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2023-06-18 19:47:56
 * @FilePath: \resume_analysis\src\utils\echarts.js
 * @Description: 自定义
 */
//将下载的主题json文件放入const theme ={}中
const theme =
{
    "color": [
        "#8c93e4",
        "#93cde2",
        "#e9f0f8",
        "#abccff",
        "#e0d0f3",
        "#71dccc"
    ],
    "backgroundColor": "rgba(0,0,0,0)",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#ffffff"
        },
        "subtextStyle": {
            "color": "#cccccc"
        }
    },
    "line": {
        "itemStyle": {
            "borderWidth": "2"
        },
        "lineStyle": {
            "width": "3"
        },
        "symbolSize": "7",
        "symbol": "emptyRect",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "borderWidth": "2"
        },
        "lineStyle": {
            "width": "3"
        },
        "symbolSize": "7",
        "symbol": "emptyRect",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "barBorderWidth": "",
            "barBorderColor": "#ccc"
        }
    },
    "pie": {
        "itemStyle": {
            "borderWidth": "",
            "borderColor": "#ccc"
        }
    },
    "scatter": {
        "itemStyle": {
            "borderWidth": "",
            "borderColor": "#ccc"
        }
    },
    "boxplot": {
        "itemStyle": {
            "borderWidth": "",
            "borderColor": "#ccc"
        }
    },
    "parallel": {
        "itemStyle": {
            "borderWidth": "",
            "borderColor": "#ccc"
        }
    },
    "sankey": {
        "itemStyle": {
            "borderWidth": "",
            "borderColor": "#ccc"
        }
    },
    "funnel": {
        "itemStyle": {
            "borderWidth": "",
            "borderColor": "#ccc"
        }
    },
    "gauge": {
        "itemStyle": {
            "borderWidth": "",
            "borderColor": "#ccc"
        }
    },
    "candlestick": {
        "itemStyle": {
            "color": "#e098c7",
            "color0": "transparent",
            "borderColor": "#e098c7",
            "borderColor0": "#8fd3e8",
            "borderWidth": "2"
        }
    },
    "graph": {
        "itemStyle": {
            "borderWidth": "",
            "borderColor": "#ccc"
        },
        "lineStyle": {
            "width": 1,
            "color": "#aaaaaa"
        },
        "symbolSize": "7",
        "symbol": "emptyRect",
        "smooth": true,
        "color": [
            "#8c93e4",
            "#93cde2",
            "#f0edf3",
            "#9c92c7",
            "#ecd0db",
            "#71dccc"
        ],
        "label": {
            "color": "#eeeeee"
        }
    },
    "map": {
        "itemStyle": {
            "areaColor": "#eee",
            "borderColor": "#444",
            "borderWidth": 0.5
        },
        "label": {
            "color": "#000"
        },
        "emphasis": {
            "itemStyle": {
                "areaColor": "#e098c7",
                "borderColor": "#444",
                "borderWidth": 1
            },
            "label": {
                "color": "#ffffff"
            }
        }
    },
    "geo": {
        "itemStyle": {
            "areaColor": "#eee",
            "borderColor": "#444",
            "borderWidth": 0.5
        },
        "label": {
            "color": "#000"
        },
        "emphasis": {
            "itemStyle": {
                "areaColor": "#e098c7",
                "borderColor": "#444",
                "borderWidth": 1
            },
            "label": {
                "color": "#ffffff"
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#cccccc"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "color": "#383636"
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": [
                    "#eeeeee",
                    "#333333"
                ]
            }
        },
        "splitArea": {
            "show": true,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#cccccc"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "color": "#383636"
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": [
                    "#eeeeee",
                    "#333333"
                ]
            }
        },
        "splitArea": {
            "show": true,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#cccccc"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "color": "#383636"
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": [
                    "#eeeeee",
                    "#333333"
                ]
            }
        },
        "splitArea": {
            "show": true,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#cccccc"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "color": "#383636"
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": [
                    "#eeeeee",
                    "#333333"
                ]
            }
        },
        "splitArea": {
            "show": true,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "borderColor": "#999999"
        },
        "emphasis": {
            "iconStyle": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#433f3f"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#8fd3e8",
            "width": 1
        },
        "itemStyle": {
            "color": "#8fd3e8",
            "borderWidth": 1
        },
        "controlStyle": {
            "color": "#8fd3e8",
            "borderColor": "#8fd3e8",
            "borderWidth": 0.5
        },
        "checkpointStyle": {
            "color": "#8fd3e8",
            "borderColor": "#8a7ca8"
        },
        "label": {
            "color": "#8fd3e8"
        },
        "emphasis": {
            "itemStyle": {
                "color": "#8fd3e8"
            },
            "controlStyle": {
                "color": "#8fd3e8",
                "borderColor": "#8fd3e8",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#8fd3e8"
            }
        }
    },
    "visualMap": {
        "color": [
            "#8a7ca8",
            "#e098c7",
            "#cceffa"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(0,0,0,0)",
        "dataBackgroundColor": "rgba(255,255,255,0.3)",
        "fillerColor": "rgba(167,183,204,0.4)",
        "handleColor": "#a7b7cc",
        "handleSize": "100%",
        "textStyle": {
            "color": "#333"
        }
    },
    "markPoint": {
        "label": {
            "color": "#eeeeee"
        },
        "emphasis": {
            "label": {
                "color": "#eeeeee"
            }
        }
    }
}



//使用export default导出上面声明的主题
export default theme
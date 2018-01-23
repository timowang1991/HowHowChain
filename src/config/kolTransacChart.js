module.exports = [{
    "type": "stock",
    "theme": "light",
    "dataSets": [{
        "fieldMappings": [{
            "fromField": "open",
            "toField": "open"
        }, {
            "fromField": "close",
            "toField": "close"
        }, {
            "fromField": "high",
            "toField": "high"
        }, {
            "fromField": "low",
            "toField": "low"
        }, {
            "fromField": "volume",
            "toField": "volume"
        }, {
            "fromField": "value",
            "toField": "value"
        }],
        "color": "#468d46",
        "dataProvider": [],
        "categoryField": "date"
    }],
    "balloon": {
        "horizontalPadding": 13
    },
    "panels": [{
        "title": "Value",
        "stockGraphs": [{
            "id": "g1",
            "type": "candlestick",
            "openField": "open",
            "closeField": "close",
            "highField": "high",
            "lowField": "low",
            "valueField": "close",
            "lineColor": "#468d46",
            "fillColors": "#468d46",
            "negativeLineColor": "#e94e61",
            "negativeFillColors": "#e94e61",
            "fillAlphas": 1,
            "balloonText": "open:<b>[[open]]</b><br>close:<b>[[close]]</b><br>low:<b>[[low]]</b><br>high:<b>[[high]]</b>",
            "useDataSetColors": false
        }]
    }],
    "scrollBarSettings": {
        "graphType": "line",
        "usePeriod": "WW"
    },
    "panelsSettings": {
        "panEventsEnabled": true
    },
    "cursorSettings": {
        "valueBalloonsEnabled": true,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true
    }
}, {
    buy: [{
            buyAmount: 20,
            buyPrice: 11.2
        }, {
            buyAmount: 30,
            buyPrice: 11.15
        }, {
            buyAmount: 15,
            buyPrice: 11.10
        }, {
            buyAmount: 80,
            buyPrice: 11.05
        }
    ],
    sold: [{
            soldAmount: 80,
            soldPrice: 11.20
        }, {
            soldAmount: 15,
            soldPrice: 11.25
        }, {
            soldAmount: 40,
            soldPrice: 11.30
        }, {
            soldAmount: 95,
            soldPrice: 11.35
        }
    ]
}]
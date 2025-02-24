var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useRef, useEffect, useCallback, useState } from 'react';
import styled from "styled-components";
import { createChart, LineStyle, CandlestickSeries, ColorType } from 'lightweight-charts';
import ChartLoaderSpinner from './ChartComponents/ChartLoaderSpinner';
var ContainerStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 400px;\n  width: 100%:\n  max-width: 30vw;\n\n  @media only screen and (max-width: 990px) {\n    min-width: 100vw;\n    max-height: 250px;\n  }\n  @media only screen and (max-width: 1200px) {\n    max-width: 500px;\n  }\n"], ["\n  height: 400px;\n  width: 100%:\n  max-width: 30vw;\n\n  @media only screen and (max-width: 990px) {\n    min-width: 100vw;\n    max-height: 250px;\n  }\n  @media only screen and (max-width: 1200px) {\n    max-width: 500px;\n  }\n"])));
var LegendContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n\n  z-index: 4;\n  margin: 8px;\n"], ["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n\n  z-index: 4;\n  margin: 8px;\n"])));
export var ChartView = function (_a) {
    var initialChartData = _a.initialChartData, updateData = _a.updateData, precision = _a.precision, candleStickConfig = _a.candleStickConfig, histogramConfig = _a.histogramConfig, chartSetting = _a.chartSetting, chartLayout = _a.chartLayout, _b = _a.orders, orders = _b === void 0 ? [] : _b, _c = _a.userFills, userFills = _c === void 0 ? [] : _c, _d = _a.marketAlias, marketAlias = _d === void 0 ? undefined : _d, _e = _a.legends, legends = _e === void 0 ? { items: [] } : _e;
    var resizeObserver = useRef();
    var chartContainerRef = useRef();
    var chart = useRef();
    var candleSeries = useRef();
    var volumeSeries = useRef();
    var _f = useState([]), priceLines = _f[0], setPriceLines = _f[1];
    var _g = useState([]), _ = _g[0], setMarkers = _g[1];
    var setInitialData = useCallback(function () {
        if (!chart.current)
            return;
        // Create the Main Series (Candlesticks)
        candleSeries.current = chart.current.addSeries(CandlestickSeries, {
            priceFormat: {
                type: 'price', precision: 8,
                minMove: 0.000001
            }
        });
        /*
          apply custom priceFormatter to handle it manually
    
        chart.current.applyOptions({
          localization: {
              priceFormatter: {
                precision: 18,
              },
          },
      });*/
        //volumeSeries.current = chart.current.addHistogramSeries(histogramConfig);
        console.log(candleSeries);
        //legends
        legends.items.forEach(function (legend) {
            if (!chart.current)
                return;
            if (!legend.fnc)
                return;
            switch (legend.type) {
                case "crosshair":
                    chart.current.subscribeCrosshairMove(legend.fnc);
                    break;
                default:
                    break;
            }
        });
        console.log("set candlestick series", candleSeries.current.setData, initialChartData);
        if (candleSeries.current && initialChartData) {
            candleSeries.current.setData(initialChartData);
        }
        if (volumeSeries.current && initialChartData) {
            volumeSeries.current.setData(initialChartData);
        }
        chart.current.timeScale().fitContent();
        setOrderData();
        setMarkerData();
    }, [initialChartData, precision]);
    //set order price lines
    var setMarkerData = function () {
        //candleSeries?.current?.setMarkers([]);
        if (!chartSetting.trade.showExecutions)
            return;
        var createMarkers = function (ms) {
            var formatted = [];
            for (var key in ms) {
                var fill = ms[key];
                //break;
                var marker = {
                    time: fill.time,
                    position: fill.side === "b" ? 'belowBar' : 'aboveBar',
                    color: fill.side === "b" ? '#26A69A' : 'red',
                    shape: fill.side === "b" ? 'arrowUp' : 'arrowDown',
                    text: fill.side === "b" ? 'buy' : 'sell',
                };
                if (fill.market === marketAlias)
                    formatted.push(marker);
            }
            return formatted;
        };
        var formattedMarkers = createMarkers(userFills);
        //candleSeries?.current?.setMarkers(formattedMarkers);
        //setMarkers(formattedMarkers);
    };
    //set order price lines
    var setOrderData = function () {
        priceLines.forEach(function (priceLine) {
            var _a;
            (_a = candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current) === null || _a === void 0 ? void 0 : _a.removePriceLine(priceLine);
            var temp = priceLines.filter(function (line) { return line !== priceLine; });
            setPriceLines(temp);
        });
        if (!chartSetting.trade.showOrders)
            return;
        var createOrders = function (os) {
            var formatted = [];
            for (var key in os) {
                var o = os[key];
                var order = o;
                //has to be current market, not included and open status
                if (order.market === marketAlias && !formatted.includes(order) && order.status === "o") {
                    formatted.push(order);
                }
            }
            return formatted;
        };
        var formattedOrders = createOrders(orders);
        formattedOrders.forEach(function (order) {
            var _a;
            var priceLine = (_a = candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current) === null || _a === void 0 ? void 0 : _a.createPriceLine({
                price: order.price,
                color: order.side === "s" ? '#d11736' : '#176bd1',
                lineWidth: 1,
                lineStyle: LineStyle.Solid,
                axisLabelVisible: true,
                title: "".concat(order.side === "s" ? "sell" : "buy", " order ").concat(order.size),
            });
            var temp = priceLines;
            temp.push(priceLine);
            setPriceLines(temp);
        });
    };
    useEffect(function () {
        if (!chart.current)
            return;
        setOrderData();
    }, [orders, chart, chartSetting]);
    useEffect(function () {
        if (!chart.current)
            return;
        setMarkerData();
    }, [userFills, chart, chartSetting]);
    //candle data
    useEffect(function () {
        //candleSeries?.current?.update(updateData);
        //volumeSeries?.current?.update(updateData);
    }, [updateData]);
    //initialize chart
    useEffect(function () {
        if (!chartContainerRef.current)
            return;
        chartContainerRef.current.innerHTML = "";
        var watermarkText = chartSetting.background.watermarkText ? chartSetting.background.watermarkText : '';
        chart.current = createChart(chartContainerRef.current, {
            layout: __assign(__assign({}, chartLayout.layout), { attributionLogo: false }),
            grid: __assign({}, chartLayout.grid),
            timeScale: {
                timeVisible: true,
                secondsVisible: true,
                minBarSpacing: 1,
                rightOffset: 10,
            },
            rightPriceScale: {
                autoScale: true,
                ticksVisible: true,
            },
            crosshair: {
                mode: 0,
            },
            /*watermark: {
              visible: chartSetting.background.watermark,
              text: watermarkText ? watermarkText : '',
              color: chartLayout.layout.watermarkColor,
            }*/
        });
        setInitialData();
        return function () { var _a; return (_a = chart.current) === null || _a === void 0 ? void 0 : _a.remove(); };
    }, [setInitialData]);
    //update background settings
    useEffect(function () {
        if (!chart.current)
            return;
        var color = chartSetting.background.color;
        var background = color ? "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ",").concat(color.a) : chartLayout.layout.backgroundColor;
        var watermarkText = chartSetting.background.watermarkText;
        chart.current.applyOptions(__assign(__assign({}, chartLayout), { layout: __assign(__assign({}, chartLayout.layout), { background: {
                    type: ColorType.Solid,
                    color: background,
                }, attributionLogo: false }) }));
        console.log("update chart", chart.current.options());
    }, [chartLayout, chartSetting, chartSetting.background.color]);
    // Resize chart on container resizes.
    useEffect(function () {
        if (!chartContainerRef.current)
            return;
        resizeObserver.current = new ResizeObserver(function (entries) {
            if (!chart.current)
                return;
            var _a = entries[0].contentRect, width = _a.width, height = _a.height;
            chart.current.applyOptions({
                width: width,
                height: height,
            });
        });
        resizeObserver.current.observe(chartContainerRef.current);
        return function () { return resizeObserver.current.disconnect(); };
    }, []);
    if (!(initialChartData.length > 0))
        return React.createElement(ChartLoaderSpinner, null);
    //setup legends
    var legendList = legends.items.map(function (legend, key) { return React.createElement("div", { key: key }, legend.component); });
    return (React.createElement(ContainerStyle, null,
        React.createElement(LegendContainer, null, legendList),
        React.createElement("div", { ref: chartContainerRef, style: {
                width: '100%',
                height: '100%'
            } })));
};
var templateObject_1, templateObject_2;

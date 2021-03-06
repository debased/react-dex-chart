import { candleAdaptor as binance, socketAdaptor as binanceSocket } from "./binanceAdaptor";
import { candleAdaptor as ftx, socketAdaptor as ftxSocket } from "./ftxAdaptor";
import { candleAdaptor as coinbase, socketAdaptor as coinbaseSocket } from "./coinbaseAdaptor";
import { candleAdaptor as coinex } from "./coinexAdaptor";
export var binanceAdaptor = binance;
export var binanceSocketAdaptor = binanceSocket;
export var coinbaseAdaptor = coinbase;
export var coinbaseSocketAdaptor = coinbaseSocket;
export var ftxAdaptor = ftx;
export var ftxSocketAdaptor = ftxSocket;
export var coinexAdaptor = coinex;

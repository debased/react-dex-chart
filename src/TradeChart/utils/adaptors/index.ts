import { candleAdaptor as binance, socketAdaptor as binanceSocket } from "./binanceAdaptor";
import { candleAdaptor as ftx, socketAdaptor as ftxSocket } from "./ftxAdaptor";
import { candleAdaptor as coinbase, socketAdaptor as coinbaseSocket } from "./coinbaseAdaptor";
import { candleAdaptor as coinex } from "./coinexAdaptor";

export const binanceAdaptor         = binance;
export const binanceSocketAdaptor   = binanceSocket;

export const coinbaseAdaptor        = coinbase;
export const coinbaseSocketAdaptor  = coinbaseSocket;

export const ftxAdaptor             = ftx;
export const ftxSocketAdaptor       = ftxSocket;

export const coinexAdaptor          = coinex;
import { ChartSettings } from "../types";

export const presetSettings: ChartSettings = {
    timezone: {
      locale: '-4 UCT (NY)',
      showSessions: false,
    },
    trade: {
      showExecutions: false,
      showOrders: false,
      showPositions: false,
      extendLines: true,
      playSound: true,
    },

    background: {
      gradient: false,
      color: undefined,
      watermark: false,
      watermarkText: '',
    }
}
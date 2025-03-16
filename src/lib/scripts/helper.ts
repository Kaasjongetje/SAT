export function round(value: number, decimals: number) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  }
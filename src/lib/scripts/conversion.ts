export function secondsToTimeFormat(totalSeconds: number): [number, number, number] {
    if (Number.isNaN(totalSeconds)) return [NaN, NaN, NaN]

    totalSeconds = Math.round(totalSeconds)

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = (totalSeconds % 3600) % 60

    return [hours, minutes, seconds]
}

export function timeFormatToSeconds(hours: number, minutes: number, seconds: number) {
    return 3600 * hours + 60 * minutes + seconds
}
export function extractMinutesAndSeconds(totalSeconds: number): [number, number] {
    if (Number.isNaN(totalSeconds)) return [NaN, NaN]

    totalSeconds = Math.round(totalSeconds)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    return [minutes, seconds]
}

export function extractHoursMinutesAndSeconds(totalSeconds: number): [number, number, number] {
    let [minutes, seconds] = extractMinutesAndSeconds(totalSeconds)
    
    if (Number.isNaN(minutes)) return [NaN, NaN, NaN]

    const hours = Math.floor(minutes / 60)
    minutes = minutes % 60

    return [hours, minutes, seconds]
}

export function getTotalSeconds(hours: number, minutes: number, seconds: number): number {
    return 3600 * hours + 60 * minutes + seconds
}

export function metersPerSecondToKilometersPerHour (metersPerSeconds: number): number {
    return (18 / 5) * metersPerSeconds
}

export function kilometersPerHourToMetersPerSecond (kilometersPerHour: number): number {
    return (5 / 18) * kilometersPerHour
}

// Verhouding tussen m/s en s/km is altijd gelijk,
// daarom is een functie genoeg voor (m/s) -> (s/km) èn (s/km) -> (m/s)
export function convertMetersPerSecondAndSecondsPerKilometer (x: number): number {
    return x === 0 ? NaN : 1000 / x
}

// Hier ook verhouding gelijk
export function convertMetersPerSecondAndSecondsPer100Meter (x: number): number {
    return x === 0 ? NaN : 100 / x
}

export function metersToKilometers (meters: number): number {
    return meters / 1000
}

export function kilometersToMeters (kilometers: number): number {
    return kilometers * 1000
}
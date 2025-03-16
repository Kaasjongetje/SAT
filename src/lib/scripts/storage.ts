import { CalculationType } from "./enums"

export function storeNumber(key: string, value: number): void {
    localStorage.setItem(key, value.toString())
}

export function retrieveNumber(key: string): number | null {
    const value = localStorage.getItem(key)

    if (value === null) return null
    if (value === "NaN") return NaN

    const numberValue = Number(value)

    if (Number.isNaN(numberValue)) return null
    return numberValue
}

export const CALCULATIONTYPE_KEY = "CALCULATIONTYPE"

export function retrieveCalculationType(): CalculationType | null {
    const value = localStorage.getItem(CALCULATIONTYPE_KEY)

    if (value === null) return null

    if (Object.values(CalculationType).includes(value as CalculationType)) return value as CalculationType
    
    return null
}
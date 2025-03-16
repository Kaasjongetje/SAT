import { CalculationType } from "../scripts/enums"
import { 
    kilometersPerHourToMetersPerSecond,
    kilometersToMeters
} from "../scripts/conversion"

export const DEFAULT_CALCULATIONTYPE = CalculationType.TIME
export const DEFAULT_SPEED = kilometersPerHourToMetersPerSecond(10)
export const DEFAULT_DISTANCE = kilometersToMeters(10)
export const DEFAULT_TIME = DEFAULT_DISTANCE / DEFAULT_SPEED
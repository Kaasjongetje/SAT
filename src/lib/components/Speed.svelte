<script lang="ts">
    import Pace from "./Pace.svelte"
    import Input from "./abstract/Input.svelte"
    import { KILOMETERS_PER_HOUR_LABEL, MINUTES_PER_KILOMETER_LABEL, MINUTES_PER_100_METERS_LABEL } from "../config/unitLabels"
    import { CalculationType } from "../scripts/enums"
    import InputGroup from "./abstract/InputGroup.svelte"
    import { 
        metersPerSecondToKilometersPerHour, 
        kilometersPerHourToMetersPerSecond,
        convertMetersPerSecondAndSecondsPerKilometer,
        convertMetersPerSecondAndSecondsPer100Meter,
    } from "../scripts/conversion"
    import { round } from "../scripts/helper"

    let { speed, setSpeed, displayOnly } = $props()

</script>

<InputGroup inputGroupLabel={CalculationType.SPEED}>
    {#snippet inputGroupComponent()}
        <Input unitLabel={KILOMETERS_PER_HOUR_LABEL}>
            {#snippet inputValueComponent()}
                <input 
                    type="number"
                    value={round(metersPerSecondToKilometersPerHour(speed), 3)}
                    oninput={e => setSpeed(kilometersPerHourToMetersPerSecond(e.target.value))}
                    disabled={displayOnly}
                />
            {/snippet}
        </Input>
        
        <Input unitLabel={MINUTES_PER_KILOMETER_LABEL}>
            {#snippet inputValueComponent()}
                <Pace
                    speed={speed}
                    convert={convertMetersPerSecondAndSecondsPerKilometer} 
                    setSpeed={setSpeed}
                    disabled={displayOnly}
                />
            {/snippet}
        </Input>
        
        <Input unitLabel={MINUTES_PER_100_METERS_LABEL}>
            {#snippet inputValueComponent()}
                <Pace
                    speed={speed}
                    convert={convertMetersPerSecondAndSecondsPer100Meter}
                    setSpeed={setSpeed}
                    disabled={displayOnly}
                />
            {/snippet}
        </Input>
    {/snippet}
</InputGroup>

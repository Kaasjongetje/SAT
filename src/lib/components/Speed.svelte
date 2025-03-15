<script lang="ts">
    import Pace from "./Pace.svelte"
    import Input from "./abstract/Input.svelte"
    import { kilometersPerHourLabel, minutesPerKilometerLabel, minutesPer100MeterLabel } from "../config/unitLabels"
    import { CalculationType } from "../scripts/enums"
    import InputGroup from "./abstract/InputGroup.svelte"


    let speed: number = $state(10)

    function setSpeed(newSpeed: number) {
        speed = newSpeed
    }

</script>

<InputGroup inputGroupLabel={CalculationType.SPEED}>
    {#snippet inputGroupComponent()}
        <Input unitLabel={kilometersPerHourLabel}>
            {#snippet inputValueComponent()}
                <input 
                    type="number"
                    value={speed}
                    oninput={e => speed = e.target.value}
                />
            {/snippet}
        </Input>
        
        <Input unitLabel={minutesPerKilometerLabel}>
            {#snippet inputValueComponent()}
                <Pace
                    speed={speed}
                    convert={x => 3600 / x} 
                    setSpeed={setSpeed}
                />
            {/snippet}
        </Input>
        
        <Input unitLabel={minutesPer100MeterLabel}>
            {#snippet inputValueComponent()}
                <Pace
                    speed={speed}
                    convert={x => 360 / x}
                    setSpeed={setSpeed}
                />
            {/snippet}
        </Input>
    {/snippet}
</InputGroup>

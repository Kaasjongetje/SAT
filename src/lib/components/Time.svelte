<script lang="ts">
    import Input from "./abstract/Input.svelte"
    import { TIME_LABEL } from "../config/unitLabels"
    import { CalculationType } from "../scripts/enums"
    import InputGroup from "./abstract/InputGroup.svelte"
    import { extractHoursMinutesAndSeconds, getTotalSeconds } from "../scripts/conversion"

    let { time, setTime } = $props()
    let [hours, minutes, seconds] = $derived(extractHoursMinutesAndSeconds(time))

</script>

<InputGroup inputGroupLabel={CalculationType.TIME}>
    {#snippet inputGroupComponent()}
        <Input unitLabel={TIME_LABEL}>
            {#snippet inputValueComponent()}
                <input 
                    type="number"
                    class="time-input"
                    value={hours}
                    oninput={e => setTime(getTotalSeconds(Number(e.target.value), minutes, seconds))}
                >
        
                <div class="colon">:</div>

                <input 
                    type="number"
                    class="time-input"
                    value={minutes}
                    oninput={e => setTime(getTotalSeconds(hours, Number(e.target.value), seconds))}
                >
        
                <div class="colon">:</div>

                <input 
                    type="number"
                    class="time-input"
                    value={seconds}
                    oninput={e => setTime(getTotalSeconds(hours, minutes, Number(e.target.value)))}
                >
            {/snippet}
        </Input>
    {/snippet}
</InputGroup>

<script lang="ts">
    import Input from "./abstract/Input.svelte"
    import { timeLabel } from "../config/unitLabels"
    import { CalculationType } from "../scripts/enums"
    import InputGroup from "./abstract/InputGroup.svelte"
    import { secondsToTimeFormat, timeFormatToSeconds } from "../scripts/conversion"

    let { time, setTime } = $props()
    let [hours, minutes, seconds] = $derived(secondsToTimeFormat(time))

    //

    // !!! DIT IS NOG BUGGY

    //

</script>

<InputGroup inputGroupLabel={CalculationType.TIME}>
    {#snippet inputGroupComponent()}
        <Input unitLabel={timeLabel}>
            {#snippet inputValueComponent()}
                <input 
                    type="number"
                    class="time-input"
                    value={hours}
                    oninput={e => setTime(timeFormatToSeconds(e.target.value, minutes, seconds))}
                >
        
                <div class="colon">:</div>

                <input 
                    type="number"
                    class="time-input"
                    value={minutes}
                    oninput={e => setTime(timeFormatToSeconds(hours, e.target.value, seconds))}
                >
        
                <div class="colon">:</div>

                <input 
                    type="number"
                    class="time-input"
                    value={seconds}
                    oninput={e => setTime(timeFormatToSeconds(hours, minutes, e.target.value))}
                >
            {/snippet}
        </Input>
    {/snippet}
</InputGroup>

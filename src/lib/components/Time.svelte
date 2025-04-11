<script lang="ts">
    import Input from "./abstract/Input.svelte"
    import { TIME_LABEL } from "../config/unitLabels"
    import { CalculationType } from "../scripts/enums"
    import InputGroup from "./abstract/InputGroup.svelte"
    import { extractHoursMinutesAndSeconds, getTotalSeconds } from "../scripts/conversion"
    import TimeSelect from "./TimeSelect.svelte"

    let { time, setTime, displayOnly } = $props()
    let [hours, minutes, seconds] = $derived(extractHoursMinutesAndSeconds(time))

</script>


<InputGroup inputGroupLabel={CalculationType.TIME}>
    {#snippet inputGroupComponent()}
        <Input unitLabel={TIME_LABEL}>
            {#snippet inputValueComponent()}
                <TimeSelect 
                    value={hours}
                    max={11}
                    disabled={displayOnly}
                    onChange={(newHours: number) => setTime(getTotalSeconds(newHours, minutes, seconds))}
                />

                <div class="colon">:</div>

                <TimeSelect
                    value={minutes}
                    max={59}
                    disabled={displayOnly}
                    onChange={(newMinutes: number) => setTime(getTotalSeconds(hours, newMinutes, seconds))}
                />

                <div class="colon">:</div>

                <TimeSelect
                    value={seconds}
                    max={59}
                    disabled={displayOnly}
                    onChange={(newSeconds: number) => setTime(getTotalSeconds(hours, minutes, newSeconds))}
                />
            {/snippet}
        </Input>
    {/snippet}
</InputGroup>




















<!-- <input 
type="number"
class="time-input"
value={hours}
oninput={e => setTime(getTotalSeconds(Number(e.target.value), minutes, seconds))}
disabled={displayOnly}
>

<div class="colon">:</div>

<input 
type="number"
class="time-input"
value={minutes}
oninput={e => setTime(getTotalSeconds(hours, Number(e.target.value), seconds))}
disabled={displayOnly}
>

<div class="colon">:</div>

<input 
type="number"
class="time-input"
value={seconds}
oninput={e => setTime(getTotalSeconds(hours, minutes, Number(e.target.value)))}
disabled={displayOnly}
> -->
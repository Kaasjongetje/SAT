<script lang="ts">
    import { extractMinutesAndSeconds, getTotalSeconds } from "../scripts/conversion"
    import TimeSelect from "./TimeSelect.svelte";

    let { speed, convert, setSpeed, disabled } = $props()

    const [minutes, seconds] = $derived(extractMinutesAndSeconds(convert(speed)))

</script>

<TimeSelect 
    value={minutes}
    max={59}
    disabled={disabled}
    onChange={(newMinutes: number) => setSpeed(convert(getTotalSeconds(0, newMinutes, seconds)))}
/>

<div class="colon">:</div>

<TimeSelect 
    value={seconds}
    max={59}
    disabled={disabled}
    onChange={(newSeconds: number) => setSpeed(convert(getTotalSeconds(0, minutes, newSeconds)))}
/>

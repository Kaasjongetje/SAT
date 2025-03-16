<script lang="ts">
    import { extractMinutesAndSeconds, getTotalSeconds } from "../scripts/conversion"

    let { speed, convert, setSpeed } = $props()

    const [minutes, seconds] = $derived(extractMinutesAndSeconds(convert(speed)))

</script>

<input 
    type="number"
    value={minutes}
    oninput={e => setSpeed(convert(getTotalSeconds(0, Number(e.target.value), seconds)))}
    class="time-input"
>

<div class="colon">:</div>

<input 
    type="number"
    value={seconds}
    oninput={e => setSpeed(convert(getTotalSeconds(0, minutes, Number(e.target.value))))}
    class="time-input"
>

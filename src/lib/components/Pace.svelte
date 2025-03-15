<script lang="ts">
    let { speed, convert, setSpeed } = $props()

    const [minutes, seconds] = $derived(extractMinutesAndSeconds(convert(speed)))

    function extractMinutesAndSeconds(totalSeconds) {
        totalSeconds = Math.round(totalSeconds)
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60
        return [minutes, seconds]
    }

    function update(minutes, seconds) {
        setSpeed(convert(minutes * 60 + seconds))
    }

</script>

<input 
    type="number"
    value={minutes}
    oninput={e => update(Number(e.target.value), seconds)}
    class="time-input"
>

<div class="colon">:</div>

<input 
    type="number"
    value={seconds}
    oninput={e => {
        update(minutes, Number(e.target.value))
    }}
    class="time-input"
>

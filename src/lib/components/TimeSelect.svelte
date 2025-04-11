<script lang="ts">
    import { derived } from "svelte/store";

    let { value, max, onChange, disabled } = $props()
    let options = $derived.by(() => {
        const list = []

        for (let i = 0; i <= max; i++) {
            list.push({
                value: i,
                label: i < 10 ? `0${i}` : i.toString()
            })
        }

        return list
    })


    function isIn(value: number) {

    }

</script>

<select
    disabled={disabled}
    onchange={e => onChange(e.target.value)}
    class="time-select"
>
    {#each options as option}
        <option 
            value={option.value}
            selected={option.value === value}
        >
            {option.label}
        </option>
    {/each}

    {#if !options.some(option => option.value === value)}
        <option 
            value={value}
            selected={true}
            hidden
        >
            {value.toString()}
        </option>
    {/if}
</select>



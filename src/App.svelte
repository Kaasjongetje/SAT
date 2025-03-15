<script lang="ts">
    import { CalculationType } from "./lib/scripts/enums"
    import CalculationTypeSelector from "./lib/components/CalculationTypeSelector.svelte"
    import Speed from "./lib/components/Speed.svelte"
    import Distance from "./lib/components/Distance.svelte"
    import Time from "./lib/components/Time.svelte"
    import Menu from "./lib/components/abstract/Menu.svelte"

    let calculationType = $state(CalculationType.TIME)
    let speed = $state(100) // m/s
    let distance = $state(200) // m
    let time = $state(3723) // s

    const setSpeed = (newSpeed: number) => speed = newSpeed
    const setDistance = (newDistance: number) => distance = newDistance
    const setTime = (newTime: number) => time = newTime

    function setCalculationType (newCalculationType: CalculationType) {
        if (newCalculationType === calculationType) return
        calculationType = newCalculationType
    } 


</script>

<CalculationTypeSelector 
    selectedCalculationType={calculationType}
    setCalculationType={setCalculationType} 
/>

{#if calculationType == CalculationType.SPEED}
    <Menu>
        {#snippet input1()}
            <Distance distance={distance} setDistance={setDistance}/>
        {/snippet}

        {#snippet input2()}
            <Time time={time} setTime={setTime} />
        {/snippet}

        {#snippet output()}
            <Speed  />
        {/snippet}
    </Menu>
{:else if calculationType == CalculationType.DISTANCE}
    <Menu>
        {#snippet input1()}
            <Speed />
        {/snippet}

        {#snippet input2()}
            <Time time={time} setTime={setTime} />
        {/snippet}

        {#snippet output()}
            <Distance distance={distance} setDistance={setDistance}/>
        {/snippet}
    </Menu>
{:else if calculationType == CalculationType.TIME}
    <Menu>
        {#snippet input1()}
            <Speed />
        {/snippet}

        {#snippet input2()}
            <Distance distance={distance} setDistance={setDistance} />
        {/snippet}

        {#snippet output()}
            <Time time={time} setTime={setTime} />
        {/snippet}
    </Menu>
{/if}
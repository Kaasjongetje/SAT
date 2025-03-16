<script lang="ts">
    import { CalculationType } from "./lib/scripts/enums"
    import CalculationTypeSelector from "./lib/components/CalculationTypeSelector.svelte"
    import Speed from "./lib/components/Speed.svelte"
    import Distance from "./lib/components/Distance.svelte"
    import Time from "./lib/components/Time.svelte"
    import Menu from "./lib/components/abstract/Menu.svelte"
    import { 
        DEFAULT_CALCULATIONTYPE,
        DEFAULT_SPEED,
        DEFAULT_DISTANCE,
        DEFAULT_TIME
     } from "./lib/config/defaultValues"
     import { retrieveNumber, storeNumber, retrieveCalculationType, CALCULATIONTYPE_KEY } from "./lib/scripts/storage"

    let calculationType = $state(retrieveCalculationType() ?? DEFAULT_CALCULATIONTYPE)
    let speed = $state(retrieveNumber(CalculationType.SPEED) ?? DEFAULT_SPEED) // (m/s)
    let distance = $state(retrieveNumber(CalculationType.DISTANCE) ?? DEFAULT_DISTANCE) // (m)
    let time = $state(retrieveNumber(CalculationType.TIME) ?? DEFAULT_TIME) // (s)

    const setSpeed = (newSpeed: number) => speed = newSpeed
    const setDistance = (newDistance: number) => distance = newDistance
    const setTime = (newTime: number) => time = newTime
    const setCalculationType = (newCalculationType: CalculationType) => calculationType = newCalculationType

    $effect(() => {
        if (calculationType === CalculationType.SPEED) {
            speed = time === 0 ? NaN : distance / time
        } else if (calculationType === CalculationType.DISTANCE) {
            distance = speed * time
        } else if (calculationType === CalculationType.TIME) {
            time = speed === 0 ? NaN : distance / speed
        }

        storeNumber(CalculationType.SPEED, speed)
        storeNumber(CalculationType.DISTANCE, distance)
        storeNumber(CalculationType.TIME, time)
        localStorage.setItem(CALCULATIONTYPE_KEY, calculationType)
    })

</script>

<CalculationTypeSelector 
    selectedCalculationType={calculationType}
    setCalculationType={setCalculationType} 
/>

{#if calculationType == CalculationType.SPEED}
    <Menu>
        {#snippet input1()}
            <Distance distance={distance} setDistance={setDistance} displayOnly={false} />
        {/snippet}

        {#snippet input2()}
            <Time time={time} setTime={setTime} displayOnly={false} />
        {/snippet}

        {#snippet output()}
            <Speed speed={speed} setSpeed={setSpeed} displayOnly={true} />
        {/snippet}
    </Menu>
{:else if calculationType == CalculationType.DISTANCE}
    <Menu>
        {#snippet input1()}
            <Speed speed={speed} setSpeed={setSpeed} displayOnly={false} />
        {/snippet}

        {#snippet input2()}
            <Time time={time} setTime={setTime} displayOnly={false} />
        {/snippet}

        {#snippet output()}
            <Distance distance={distance} setDistance={setDistance} displayOnly={true} />
        {/snippet}
    </Menu>
{:else if calculationType == CalculationType.TIME}
    <Menu>
        {#snippet input1()}
            <Speed speed={speed} setSpeed={setSpeed} displayOnly={false} />
        {/snippet}

        {#snippet input2()}
            <Distance distance={distance} setDistance={setDistance} displayOnly={false} />
        {/snippet}

        {#snippet output()}
            <Time time={time} setTime={setTime} displayOnly={true} />
        {/snippet}
    </Menu>
{/if}
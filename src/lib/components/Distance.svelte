<script lang="ts">
    import InputGroup from "./abstract/InputGroup.svelte"
    import Input from "./abstract/Input.svelte"
    import { KILOMETERS_LABEL, METERS_LABEL } from "../config/unitLabels"
    import { CalculationType } from "../scripts/enums"
    import { metersToKilometers, kilometersToMeters } from "../scripts/conversion"

    let { distance, setDistance } = $props()

</script>

<InputGroup inputGroupLabel={CalculationType.DISTANCE}>
    {#snippet inputGroupComponent()}
        <Input unitLabel={KILOMETERS_LABEL}>
            {#snippet inputValueComponent()}
                <input 
                    type="number" 
                    value={metersToKilometers(distance)}
                    oninput={e => setDistance(kilometersToMeters(Number(e.target.value)))}
                />
            {/snippet}
        </Input>
        
        
        <Input unitLabel={METERS_LABEL}>
            {#snippet inputValueComponent()}
                <input 
                    type="number" 
                    value={distance}
                    oninput={e => setDistance(Number(e.target.value))}
                />
            {/snippet}
        </Input>
    {/snippet}
</InputGroup>






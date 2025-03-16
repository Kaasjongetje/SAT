<script lang="ts">
    import InputGroup from "./abstract/InputGroup.svelte"
    import Input from "./abstract/Input.svelte"
    import { KILOMETERS_LABEL, METERS_LABEL } from "../config/unitLabels"
    import { CalculationType } from "../scripts/enums"
    import { metersToKilometers, kilometersToMeters } from "../scripts/conversion"
    import { round } from "../scripts/helper"

    let { distance, setDistance, displayOnly } = $props()

</script>

<InputGroup inputGroupLabel={CalculationType.DISTANCE}>
    {#snippet inputGroupComponent()}
        <Input unitLabel={KILOMETERS_LABEL}>
            {#snippet inputValueComponent()}
                <input 
                    type="number" 
                    value={round(metersToKilometers(distance), 3)}
                    oninput={e => setDistance(kilometersToMeters(Number(e.target.value)))}
                    disabled={displayOnly}
                />
            {/snippet}
        </Input>
        
        
        <Input unitLabel={METERS_LABEL}>
            {#snippet inputValueComponent()}
                <input 
                    type="number" 
                    value={round(distance, 3)}
                    oninput={e => setDistance(Number(e.target.value))}
                    disabled={displayOnly}
                />
            {/snippet}
        </Input>
    {/snippet}
</InputGroup>






<script lang="ts">
    import InputGroup from "./abstract/InputGroup.svelte"
    import Input from "./abstract/Input.svelte"
    import { kilometersLabel, metersLabel } from "../config/unitLabels"
    import { CalculationType } from "../scripts/enums"

    let { distance, setDistance } = $props()

</script>

<InputGroup inputGroupLabel={CalculationType.DISTANCE}>
    {#snippet inputGroupComponent()}
        <Input unitLabel={kilometersLabel}>
            {#snippet inputValueComponent()}
                <input 
                    type="number" 
                    value={distance / 1000}
                    oninput={e => setDistance(e.target.value * 1000)}
                />
            {/snippet}
        </Input>
        
        
        <Input unitLabel={metersLabel}>
            {#snippet inputValueComponent()}
                <input 
                    type="number" 
                    value={distance}
                    oninput={e => setDistance(e.target.value)}
                />
            {/snippet}
        </Input>
    {/snippet}
</InputGroup>






<script lang="ts">
    import { CalculationType } from "../scripts/enums";

    let { 
        selectedCalculationType, 
        setCalculationType 
    } = $props()

</script>

<div class="calculation-type-selector">
    {#each Object.values(CalculationType) as calculationType}
        <button class="calculation-type-select-button"
            onclick={() => setCalculationType(calculationType)}
            class:selected={calculationType === selectedCalculationType}
        >
            {calculationType}
        </button>
    {/each}
</div>

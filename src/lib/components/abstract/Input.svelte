<script lang="ts">
    let { unitLabel, inputValueComponent } = $props()

</script>

<div class="input">
    <span class="unit-label">
        {unitLabel}
    </span>
    
    <div class="value-container">
        {@render inputValueComponent?.()}
    </div>
</div>


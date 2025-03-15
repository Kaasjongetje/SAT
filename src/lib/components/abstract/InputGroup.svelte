<script lang="ts">
    let { inputGroupLabel, inputGroupComponent } = $props()
</script>

<div class="input-group">
    <span class="input-group-label">
        {inputGroupLabel}
    </span>

    <div class="inputs-container">
        {@render inputGroupComponent?.()}
    </div>
</div>
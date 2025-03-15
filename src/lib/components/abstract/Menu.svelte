<script lang="ts">
  let { input1, input2, output } = $props()

</script>

<div class="main-menu">
  {@render input1?.()}

  {@render input2?.()}

  <div class="dividing-line"></div>

  {@render output?.()}
</div>

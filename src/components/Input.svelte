<script>
  export let name = "World";
</script>

<div class="Input">
  <input type="text" name="input" bind:value={name} />
  <p>Hello {name}!</p>
</div>
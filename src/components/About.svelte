<script>
  import Button from "./Button.svelte";

  let someText = `Frontend Developer at Platzi`;
  let count = 0;
  let styles = { darkmode: false };

  function countClick() {
    count += 1;
  }

  function toggle() {
    styles.darkmode = !styles.darkmode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<style>
  p {
    color: var(--theme-color);
  }
</style>

<div class="About">

  {#if !styles.darkmode}
    <p>{someText}</p>
  {:else}
    <p>
      <span>Hello DarkMode</span>
    </p>
  {/if}

  <Button on:click={countClick} {count} text="Click" />
  <Button on:click={toggle} text="DarkMode" />
</div>
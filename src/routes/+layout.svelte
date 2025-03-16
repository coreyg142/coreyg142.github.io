<script>
  let { children } = $props();
  import "../app.css";
</script>

<div class="bg-red">
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</div>

{@render children()}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
</style>

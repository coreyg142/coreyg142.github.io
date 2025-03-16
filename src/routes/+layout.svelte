<script>
  let { children } = $props();
  import "../app.css";
</script>

<!-- <div class="container mx-auto h-0">
  <ul class="flex">
    <li class="mr-6">
      <a class="text-blue-500 hover:text-blue-800" href="/">Home</a>
    </li>
    <li class="mr-6">
      <a class="text-blue-500 hover:text-blue-800" href="/about">About</a>
    </li>
  </ul>
</div> -->

{@render children()}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
</style>

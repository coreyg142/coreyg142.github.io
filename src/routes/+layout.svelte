<script>
  let { children } = $props();
  import "../app.css";
  import Seo from "sk-seo";
</script>

<Seo />

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
  /* @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"); */
  @import url("https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Flow+Circular&family=Linefont:wght@4..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Redacted+Script:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Workbench&display=swap");

  :global(body) {
    background-color: #1e2939;
  }

  :global(.visually-hidden) {
    border: 0;
    padding: 0;
    margin: 0;
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(
      1px 1px 1px 1px
    ); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
    clip: rect(
      1px,
      1px,
      1px,
      1px
    ); /*maybe deprecated but we need to support legacy browsers */
    clip-path: inset(
      50%
    ); /*modern browsers, clip-path works inwards from each corner*/
    white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
  }
</style>

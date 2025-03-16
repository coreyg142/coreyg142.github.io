<script>
  import Fa from "svelte-fa";
  import {
    faGithub,
    faLinkedin,
    faSquareVimeo,
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="flex h-screen">
  <div class="m-auto">
    <h1>Under Construction</h1>
    <p>
      In the meantime, please visit <a href="https://www.github.com/coreyg142">
        <Fa icon={faGithub} class="inline-block text-2xl" />
      </a>
      or
      <a href="https://www.linkedin.com/in/coreyg142/">
        <Fa icon={faLinkedin} class="inline-block text-2xl " />
      </a>
    </p>
  </div>
</div>

<style lang="scss">
  h1 {
    font-size: var(--text-4xl);
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  p {
    font-size: var(--text-lg);
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>

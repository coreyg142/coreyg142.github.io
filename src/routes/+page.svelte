<script lang="ts">
  import Fa from "svelte-fa";
  import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<div class="flex h-screen">
  <div class="m-auto">
    <h1>
      Corey <span class="font-bold">W Gross</span>
    </h1>
    <h2>Software Engineer</h2>
    <p>
      In the meantime, please visit <a href="https://www.github.com/coreyg142">
        <Fa icon={faGithub} class="inline-icon" />
      </a>
      or
      <a href="https://www.linkedin.com/in/coreyg142/">
        <Fa icon={faLinkedin} class="inline-icon" />
      </a>
    </p>
  </div>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  h1 {
    @apply text-[3rem] text-purple-600 font-[Workbench];
  }
  h2 {
    @apply text-[2rem] text-purple-500 font-[Nunito];
    /* font-family: "Flow Circular", system-ui; */
  }
  p {
    @apply text-[1.2rem] text-gray-700 font-[Nunito];
  }
</style>

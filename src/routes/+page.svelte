<script lang="ts">
  import Fa from "svelte-fa";
  import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
  import { onMount } from "svelte";

  const name = "Corey W Gross";
  const nameSplit = name.split("");
  const transitioned = new Array(name.length).fill(false);

  onMount(() => {
    setTimeout(() => {
      nameSplit.forEach((_, i) => {
        setTimeout(() => {
          transitioned[i] = true;
        }, i * 150);
      });
    }, 250);
  });
</script>

<div class="flex h-screen">
  <div class="m-auto">
    <h1>
      {#each nameSplit as char, i}
        <span
          class={transitioned[i] ? "font-[Workbench]" : "font-[Flow_Circular]"}
        >
          {char}
        </span>
      {/each}
    </h1>
    <!-- <h1>
      Corey <span class="font-bold">W Gross</span>
    </h1> -->
    <p>
      In the meantime, please visit <a
        href="https://www.github.com/coreyg142"
        aria-label=" My GitHub"
      >
        <Fa icon={faGithub} class="inline-icon" />
      </a>
      or
      <a href="https://www.linkedin.com/in/coreyg142/" aria-label="My LinkedIn">
        <Fa icon={faLinkedin} class="inline-icon" />
      </a>
    </p>
  </div>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  h1 {
    @apply text-[3rem] text-purple-600 font-[Flow_Circular];
  }
  h2 {
    @apply text-[2rem] text-purple-500 font-[Nunito];
    /* font-family: "Flow Circular", system-ui; */
  }
  p {
    @apply text-[1.2rem] text-gray-700 font-[Nunito];
  }
</style>

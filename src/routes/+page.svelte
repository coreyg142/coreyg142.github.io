<script lang="ts">
  import Fa from "svelte-fa";
  import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
  import {
    faEnvelope,
    faGraduationCap,
  } from "@fortawesome/free-solid-svg-icons";
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
  <div class="m-auto w-2xs md:w-2xl">
    <div class="name-header text-center">
      <h1>
        {#each nameSplit as char, i}
          <span
            class="{transitioned[i]
              ? 'font-[Doto]'
              : 'font-[Flow_Circular]'} inline-block w-9"
          >
            {char}
          </span>
        {/each}
      </h1>
    </div>
    <hr class="text-gray-600 rounded-3xl border-2" />
    <div class="pt-6 pb-6">
      <h2 class="text-center">About Me</h2>
      <p>
        Hi! I'm Corey, a recent college graduate looking to start my lifelong
        career in tech! I'm a passionate developer skilled in both frontend and
        backend development, as well as database management I'm eager to learn
        and grow with a team of like-minded individuals.
      </p>
    </div>
    <div class="text-center">
      <h2>Connect with Me!</h2>
      <a href="https://www.github.com/coreyg142" target="_blank">
        <Fa
          icon={faGithub}
          class="text-5xl px-1 inline-icon text-gray-300 hover:text-[#4078c0]"
        />
        <span class="visually-hidden">My GitHub</span>
      </a>
      <a
        href="https://rit-csm.symplicity.com/profiles/corey.gross"
        target="_blank"
      >
        <Fa
          icon={faGraduationCap}
          class="text-5xl px-1 inline-icon text-gray-300 hover:text-[#F76902]"
        />
        <span class="visually-hidden">My RIT Profile</span>
      </a>

      <a href="https://www.linkedin.com/in/coreyg142" target="_blank">
        <Fa
          icon={faLinkedin}
          class="text-5xl px-1 inline-icon text-gray-300 hover:text-[#0a66c2]"
        />
        <span class="visually-hidden">My LinkedIn</span>
      </a>
      <a href="mailto:corey9gross@gmail.com">
        <Fa
          icon={faEnvelope}
          class="text-5xl px-1 inline-icon text-gray-300 hover:text-[#d93025]"
        />
        <span class="visually-hidden">My Email</span>
      </a>
    </div>
  </div>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  h1 {
    @apply text-[4rem] text-purple-600 font-bold;
  }

  :global(h2) {
    @apply text-[1.8rem] text-purple-500 font-[Nunito];
  }
  /* h2 {
    @apply text-[2rem] text-purple-500 font-[Nunito];
    font-family: "Flow Circular", system-ui;
  } */
  :global(p) {
    @apply text-[1.2rem] text-gray-300 font-[Nunito];
  }
</style>

<script>
  import { fade } from "svelte/transition";
  import { windowWidth } from "../store.js";
  import { urlFor } from "../sanity";

  export let painting;

  let hovering = false;

  const enter = () => {
    hovering = true;
  };

  const leave = () => {
    hovering = false;
  };
</script>

<div class="portfolio-wrapper">
  <li class="card-display">
    <a
      href="/work/{painting.slug.current}"
      on:mouseenter={enter}
      on:mouseleave={leave}
    >
      {#if hovering && $windowWidth >= 768}
        <img
          in:fade
          src={urlFor(painting.hoverImg)
            .width(367)
            .height(489)
            .quality(80)
            .auto("format")
            .url()}
          alt={painting.alt}
          width="367"
          height="489"
        />
      {:else}
        <img
          in:fade
          src={urlFor(painting.mainImage)
            .width(367)
            .height(489)
            .quality(80)
            .auto("format")
            .url()}
          alt={painting.alt}
          width="367"
          height="489"
        />
      {/if}
    </a>
  </li>
</div>

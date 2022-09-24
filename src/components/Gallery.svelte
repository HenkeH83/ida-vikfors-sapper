<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { windowWidth } from "../store";
  import { urlFor } from "../sanity";

  const dispatch = createEventDispatcher();

  export let galleryImages;
  export let swipeImages;

  $: isPhone = $windowWidth < 768 ? true : false;

  const getGallery = (index) => {
    dispatch("gallery", {
      images: swipeImages,
      index: index,
    });
  };
</script>

<div class="images">
  {#if isPhone}
    {#each galleryImages as img, i}
      <img
        in:fade
        class="image"
        src={urlFor(img)
          .width(374)
          .height(498)
          .quality(80)
          .auto("format")
          .url()}
        alt="Painting by Ida Vikfors"
        width="374"
        height="498"
      />
    {/each}
  {:else}
    {#each galleryImages as img, i}
      <button class="img-btn" on:click={() => getGallery(i)}>
        <img
          in:fade
          class="image"
          src={urlFor(img)
            .width(374)
            .height(498)
            .quality(80)
            .auto("format")
            .url()}
          alt="Painting by Ida Vikfors"
          width="374"
          height="498"
        />
      </button>
    {/each}
  {/if}
</div>

<style>
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

  .img-btn {
    padding: 0;
    background-color: transparent;
    border: none;
  }
  .images {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 1rem;
  }
  .image {
    height: auto;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    .images {
      display: -ms-grid;
      display: grid;
      -ms-grid-columns: (1fr) [3];
      grid-template-columns: repeat(3, 1fr);
    }
    button {
      cursor: pointer;
    }
  }
</style>

<script context="module">
  import { client } from "../../sanity";

  const query = `*[_type == 'painting']
  {
    slug,
    mainImage{
      asset->{
        url
      }
    },
    hoverImg{
      asset->{
        url
      }
    },
    alt,
    sort
  }`;

  export async function preload() {
    let paintings = await client
      .fetch(query)
      .then((res) => res.sort((a, b) => a.sort - b.sort));
    return { paintings };
  }
</script>

<script>
  import PortfolioItem from "../../components/PortfolioItem.svelte";
  import { setCurrentPage } from "../../store";
  import { onMount } from "svelte";

  export let paintings;

  onMount(() => {
    setCurrentPage(window.location.href);
  });
</script>

<svelte:head>
  <title>Ida Vikfors | Art</title>
  <meta property="og:title" content="Ida Vikfors | Art" />
  <meta
    name="description"
    content="Paintings by Ida Vikfors. Explore and find your favourite, then you can order one by sending a mail, using the mail icon at the bottom of the page."
  />
  <meta
    property="og:description"
    content="Paintings by Ida Vikfors. Explore and find your favourite, then you can order one by sending a mail, using the mail icon at the bottom of the page."
  />
</svelte:head>

<portfolio-page>
  <ul class="posts">
    {#each paintings as painting}
      <PortfolioItem {painting} />
    {/each}
  </ul>
</portfolio-page>

<style>
  @media only screen and (min-width: 768px) {
    portfolio-page {
      display: inline-block;
      margin-top: 7rem;
    }
  }
</style>

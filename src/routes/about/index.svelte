<script context="module">
  import { client } from "../../sanity";

  const aboutQuery = `*[_type == 'about']
  {
    image {
        asset -> {
          url,
          lqip
        },
        hotspot
      },
      alt,
      italic,
      paragraph,
      sort
    }`;

  const exhibitionsQuery = `*[_type == 'exhibition']
    {
      place,
      exhibitionName,
      displayDate,
      date
    }`;

  const originalArtQuery = `*[_type == 'originalArt']
    {
      text,
      link,
      sort
    }`;

  const artPrintsQuery = `*[_type == 'artPrints']
    {
      text,
      link,
      sort
    }`;

  export async function preload() {
    let aboutData = await client
      .fetch(aboutQuery)
      .then((res) => res.sort((a, b) => a.sort - b.sort));

    let exhibitionData = await client
      .fetch(exhibitionsQuery)
      .then((res) =>
        res.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      );

    let originalArtData = await client
      .fetch(originalArtQuery)
      .then((res) => res.sort((a, b) => a.sort - b.sort));

    let artPrintsData = await client
      .fetch(artPrintsQuery)
      .then((res) => res.sort((a, b) => a.sort - b.sort));

    return { aboutData, exhibitionData, originalArtData, artPrintsData };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { setCurrentPage } from "../../store";
  import AboutSection from "../../components/AboutSection.svelte";
  import ExhibitionSection from "../../components/ExhibitionSection.svelte";
  import ArtleSection from "../../components/ArtSection.svelte";

  onMount(() => {
    setCurrentPage(window.location.href);
  });

  export let aboutData;
  export let exhibitionData;
  export let originalArtData;
  export let artPrintsData;
</script>

<svelte:head>
  <title>Ida Vikfors | Artist</title>
  <meta property="og:title" content="Ida Vikfors | Artist" />
  <meta
    name="description"
    content="The Finish artist Ida Vikfors creates minimalistic art. See her work on display at these venues, or buy a painting of your own from her resellers."
  />
  <meta
    property="og:description"
    content="The Finish artist Ida Vikfors creates minimalistic art. See her work on display at these venues, or buy a painting of your own from her resellers."
  />
</svelte:head>

{#each aboutData as about}
  <AboutSection content={about} />
{/each}

<exibit class="layout m-b-onePointFive">
  <p class="subtitel [ p-b-one font-inter ]">Exhibitions</p>
  {#each exhibitionData as exhibition}
    <ExhibitionSection content={exhibition} />
  {/each}
</exibit>
<!-- <hr id="line" class="m-b-three" /> -->
<arts class="layout">
  <p class="subtitel [ p-b-one font-inter ]">Avaliable work</p>
  <p>Original art :</p>
  <originalArt class="layout p-b-one">
    {#each originalArtData as originalArt}
      <ArtleSection content={originalArt} />
    {/each}
  </originalArt>
  <p>Art prints :</p>
  <artPrints class="layout m-b-five">
    {#each artPrintsData as artPrints}
      <ArtleSection content={artPrints} />
    {/each}
  </artPrints>
</arts>

<!-- <hr id="line" class="m-b-three" /> -->
<style>
  .layout {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .subtitel {
    font-size: 0.6rem;
    text-transform: uppercase;
  }
  /* #line {
    width: 10rem;
    border-left: none;
    margin-left: 0;
  } */

  /* @media only screen and (min-width: 768px) {
    #line {
      width: 22rem;
    }
  } */
</style>

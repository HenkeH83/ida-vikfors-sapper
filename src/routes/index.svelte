<script>
  import { setCurrentPage } from "../store";
  import { onMount } from "svelte";

  onMount(() => {
    setCurrentPage(window.location.href);
  });
</script>

<svelte:head>
  <title>Ida Vikfors | Minimalist Artist</title>
  <meta property="og:title" content="Ida Vikfors | Minimalist Artist" />
  <meta
    name="description"
    content="Ida Vikfors has an expression in her art that is truly unique. Welcome to her website! Here you can see her art, find exhibitions, or order a painting of your own."
  />
  <meta
    property="og:description"
    content="Ida Vikfors has an expression in her art that is truly unique. Welcome to her website! Here you can see her art, find exhibitions, or order a painting of your own."
  />
</svelte:head>

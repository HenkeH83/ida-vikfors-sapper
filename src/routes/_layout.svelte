<script>
  import { windowWidth, atHome } from "../store.js";
  import Navigation from "./_navigation.svelte";
  import Footer from "./_footer.svelte";
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<div class:picture-background={$atHome} class="main-container">
  <Navigation />
  <div class="main-content">
    <slot />
  </div>
  <Footer />
</div>

<style>
  .picture-background {
    background-image: url("/images/hero/768x1216.jpg");
    background-position: center center;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media only screen and (-webkit-device-pixel-ratio: 2) {
    .picture-background {
      background-image: url("/images/hero/1440x2280.jpg");
    }
  }
  @media only screen and (min-width: 768px) {
    .picture-background {
      background-image: url("/images/hero/1068x824.jpg");
    }
  }
  @media only screen and (min-width: 768px) and (-webkit-device-pixel-ratio: 2) {
    .picture-background {
      background-image: url("/images/hero/2136x1648.jpg");
    }
  }
  @media only screen and (min-width: 768px) and (-webkit-device-pixel-ratio: 2) {
    .picture-background {
      background-image: url("/images/hero/2136x1648.jpg");
    }
  }
  @media only screen and (min-width: 1024px) {
    .picture-background {
      background-image: url("/images/hero/1440x1111.jpg");
    }
  }
  @media only screen and (min-width: 1024px) and (-webkit-device-pixel-ratio: 2) {
    .picture-background {
      background-image: url("/images/hero/2889x2230.jpg");
    }
  }
</style>

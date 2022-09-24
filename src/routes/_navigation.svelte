<script>
  import { fade } from "svelte/transition";
  import { clickOutside } from "../utility";
  import { windowWidth, atHome, atWork, atAbout } from "../store";

  $: isDesktop = $windowWidth >= 799 ? true : false;
  let openBurger = false;

  const closeBurger = () => {
    if (isDesktop) return;

    openBurger = false;
  };
</script>

<nav class="header" use:clickOutside on:click_outside={closeBurger}>
  <img
    src="/logo2021_webbstor.png"
    alt="Ida vikfors logo"
    height="90"
    width="800"
  />

  <div
    class="pages [ flex-center font-inter ]"
    class:openBurger
    class:isHome={$atHome}
  >
    {#if isDesktop || openBurger}
      <a
        on:click={closeBurger}
        class:active={$atHome}
        in:fade={{ duration: 1300 }}
        href=".">HOME</a
      >
      <a
        on:click={closeBurger}
        class:active={$atWork}
        in:fade={{ duration: 1300 }}
        href="work">WORK</a
      >
      <a
        on:click={closeBurger}
        class:active={$atAbout}
        in:fade={{ duration: 1300 }}
        href="about">ABOUT</a
      >
    {/if}
  </div>

  {#if $windowWidth < 799}
    <burger on:click={() => (openBurger = !openBurger)}>
      <span class:openBurger />
      <span class:openBurger />
      <span class:openBurger />
    </burger>
  {/if}
</nav>

<style>
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

  .header {
    -ms-grid-row: 1;
    grid-row: 1;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    height: 5rem;
    margin-top: 1rem;
    background-color: transparent;
    -ms-flex-line-pack: center;
    align-content: center;
  }
  .header img {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
    width: auto;
    height: 1.2rem;
    -ms-grid-row-align: center;
    align-self: center;
    justify-self: flex-end;
  }
  .active {
    color: var(--color-dark-beige);
    position: relative;
    display: inline-block;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  .active::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: 100%;
    bottom: 0px;
    background-color: var(--color-dark-beige);
  }
  .pages {
    position: absolute;
    width: 100%;
    background-color: var(--color-warm-white);
    top: 5rem;
    left: 0;

    display: -webkit-box;

    display: -ms-flexbox;

    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-height: 0rem;
    -webkit-transition: max-height 0.2s ease-out;
    -o-transition: max-height 0.2s ease-out;
    transition: max-height 0.2s ease-out;
  }
  .pages.openBurger {
    max-height: 10rem;
    padding-bottom: 2rem;
  }
  .pages.openBurger.isHome {
    background-color: transparent;
  }
  .pages a {
    margin-top: 2rem;
    -webkit-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
    font-size: 0.5rem;
  }
  /* BURGERMENU */
  burger {
    -ms-grid-column: 3;
    grid-column: 3;
    outline: none;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;

    height: 2rem;
    margin-right: 2rem;
  }
  span {
    position: absolute;
    right: 0;
    width: 2.7rem;
    height: 0.3rem;
    background: var(--color-dark-beige);
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(2) {
    top: 0.7rem;
  }
  span:nth-child(3) {
    top: 1.4rem;
  }
  span:nth-child(1).openBurger {
    top: 0.7rem;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  span:nth-child(2).openBurger {
    display: none;
  }
  span:nth-child(3).openBurger {
    top: 0.7rem;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  @media only screen and (min-width: 480px) {
    .header {
      -ms-grid-column: 2;
      grid-column: 2;
    }
    burger {
      margin-right: 0;
    }
  }
  @media only screen and (min-width: 800px) {
    .header img {
      -ms-grid-column: 2;
      grid-column: 2;
      -ms-grid-column-align: center;
      justify-self: center;
    }
    .pages {
      position: unset;
      width: unset;
      background-color: unset;
      top: unset;

      max-height: unset;
      height: auto;
      margin: 2rem 0rem 2rem;

      -ms-grid-column: 3;

      grid-column-start: 3;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .pages a {
      margin-top: 0.5rem;
      margin-left: 0.6rem;
    }
  }
  @media only screen and (min-width: 1020px) {
    .header img {
      -ms-grid-column: 2;
      grid-column-start: 2;
    }
  }
</style>

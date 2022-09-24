<script>
  export let classes = "";
</script>

<div class="swipeable-item {classes}">
  <slot />
</div>

<style>
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

  .swipeable-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
</style>

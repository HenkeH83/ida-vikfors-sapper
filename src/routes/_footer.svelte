<script>
  import InstagramSVG from "./../components/InstagramSVG.svelte";
  import MailSVG from "./../components/MailSVG.svelte";
  const date = new Date().getFullYear().toString().toUpperCase();
</script>

<footer>
  <copyright class="footer-content">
    <!-- <copyright-container> -->
    <p id="copy">
      &copy;Ida Vikfors {date}
    </p>
  </copyright>
  <social class="footer-content">
    <InstagramSVG />
    <MailSVG />
  </social>
</footer>

<style>
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

  footer {
    -ms-grid-row: 3;
    grid-row: 3;
    background-color: transparent;
    width: 100%;
    height: 4rem;
    display: -ms-grid;
    display: grid;
    grid-template-areas:
      ". . . . . ."
      ". start . . end ."
      ". . . . . .";
  }
  .footer-content {
    line-height: unset;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  copyright {
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding-bottom: 0.1rem;
  }
  #copy {
    font-family: CGarmond-light;
    /* text-transform: uppercase; */
    /* font-size: 0.83rem; */
    /* margin-left: 0.3rem; */
  }
  social {
    -ms-grid-row: 2;
    -ms-grid-column: 5;
    grid-area: end;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  @media only screen and (min-width: 480px) {
    footer {
      -ms-grid-column: 2;
      grid-column: 2;
      grid-template-areas:
        ". . . . . ."
        "start . . . . end"
        ". . . . . .";
    }
    copyright {
      -ms-grid-row: 2;
      -ms-grid-column: 1;
    }
    social {
      -ms-grid-row: 2;
      -ms-grid-column: 6;
    }
  }
</style>

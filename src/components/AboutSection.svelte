<script>
    import { fade } from "svelte/transition";
    import { urlFor, toHtml, toPlainText } from "../sanity";
    export let content;

    let isReversed = content.sort % 2 != 0 ? true : false;
    let noParagraph = content.paragraph == undefined ? true : false;
</script>

<div class:reversed={isReversed} class="card-layout">
    <img
        in:fade
        src={urlFor(content.image)
            .width(420)
            .height(560)
            .quality(80)
            .auto("format")
            .url()}
        alt={content.alt}
        width="420"
        height="560"
    />
    <div class="content">
        <p>
            <i>
                "{toPlainText(content.italic)}"
            </i>
        </p>
        <p class:noParagraph>
            {toPlainText(content.paragraph)}
        </p>
    </div>
</div>

<style>
    .noParagraph {
        display: none;
    }
</style>

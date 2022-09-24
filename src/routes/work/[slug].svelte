<script context="module">
    import { client } from "../../sanity";

    export async function preload(page, session) {
        // the `slug` parameter is available because this file
        // is called [slug].svelte
        const { slug } = page.params;
        const filter = "*[_type == 'painting' && slug.current == $slug][0]";
        const projection = `{
        title,
        slug,
        mainImage{
        asset->{
            url
          }
        },
        images,
        body,
    }`;
        const query = filter + projection;

        // `this.fetch` is a wrapper around `fetch` that allows
        // you to make credentialled requests on both
        // server and client
        const content = await client
            .fetch(query, { slug })
            .catch((e) => this.error(500, e));
        return { content };
    }
</script>

<script>
    import { onDestroy } from "svelte";
    import { fade } from "svelte/transition";
    import { windowWidth } from "../../store";
    import Gallery from "../../components/Gallery.svelte";
    import Swipe from "../../components/Swipe.svelte";
    import { urlFor, toHtml } from "../../sanity";

    export let content;

    let swipeSet = null;
    let galleryIndex = null;
    let showSwipe = false;

    function showGallery(event) {
        if ($windowWidth < 768) return;
        swipeSet = event.detail.images;
        galleryIndex = event.detail.index;
        showSwipe = true;
    }
    function closeModal(event) {
        showSwipe = false;
    }
    onDestroy(() => {
        galleryIndex = null;
        swipeSet = null;
        showSwipe = false;
    });
</script>

<svelte:head>
    <title>Ida Vikfors | {content.title}</title>
    <meta property="og:title" content="Ida Vikfors | {content.title}" />
    <meta
        name="description"
        content="Original art, titled {content.title}, by Ida Vikfors. Use mail icon at the bottom of this page to order your own"
    />
    <meta
        property="og:description"
        content="Original art, titled {content.title}, by Ida Vikfors. Use mail icon at the bottom of this page to order your own"
    />
</svelte:head>

{#if showSwipe}
    <div transition:fade class="modal">
        <Swipe on:exit={closeModal} images={swipeSet} index={galleryIndex} />
    </div>
{/if}
<div class="card-detail">
    <div class="card-layout reversed">
        {#if $windowWidth >= 768}
            <img
                src={urlFor(content.mainImage)
                    .width(420)
                    .height(560)
                    .quality(80)
                    .auto("format")
                    .url()}
                alt={content.alt}
                width="420"
                height="560"
            />
        {/if}
        <div class="content">
            <h1>{content.title}</h1>
            {@html toHtml(content.body)}
        </div>
    </div>
    <Gallery
        on:gallery={showGallery}
        galleryImages={content.images}
        swipeImages={content.images}
    />
    <div class="btn-wrapper [ font-inter ] ">
        <a href="/work"> <i> back to work </i> </a>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        z-index: 2;
        top: 0rem;
        left: 0rem;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .btn-wrapper {
        height: 4rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .btn-wrapper > a {
        height: fit-content;
        transition: all 1s;
        font-size: 0.6rem;
        letter-spacing: 0.7px;
    }
</style>

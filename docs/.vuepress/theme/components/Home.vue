<template lang="pug">
main.home
  .home-wrap
    .home-hero
      .home-hero--wrapper
        svg(
          alt="MTGJSON Logo",
          xmlns="http://www.w3.org/2000/svg",
          version="1.0",
          viewBox="0 0 5000 3500",
          preserveAspectRatio="xMidYMid meet",
          style="zoom: 1;"
        )
          g
            path(
              d="M1950,3374 c-177,-47 -300,-179 -361,-384 c-20,-69 -22,-105 -29,-465 c-9,-431 -13,-464 -73,-532 c-40,-45 -94,-70 -174,-79 l-63,-7 l0,-212 l0,-212 l64,-5 c83,-7 150,-39 182,-88 c52,-78 56,-107 64,-530 c8,-435 10,-450 76,-588 c23,-47 55,-93 92,-130 c100,-101 208,-142 369,-142 l93,0 l0,189 l0,188 l-51,6 c-87,11 -147,66 -181,169 c-6,19 -14,183 -18,393 c-9,385 -16,445 -64,552 c-14,30 -39,72 -56,93 c-34,43 -110,95 -155,106 l-29,7 l37,13 c84,29 164,109 206,206 c47,109 54,176 61,548 c4,197 11,369 17,386 c32,95 73,131 168,147 l65,11 l0,188 l0,188 l-92,-1 c-51,0 -118,-7 -148,-15 z z m-1844.999634,-205.244141 z z"
            )
            path(
              d="M2720,3202 l0,-188 l65,-11 c95,-16 136,-52 168,-147 c6,-17 13,-189 17,-386 c7,-372 14,-439 61,-548 c42,-97 122,-177 206,-206 l37,-13 l-29,-7 c-45,-11 -121,-63 -155,-106 c-17,-21 -42,-63 -56,-93 c-48,-107 -55,-167 -64,-552 c-4,-210 -12,-374 -18,-393 c-34,-103 -94,-158 -181,-169 l-51,-6 l0,-188 l0,-189 l93,0 c161,0 269,41 369,142 c37,37 69,83 92,130 c66,138 68,153 76,588 c8,423 12,452 64,530 c32,49 99,81 182,88 l64,5 l0,212 l0,212 l-62,7 c-81,9 -135,34 -175,79 c-60,68 -64,101 -73,532 c-7,360 -9,396 -29,465 c-34,115 -85,202 -156,269 c-100,93 -203,131 -357,131 l-88,0 l0,-188 z"
            )
            path(
              d="M690,1690 l0,-1340 l285,0 l285,0 l0,165 l0,165 l-140,0 l-140,0 l0,1015 l0,1015 l140,0 l140,0 l0,160 l0,160 l-285,0 l-285,0 l0,-1340 z"
            )
            path(
              d="M3650,2870 l0,-160 l140,0 l140,0 l0,-1015 l0,-1015 l-140,0 l-140,0 l0,-165 l0,-165 l285,0 l285,0 l0,1340 l0,1340 l-285,0 l-285,0 l0,-160 z"
            )
            path(
              d="M321,2496 l-105,-71 l-107,-342 l-108,-342 l108,-395 c59,-218 110,-398 112,-400 c2,-2 49,-33 104,-70 l100,-66 l3,440 c1,242 1,637 0,879 l-3,439 l-104,-72 z"
            )
            path(
              d="M4480,1689 l0,-881 l29,19 c187,120 181,115 196,168 c8,28 57,207 109,398 l95,348 l-108,342 l-107,342 l-107,73 l-107,73 l0,-882 z"
            )

        h1 MTGJSON
        h2 Cataloging all Magic: The Gathering cards in portable formats.
        p {{ $site.description }}
        router-link.cta-btn(:to="'/faq/'") Get Started

    Content.custom

    .home-col
      h2#contributing A Contributing Community
      .home-col-row
        .home-col-row--wrap
          p.full-flex Many others have devoted their time and effort into this project. If you have suggestions for improvements, bug reports, or would just like to help address existing issues, we are always looking for help. You can contribute to the project through the main <a class="link-inline-image github" href="https://github.com/mtgjson/mtgjson" target="_blank" rel="noopener noreferrer">MTGJSON Repository</a> or the <a class="link-inline-image github" href="https://github.com/mtgjson/mtgjson-website" target="_blank" rel="noopener noreferrer">MTGJSON Documentation Repository</a>.
          p.full-flex If you would like to help in other ways please consider donating to the project via <a href="https://www.paypal.me/Zachhalpern" class="link-inline-image paypal" target="_blank" rel="noreferrer noopener">PayPal<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (one-time donation) or via <a href="https://www.patreon.com/MTGJSON" class="link-inline-image patreon" target="_blank" rel="noreferrer noopener">Patreon<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a> (recurring donations).
          p.full-flex Looking for support? Chat with us on <a href="https://mtgjson.com/discord" target="_blank" rel="noopener noreferrer">Discord</a> and follus us on <a href="https://twitter.com/mtgjson" target="_blank" rel="noopener noreferrer">Twitter</a>.
    //- Code Contributors
    .home-col(v-if="contributors.length > 0")
      h3#contributors Code Contributors
      .home-col-row
        .home-col-row--wrap
          .full-flex.avatars.image-fit
            a(
              v-for="(user, key) in contributors",
              :key="key",
              :href="user.html_url",
              target="_blank",
              rel="noopener noreferrer"
            )
              img.lazy(
                :src="user.avatar_url",
                :data-src="user.avatar_url",
                :alt="user.login",
                :title="user.login"
              )
    //- Patrons
    .home-col(v-if="patrons.length > 0")
      h3#patrons Patreon Supporters
      .home-col-row
        .home-col-row--wrap
          p.full-flex.spaced Without our Patreon supporters we would not be able to keep this site running. They keep the lights on here and we would like to highlight their efforts in supporting this project. MTGJSON does not endorse these supporters and their projects.
          p.full-flex.spaced Don't see your name or project? Join the <a href="https://mtgjson/discord" target="_blank" rel="noopener noreferrer" >Discord</a> and let us know or open an issue on <a href="https://github.com/mtgjson/mtgjson-website/issues" target="_blank" rel="noopener noreferrer" >GitHub</a>. We'll be happy to add your work to our list.
          p.full-flex.avatars
            a(
              v-for="(user, key) in patrons",
              :key="key",
              :href="user.link",
              target="_blank",
              rel="noopener noreferrer"
            )
              img.logo.lazy(
                src="",
                :data-src="user.image",
                :alt="user.name",
                :title="user.name"
              )
    //- Projects
    .home-col(v-if="services.length > 0")
      h3#projects Powered by MTGJSON
      .home-col-row
        .home-col-row--wrap
          p.full-flex.spaced We would like to acknowledge the different projects MTGJSON has helped serve data to their audiences. We're very proud of what our friends have accomplished. MTGJSON does not endorse these supporters and their projects.
          p.full-flex.spaced Don't see your name or project? Join the <a href="https://mtgjson/discord" target="_blank" rel="noopener noreferrer" >Discord</a> and let us know or open an issue on <a href="https://github.com/mtgjson/mtgjson-website/issues" target="_blank" rel="noopener noreferrer" >GitHub</a>. We'll be happy to add your work to our list.
          p.full-flex.avatars
            a(
              v-for="(user, key) in services",
              :key="key",
              :href="user.link",
              target="_blank",
              rel="noopener noreferrer"
            )
              img.logo.lazy(
                src="",
                :data-src="user.image",
                :alt="user.name",
                :title="user.name"
              )
</template>

<script>
import supporters from "../../src/resources/supporters.json";
import contributors from "../../src/resources/contributors.json";

export default {
  name: "Home",
  data() {
    return {
      supporters,
      contributors,
    };
  },
  computed: {
    patrons() {
      return this.supporters.patrons;
    },
    services() {
      return this.supporters.services;
    },
  },
  async created() {

  },
  mounted() {
    const lazyImages = Array.from(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach((lazyImage) => {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Boo, no observer
      lazyImages.forEach((lazyImage) => {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        lazyImage.classList.add("not-lazy");
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.content__default {
  padding: 0 !important;
}

.home {
  padding-left: var(--sidebar-width);
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: block;
  background-color: var(--bg-dark-color);

  &-wrap {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  & > * {
    max-width: var(--content-width);
  }

  h1 {
    padding-top: 0;
    padding-bottom: 0;
    color: var(--text-color);
  }

  h2 {
    margin: 0 auto;
    color: var(--accent-color);
    padding: 4rem 0 2rem;
  }

  h3 {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  h4 {
    color: var(--accent-color);
  }

  a {
    color: var(--accent-color);
    font-weight: bold;
  }

  &-hero {
    padding-bottom: 4rem;

    p {
      color: var(--text-color);
    }

    .cta-btn {
      margin: 0 auto;
    }

    &--wrapper {
      text-align: center;

      svg {
        fill: var(--accent-color);
        max-height: 100px;
        margin-bottom: 1rem;
      }
    }
  }

  &-col {
    flex: 1;
    background-color: var(--bg-dark-color);

    h3,
    p {
      color: var(--text-color);
    }

    &-row {
      &--wrap {
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        &-col {
          flex: 1;
        }

        .full-flex {
          flex: 0 0 100%;
        }

        .flex-none {
          flex: none;
        }

        .spaced {
          margin-bottom: 2rem;
        }

        img {
          max-width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-right: 2rem;
        }

        .avatars {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          grid-gap: 1rem;

          &.image-fit {
            img {
              padding: 0;
            }
          }

          a {
            display: inline-block;
            height: 4rem;
            width: 4rem;
            border-radius: 50%;
            // margin: 0 0.5rem 1rem;
            background-color: var(--light-color);
            overflow: hidden;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 10px;
            color: var(--dark-color);
            line-height: 0.75rem;
            word-break: break-word;

            img {
              width: 100%;
              height: auto;
              max-height: 100%;
              padding: 0.75rem;
              margin: 0 auto;

              &.logo {
                border-radius: 0;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 719px) {
  .home {
    padding: 0 !important;

    .home-col {
      padding-left: 0 !important;

      &-row {
        margin: 0 2rem 2rem;

        &--wrap {
          padding: 0;
        }
      }
    }

    &-hero--wrapper {
      padding-left: 2rem;
      padding-right: 2rem;

      svg {
        margin-top: 3rem;
      }
    }
  }
}
</style>

<script setup lang="ts">
const panelRef = ref([0])
</script>

<template>
  <div class="faq-wrapper global-container">
    <div class="faq-header">
      <h1 class="faq-title">
        Frequently Asked

        <br>

        <p class="faq-special-text">
          <span class="sub-text">
            Questions
          </span>

          Questions
        </p>
      </h1>

      <p class="faq-desc">
        I hope you find what you’re looking for out there. If your answer is not in the below FAQs responses, please feel free to ask your question through our contact us form
      </p>

      <CommonButtonSubmit label="Ask us a question" />
    </div>

    <div class="faq-body">
      <v-expansion-panels
        v-model="panelRef"
        multiple
        selected-class="panel-selected"
        class="panel-list"
      >
        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              What is an NFT?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              What is a wallet? Why do I need one?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              How much does it cost to create an NFT?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              Is connecting my wallet to OUR COMPANY secure?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              I am new to NFTs. Where can I learn about them?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              What are your community rules and guidelines?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              Why should I use Ethereum?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              How do I sell my NFT?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              How do I create my first NFT?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              Can I pay with a credit card?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>

        <v-expansion-panel class="panel">
          <template #title>
            <h2 class="panel-title">
              What makes nfts1 different from other NFT marketplaces?
            </h2>
          </template>

          <template #text>
            <div class="panel-text">
              <p>NFTs prove ownership of a unique digital asset like art, music, collectibles, videos or anything else with blockchain technology.</p>

              <p>NFT stands for non-fungible token. That sounds like an intimidating technical term (no more nerd talk, promise!). But NFTs are just digital certificates of authenticity.</p>

              <p>If you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies:</p>

              <p>You can see who posted something, but you can’t see who owns an Instagram post, Pinterest Pin or Reddit meme.</p>

              <RouterLink to="/" class="panel-link">
                View More >>
              </RouterLink>
            </div>
          </template>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="faq-aside">
        If you don’t find an answer, <span><RouterLink to="/" class="faq-router-link">contact</RouterLink></span> with our experts, please.
      </div>

      <div class="faq-video">
        <button class="play-button">
          <img src="/images/faq-play-button.png" class="play-button-image" >
        </button>

        <!-- <video controls>
        </video> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/pages/FAQ.scss">

</style>

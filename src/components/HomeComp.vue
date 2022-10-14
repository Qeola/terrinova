<template>
    <div class="home" id="home-comp">
      <div class="banner">
          <NavBar />
          <div class="container banner__container">
              <div class="row banner__row">
                  <div class="col-md-12 banner__col">
                      <h1 class="banner__col--header">
                          <span class="banner__col--title">Profitability & Philanthropy Do Not </span>
                          <span class="banner__col--title">Have To Be Parallel Lines.</span>
                      </h1>
                      <p class="banner__col--desc">
                          <span class="banner__col--sub-desc">Terrinova has figured out a way to create enterprise from solving one of </span>
                          <span class="banner__col--sub-desc">Africa’s most pressing food problems. </span>
                      </p>
                      <div class="banner__cta">
                          <button  type="button"  class="banner__cta--btn banner__cta--button">Partner with Us</button>
                      </div>
                    </div>
              </div>
            </div>
        </div>
        <OurStory/>
        <OurSolution />
        <TheOpportunity />
        <OurProducts />
        <SucceedComp />
        <OurTeam />
        <OurPartner />
        <FAQ />
        <FooterComp />
    </div>
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue'
import OurStory from './OurStory.vue'
import OurSolution from './OurSolution.vue'
import TheOpportunity from './TheOpportunity.vue'
import OurProducts from './OurProducts.vue'
import SucceedComp from './SucceedComp.vue'
import OurTeam from './OurTeam.vue'
import OurPartner from './OurPartner.vue'
import FAQ from './FAQ.vue'
import FooterComp from './FooterComp.vue'
</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";

.banner{
    background-image: 
        url('@/assets/images/img_1/green_bg.png'),
        url('@/assets/images/img_1/hero.jpg');
    background-position: center;
    background-size: cover;
    height: 100vh;

    &__container {
            text-align: center;
            display: block;
        }
    
    &__row {
      display: flex;
      align-items: center;
      height: 90vh;

    }

    &__col { 
      
      &--header{
          display: block;

        }

        &--title {
            font-size: $font-xxlg;
            font-weight: map-get($font-weights, bold);
            color: $color-light;
            display: block;
        }

        &--desc{
            padding-top: 2rem;
            padding-bottom: 3rem;
        }

        &--sub-desc{
            font-size: $font-xrg;
            font-weight: map-get($font-weights, bold);
            color: $color-light;
            display: block;
        }
    }

    &__cta {
      padding-top: 2rem;
      @include cta;
    }
}



/* Extra small devices (phones, 600px and down) */

@media only screen and (max-width: 600px) {
    .banner{
      
      &__row {
        display: flex;
        align-items: center;
        height: 80vh;
        // margin-top: 2rem;
    }

      &__col { 
      
      &--header{
          display: inline-block;

        }

        &--title {
            font-size: $font-md;
        }

        &--desc{
            padding-top: 2rem;
            padding-bottom: 3rem;
        }

        &--sub-desc{
            font-size: $font-xsm;
            font-weight: map-get($font-weights, bold);
        }
    }

      &__cta {
        padding-top: 0rem;
        @include cta;
      }
    }
}


// /* Medium devices (landscape tablets, 768px and up) */
//     @media only screen and (min-width: 768px) {
//       .banner{

//         &__row {
//             display: flex;
//             align-items: center;
//             height: 70vh;
//         }

//         &__col { 

//         &--header{
//             display: inline-block;

//           }

//           &--title {
//               font-size: $font-xrg;
//           }

//           &--desc{
//               padding-top: 2rem;
//               padding-bottom: 3rem;
//           }

//           &--sub-desc{
//               font-size: $font-sm;
//               font-weight: map-get($font-weights, bold);
//           }
//         }

//         &__cta {
//           padding-top: 0rem;
//           @include cta;
//         }
//     }
// }
</style>

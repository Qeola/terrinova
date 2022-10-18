<template>
    <div class="partners">
        <div class="container">
            <h1 class="partners__container--header">Our Principal Partners</h1>
            <div class="row justify-content-center text-center">
                <div class="col-md-4 col-sm-6 partners__col">
                    <img src='~@/assets/images/img_1/afrilabs.png' class="img-fluid rounded-start partners__col--img">
                </div>
                <div class="col-md-4 col-sm-6 partners__col">
                    <img src='~@/assets/images/img_1/ennovate.png' class="img-fluid rounded-start partners__col--img">
                </div>
                <div class="partners__cta text-center">
                    <a href="../assets/images/sample-file (1).pdf"  download="../assets/images/sample-file" target="_blank">
                        <button  type="submit"  class="partners__cta--btn partners__cta--button">Join our Mission</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";
.partners {
    padding: 1rem 0;

    &__container {

        &--header {
            font-family: 'Inter';
            font-style: normal;
            font-size: $font-md;
            color: $color-deep-green;
            font-weight: map-get($font-weights, classic);
            padding: 4rem 0;
            text-align: center;
        }
    }

    &__col {
        padding-top: rem;
        padding-bottom: 2rem;

        &--img {
            width: 60%;
        }
    }

    &__cta {
        padding-top: 2rem;
        padding-bottom: 4rem;
        @include cta;
    }
}

@media only screen and (max-width: 600px) {
    .partners {
        padding: .5rem 0rem;

        &__container {
            display: flex;
            align-items: left;

                &--header {
                    font-size: $font-xrg;
                    padding: 2rem 0;
                }
            }

        &__row {
            align-items: none;
        }
        
        &__col {
            padding: .5rem 1rem;
            // padding-bottom: .5rem;
            display: flex;
            flex-direction: column;
            width: 50%;

            &--img {
               
                padding: 0 .5rem;
                // justify-content: center;

                width: 100%;
            }
        }

    }
}
</style>
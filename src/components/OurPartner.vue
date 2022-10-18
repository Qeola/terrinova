<template>
    <div class="partners">
        <div class="container">
            <h1 class="partners__container--header">Our Principal Partners</h1>
            <div class="row justify-content-center">
                <div class="col-md-4 partners__col ps-3 text-center">
                    <img src='~@/assets/images/img_1/afrilabs.png' class="img-fluid rounded-start partners__col--img">
                </div>
                <div class="col-md-4 partners__col ps-4 text-center">
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
        padding-top: 1.5rem;
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

                &--header {
                    font-size: $font-xrg;
                    padding: 2rem 0;
                }
            }

        &__col {
            padding-bottom: .5rem;
        }

        &--img {
            width: 30%;
        }
    }
}
</style>
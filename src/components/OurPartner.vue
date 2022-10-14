<template>
    <div class="partners">
        <div class="container">
            <h1 class="partners__container--header">Our Principal Partners</h1>
            <div class="row justify-content-center">
                <div class="col-md-4 partners__col ps-3">
                    <img src='~@/assets/images/img_1/afrilabs.png' class="img-fluid rounded-start partners__col--img">
                </div>
                <div class="col-md-4 partners__col ps-4">
                    <img src='~@/assets/images/img_1/ennovate.png' class="img-fluid rounded-start partners__col--img">
                </div>
                <div class="partners__cta text-center">
                    <button  type="button"  class="partners__cta--btn partners__cta--button">Join our Mission</button>
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
    padding: 3rem 0;

    &__container {

        &--header {
            padding: 2rem 0;
            text-align: center;
        }
    }

    &__col {
        padding: 2rem 0;

        &--img {
            width: 80%;
        }
    }

    &__cta {
        padding-top: 2rem;
        @include cta;
    }
}

@media only screen and (max-width: 600px) {
    .partners {
        padding: 2rem 2rem;

        &__col {
            padding-top: 2rem;
        }
    }
}
</style>
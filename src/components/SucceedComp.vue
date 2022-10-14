<template>
    <div class="succeed">
        <div class="container">
            <div class="row succeed__row justify-content-between">
                <div class="col-md-5">
                    <img src="~@/assets/images/img_1/men.png" class="img-fluid" alt="...">
                </div>
                <div class="col-md-6 succeed__col align-self-center">
                    <h1 class="succeed__col--header">
                        <span class="succeed__col--sub-header">What good would it make in </span>
                        <span class="succeed__col--sub-header">the world if we succeed?</span>
                    </h1>
                    <h2 class="succeed__col--text">
                        <span class="succeed__col--sub-text">Our success would directly impact the following Sustainable</span>
                        <span class="succeed__col--sub-text"> Development Goals (SDGs):</span>
                    </h2>
                    <p class="succeed__col--title">
                        <span class="succeed__col--sub-title">
                            <ul>
                                <li> Zero Hunger.</li>
                            </ul>
                        </span>
                        <span class="succeed__col--sub-title">
                            <ul>
                                <li>Good Health and Well-being.</li>
                            </ul>
                        </span>
                        <span class="succeed__col--sub-title">
                            <ul>
                                <li>Decent Work and Economic Growth.</li>
                            </ul>
                        </span>
                        <span class="succeed__col--sub-title">
                            <ul>
                                <li>Industry, Innovation and Infrastructure.</li>
                            </ul>
                        </span>
                    </p>
                    <div class="succeed__cta">
                        <button  type="button"  class="succeed__cta--btn succeed__cta--button">Partner with Us</button>
                    </div>
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
.succeed {
    background-color: $color-rgb;
    padding: 3rem 0;

    &__row {
        padding-top: 3rem;
    }

    &__col {
        
        &--header{
            padding-top: .5rem;
        }

        &--sub-header{
            color: $color-deep-green;
            font-size: $font-xrg;
            font-weight: map-get($font-weights, classic);
            display: block;
        }

        &--text{
            padding-top: 1rem;
        }

        &--sub-text{
            color: $color-deep-green;
            font-size: $font-sm;
            font-weight: map-get($font-weights, regular);
            display: block;
        }

        &--title {
            padding-top: 1.5rem;
        }

        &--sub-title, ul {
            color: $color-deep-green;
            font-size: $font-sm;
            font-weight: map-get($font-weights, bold);
            display: block;
            list-style-type: circle $color-deep-green;
        }
    }

    &__cta {
        padding-top: 1.5rem;
        @include cta;
    }
}


/* Extra small devices (phones, 600px and down) */

@media only screen and (max-width: 600px) {
    .succeed {
        padding: 2rem 2rem;

        &__col {
            padding-top: 2rem;
        }
    }
}
</style>




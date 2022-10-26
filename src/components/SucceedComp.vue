<template>
    <div class="succeed">
        <div class="container">
            <div class="row succeed__row justify-content-between">
                <div class="col-md-5 succeed__col">
                    <img src="~@/assets/images/img_1/sdg.png" class="img-fluid" alt="...">
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
                        <a href="https://drive.google.com/file/d/1RmQeZb6VETZQPcU6bjapUEz5vmJMhTft/view"  download target="_blank">
                            <button  type="submit"  class="succeed__cta--btn succeed__cta--button">Partner with Us</button>
                        </a>
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
    padding: 4rem 0;

    &__row {
        padding-top: 4rem 0;
        padding-bottom: 4rem 0;
    }

    &__col {
        padding-top: 4rem 0;
        padding-bottom: 4rem 0;

        &--header{
            padding-top: .5rem;
        }

        &--sub-header{
            font-family: 'Inter';
            font-style: normal;
            color: $color-deep-green;
            font-size: $font-md;
            font-weight: map-get($font-weights, classic);
            display: block;
        }

        &--text{
            padding-top: 1rem;
        }

        &--sub-text{
            font-size: $font-sm;
            color: $color-deep-green;
            font-weight: map-get($font-weights, heavy);
            display: block;
            font-family: 'Inter';
            font-style: normal;
        }

        &--title {
            padding-top: 1.5rem;
        }

        &--sub-title, ul {
            font-family: 'Inter';
            font-style: normal;
            color: $color-primary;
            font-size: $font-sm;
            font-weight: map-get($font-weights, bold);
            display: block;
            list-style-type: circle $color-primary;
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
        padding: 4rem 1rem;

        &__col {
            padding-top: 2rem;

            &--sub-header{
                font-size: $font-xrg;
            }

            &--sub-text{
                font-size: $font-xsm;
            }

            
            &--title {
                padding-top: .5rem;
            }

            &--sub-title, ul {
                font-size: $font-xsm;
            }
        }
    }
}
</style>




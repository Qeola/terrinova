<template>
    <div class="opportunity" id="the-opportunity">
        <div class="container">
            <div class="row opportunity__row justify-content-between">
                <div class="col-md-5 opportunity__col align-self-center">
                    <h1 class="opportunity__col--header">
                        <span class="opportunity__col--sub-header">The Opportunities We See</span>
                       
                    </h1>
                    <p class="opportunity__col--title">
                        <span class="opportunity__col--sub-title">
                            <ul>
                                <li>The demand for packaged maize flour in Niger Republic is on an all time high, especially as its major supplier (Libya) is still unable to resume supply due to its political instability.</li>
                            </ul>
                        </span>
                        <span class="opportunity__col--sub-title">
                            <ul>
                                <li>With the skyrocketing prices of wheat flour in Benin Republic, about 70% of flour used for baking purposes is cassava based</li>
                            </ul>
                        </span>
                        <span class="opportunity__col--sub-title">
                            <ul>
                                <li>Urban dwellers within Niger and Benin Republic are heavily inclined to buy neatly packaged maize and cassava flours as opposed to the locally processed ones with low quality and hygiene standards.</li>
                            </ul>
                        </span>
                    </p>
                </div>
                <div class="col-md-6">
                    <img src="~@/assets/images/img_1/maize.png" class="img-fluid" alt="...">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";

.opportunity {
    background-color: $color-rgb;
    padding: 4rem 0;

    &__row {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    &__col {
        font-family: 'Inter';
        font-style: normal;
        
        &--header{
            padding-top: .5rem;
        }

        &--sub-header{
            color: $color-deep-green;
            // font-size: $font-xrg;
            font-weight: map-get($font-weights, medium);
            
        }

        &--title {
            color: $color-deep-green;
            font-size: $font-sm;
            font-weight: map-get($font-weights, classic);
            display: block;
        }

        &--sub-title, ul {
            color: $color-deep-green;
            font-size: $font-sm;
            font-weight: map-get($font-weights, heavy);
            // font-weight: 300;
            display: block;
            list-style-type: circle $color-primary;
        }
    }
}


/* Extra small devices (phones, 600px and down) */

@media only screen and (max-width: 600px) {
    .opportunity {
        padding: 4rem 1rem;

        &__col {
            padding-top: 2rem;
        }
    }
}
</style>




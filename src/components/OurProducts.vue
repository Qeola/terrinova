<template>
    <div class="product" id="products">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-3 product__col px-2 align-self-center">
                    <h1 class="product__col--header">OUR PRODUCTS</h1>
                    <h2 class="product__col--sub-header">
                        <span class="product__col--desc">Our current product </span>
                        <span class="product__col--desc">line include</span>
                    </h2>
                    <p class="product__col--sub-desc">
                        <span class="product__col--text">Biofortified cassava and maize flours </span>
                        <span class="product__col--text">and grains.</span>
                    </p>
                </div>
                <div class="col-md-8 product__new-col">
                    <div class="row gx-5 justify-content-between">
                        <div class="col-md-4 product__col">
                            <div class="card product__card h-100 mb-3" style="max-width: 18rem;">
                                <div class="card-body product__card-body">
                                    <div class="product__card-img">
                                        <img src="~@/assets/images/img_1/starch.png" class="" alt="..." width="50%">
                                    </div>
                                    <h5 class="card-title product__card--title">Maize flour</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 product__col">
                            <div class="card product__card h-100 mb-3" style="max-width: 18rem;">
                                <div class="card-body product__card-body">
                                    <div class="product__card-img">
                                        <img src="~@/assets/images/img_1/flour.png" class="" alt="..." width="50%">
                                    </div>
                                    <h5 class="card-title product__card--title">Cassava flour</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 product__col">
                            <div class="card product__card h-100 mb-3" style="max-width: 18rem;">
                                <div class="card-body product__card-body">
                                    <div class="product__card-img">
                                        <img src="~@/assets/images/img_1/barley.png" class="" alt="..." width="50%">
                                    </div>
                                    <h5 class="card-title product__card--title">Bio-fortified grains </h5>
                                </div>
                            </div>
                        </div>
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

.product {
    padding: 4rem 0;

    &__col {
        padding: 4rem 0;
        font-family: 'Inter';
        font-style: normal;

        &--header{
            color: $color-primary;
            font-size: $font-sm;
            font-weight: map-get($font-weights, medium);
            display: block;
        }

        // &--sub-header{
        //    padding-top: 1rem;
        // }

        &--desc{
            font-family: 'Inter';
            font-style: normal;
            padding-top: .5rem;
            display: block;
            font-size: $font-md;
            font-weight: map-get($font-weights, classic);
        }

        &--text{
            color: $color-deep-green;
            font-size: $font-sm;
            font-weight: map-get($font-weights, heavy);
        }
    }


    &__card {
        box-shadow: 0px 4px 20px rgba(12, 53, 15, 0.2);
        border-radius: $radius-md;
        text-align: center;

        
        &--title {
            color: $color-deep-green;
            font-size: $font-sm;
            font-weight: map-get($font-weights, medium);
            padding-top: 2rem;
        }
    }

    &__card-img {
        padding-top: 2rem;
    }
}


/* Extra small devices (phones, 600px and down) */

@media only screen and (max-width: 600px) {
    .product {
        padding: 4rem 1rem;

        &__col {
            padding: .5rem 1.5rem;
            
            &--header{
                font-size: $font-xsm;
            }

            &--desc{
                font-size: $font-xrg;
            }

        &--text{
                font-size: $font-xsm;
            }
        }

        &__new-col {
            padding: 0rem 3rem;
            text-align: center;
        }


    }
}
</style>
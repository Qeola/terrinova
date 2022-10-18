<template>
    <div class="story" id="our-story">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-5 story__col">
                    <h1 class=" story__col--header">OUR STORY</h1>
                    <p class=" story__col--title">
                        <span class="story__col--sub-title">As founders who have spent a large part of our life in Academia, </span>
                        <span class="story__col--sub-title">we got frustrated from seeing viable solutions with great market </span>
                        <span class="story__col--sub-title">potential die within the lab without ever reaching the end users </span>
                        <span class="story__col--sub-title">who desperately needed them. Terrinova is a response to </span>
                        <span class="story__col--sub-title">this frustration.</span>
                    </p>
                    <p class="story__col--title">
                        <span class="story__col--sub-title">We seek to to solve problems in the production and consumption </span>
                        <span class="story__col--sub-title">end of the value chain by incentivising farmers to plant </span>
                        <span class="story__col--sub-title">bio-fortified grains with improved yield, and make quality ready </span>
                        <span class="story__col--sub-title">to use flours and grains available to industries and consumers.</span>
                    </p>
                </div>
                <div class="col-md-6 story__col">
                    <div class="row justify-content-evenly story__sub-row">
                        <div class="col-md-6 story__sub-col">
                            <img src='~@/assets/images/img_1/abdoul.jpg' width="100%" class="img-fluid story__sub-col--img-groupx">
                        </div>
                        <div class="col-md-6 story__sub-col">
                            <img src='~@/assets/images/img_1/espérance.jpg' width="100%" class="img-fluid story__sub-col--img-groupy">
                        </div>
                        <div class="col-md-12 story__sub-col text-center">
                            <h1 class="story__sub-col--text">Abdoul & Espérance</h1>
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
@import "@/sass/mixin.scss";


#our-story {
    padding-top: 3rem;
}
.story {
    padding-top: 4rem;
    padding-bottom: 4rem;


    &__col {
        padding: 4rem 0;
        font-family: 'Inter';
        font-style: normal;

        &--header{
            color: $color-primary;
            font-weight: map-get($font-weights, medium);
            padding-bottom: 0rem;
            font-size: $font-sm;
           
        }

        &--title{
            font-size: $font-sm;
            color: $color-primary;
            display: block;
        }

        &--sub-title{
            font-size: $font-sm;
            color: $color-deep-green;
            font-weight: map-get($font-weights, heavy);
        }
    }

    &__sub-row {
        padding-top: 2rem;
    }

    &__sub-col {
        padding: 0 3rem;

        &--img-groupx{
            -ms-transform: rotate(1.5deg); /* IE 9 */
            transform: rotate(-20deg);
            border-radius: 10px;
        }

        &--img-groupy{
            -ms-transform: rotate(1.5deg); /* IE 9 */
            transform: rotate(20deg);
            border-radius: 10px;
        }

        &--text{
            font-size: $font-sm;
            color: $color-deep-green;
            font-weight: map-get($font-weights, medium);
        }
    }

    
}

/* Extra small devices (phones, 600px and down) */

@media only screen and (max-width: 600px) {
    .story{ 
        padding-bottom: 0rem;

            &__col {
                padding: 0 2rem;

                &--header{
                    font-size: $font-xsm;
                }

                &--sub-title{
                    font-size: $font-xsm;
                }
            }

            &__sub-col {
                padding: 0 3rem;

            &--img-groupx{
                display: none;
                // width: 50%;
            }

            &--img-groupy{
                display: none;
                // width: 50%;
            }

            &--text{
                display: none;
            }
        }
    }
}


// media Queries
@media only screen and (min-width: 768px) {
    .story{
        padding: 4rem 0;

        &__col {
            padding: 2rem 0rem;
        }
    }
}
</style>






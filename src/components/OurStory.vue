<template>
    <div class="story" id="our-story">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-5 story__col">
                    <h1 class=" story__col--header">OUR STORY</h1>
                    <p class=" story__col--title">
                        <span class="story__col--sub-title">As founders who have spent a large part of our life in Academia, </span>
                        <span class="story__col--sub-title">we got frustrated from seeing viable solutions with great market</span>
                        <span class="story__col--sub-title">potential die within the lab without ever reaching the end users</span>
                        <span class="story__col--sub-title">who desperately needed them. Terrinova is a response to </span>
                        <span class="story__col--sub-title">this frustration.</span>
                    </p>
                    <p class="story__col--title">
                        <span class="story__col--sub-title">We seek to to solve problems in the production and consumption</span>
                        <span class="story__col--sub-title">end of the value chain by incentivising farmers to plant</span>
                        <span class="story__col--sub-title">bio-fortified grains with improved yield, and make quality ready</span>
                        <span class="story__col--sub-title">to use flours and grains available to industries and consumers in</span>
                        <span class="story__col--sub-title">Niger and Benin Republic respectively. </span>
                    </p>
                </div>
                <div class="col-md-6 story__col">
                    <div class="row justify-content-evenly story__sub-row">
                        <div class="col-md-6 story__sub-col">
                            <img src='~@/assets/images/img_1/group_y.png' width="100%" class="img-fluid story__sub-col--img-groupx">
                        </div>
                        <div class="col-md-6 story__sub-col">
                            <img src='~@/assets/images/img_1/group_x.png' width="100%" class="img-fluid story__sub-col--img-groupy">
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

.story {
    padding-top: 4rem;
    padding-bottom: 4rem;


    &__col {
        padding: 3rem 0;

        &--header{
            color: $color-primary;
            font-weight: map-get($font-weights, medium);
            padding-bottom: 1.5rem;
        }

        &--title{
            font-size: $font-sm;
            color: $color-primary;
            display: block;
        }

        &--sub-title{
            font-size: $font-sm;
            color: $color-primary;
            font-weight: map-get($font-weights, regular);
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

            &__col {
                padding: 0 2rem;
            }

            &__sub-col {
            padding: 0 3rem;

            &--img-groupx{
                -ms-transform: scaleY(1.5); /* IE 9 */
                transform: scaleY(1);
                border-radius: 10px;
                padding-bottom: 2rem;
                // width: 50%;
            }

            &--img-groupy{
                -ms-transform: scaleY(1.5); /* IE 9 */
                transform: scaleY(1);
                border-radius: 10px;
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
        padding: 0 0;

        &__col {
            padding: 2rem 0rem;
        }
    }
}
</style>






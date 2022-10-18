<template>
    <div class="navbar justify-content-center ">
        <div class="new text-center">
            <li class="navbar__list ps-2">
                <img src='~@/assets/images/img_1/terrinova.png'  class="img-fluid rounded-start navbar__list--img" href="#home-comp" width="100%">
            </li>
            <ul class="nav text-center align-items-center" id="faqs" >
                <li class="nav-item navbar__nav-item ps-1">
                    <a class="navbar__nav-item--nav-link" aria-current="page" href="#our-story">Our Story</a>
                </li>
                <li class="nav-item navbar__nav-item ps-1">
                    <a class="navbar__nav-item--nav-link"  href="#products">Our Products</a>
                </li>
                <li class="nav-item navbar__nav-item align-self-start pt-2">
                    <img src='~@/assets/images/img_1/terrinova.png'  class="img-fluid rounded-start navbar__nav-item--img" href="#home-comp" width="100%">
                </li>
                <li class="nav-item navbar__nav-item">
                    <a class=" navbar__nav-item--nav-link ps-1"  href="#the-opportunity">Our Team</a>
                </li>
                <li class="nav-item navbar__nav-item">
                    <a class=" navbar__nav-item--nav-link ps-1" href="#faqs-comp">FAQs</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";


.navbar {
    padding-top: 3rem;

    &__list {
        display: none;
    }

    &__nav-item {
        margin: .3rem 3rem;
        padding: .5rem 2rem;
        color: $color-light;
        // width: 100%;
        // display: block;
        // align-items: baseline;

        &--img{
            padding-bottom: 0rem;
        }

        &--nav-link{
            text-decoration: none;
            color: $color-light;
            font-weight: bold;
        }
    }
}


/* Extra small devices (phones, 600px and down) */

@media only screen and (max-width: 600px) {

    .navbar {
        padding-top: 1rem;
        
        &__list {
            display: inline-block;

            &--img {
                width: 70%;
                text-align: center;
                padding-bottom: 1rem;
            }
        }

        &--nav-link{
            font-size: $font-md;
        }
        
        &__nav-item {
            padding: 0rem 1.5rem;
            // display: block;
            margin: 0rem 0rem;
            text-align: center;
        }

        &__nav-item:nth-child(3) {
            padding: 0rem 1.5rem;
            display: none;
            margin: 0rem 0rem;
            text-align: center;
        }

        &__nav-item, &--img {
            padding: 0.5rem;
        }
    }

    .nav {
            text-align: center;
        }

    #faqs{
        display: flex;
        justify-content: center;
    }

}
</style>
<template>
    <div class="navbar justify-content-center">
        <ul class="nav" id="faqs">
            <li class="nav-item navbar__nav-item">
                <a class="navbar__nav-item--nav-link" aria-current="page" href="#our-story">Our Story</a>
            </li>
            <li class="nav-item navbar__nav-item ps-2">
                <a class="navbar__nav-item--nav-link"  href="#products">Our Products</a>
            </li>
            <li class="nav-item navbar__nav-item">
                <img src='~@/assets/images/img_1/terrinova.png'  class="img-fluid rounded-start navbar__nav-item--img" href="#home-comp" width="100%">
            </li>
            <li class="nav-item navbar__nav-item">
                <a class=" navbar__nav-item--nav-link"  href="#the-opportunity">Our Team</a>
            </li>
            <li class="nav-item navbar__nav-item">
                <a class=" navbar__nav-item--nav-link ps-2"  href="#faqs">FAQs</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";


.navbar {
    padding-top: 3rem;

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

// .container {
//     display: flex;
//     align-items: left;
//     // width: 100%;
// }

    .navbar{
        padding-top: 1rem;
        // display: flex;
        // flex-wrap: wrap;
        // text-align: center;
        

        &__nav {
            // padding-right: 2rem;
            text-align: center;
            // display: flex;
        }

        &--nav-link{
            // padding: 2rem;
            font-size: $font-md;
            // text-align: center;
        }
        
        &__nav-item {
            padding: 0rem 1.5rem;
            // display: block;
            margin: 0rem 0rem;
            text-align: center;

            &--img{
                display: none;
                text-align: center;
                padding-left: 0.5rem;
                width: 50%;
            }
        }
    }
#faqs{
    text-align: left;
    padding: 2rem 2rem;
}
}
</style>
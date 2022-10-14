<template>
    <div class="navbar justify-content-center">
        <ul class="nav">
            <li class="nav-item navbar__nav-item">
                <a class="navbar__nav-item--nav-link" aria-current="page" href="#our-story">Our Story</a>
            </li>
            <li class="nav-item navbar__nav-item">
                <!-- <router-link to="" class="text-decoration-none navbar__route"> -->
                    <a class="navbar__nav-item--nav-link" href="#products">Our Products</a>
                <!-- </router-link> -->
            </li>
            <li class="nav-item navbar__nav-item">
                <img src='~@/assets/images/img_1/terrinova.png' class="img-fluid rounded-start navbar__nav-item--img" href="#home-comp" width="70%">
            </li>
            <li class="nav-item navbar__nav-item">
                <a class=" navbar__nav-item--nav-link" href="#the-opportunity">Our Team</a>
            </li>
            <li class="nav-item navbar__nav-item">
                <a class=" navbar__nav-item--nav-link" href="#faqs">FAQs</a>
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
            // display: flex;
            // padding-right: 4rem;
            padding-bottom: 0rem;
            // margin-left: 4rem;
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
    .navbar{
        padding-top: 0rem;

        &__nav {
            padding: 0rem;
            // display: flex;
            // flex-direction: column;
        }
        
        &__nav-item {
            padding: 0 0rem;

            &--img{
                width: 50%;
            }
        }
    }
}
</style>
<template>
    <div class="footer">
        <div class="container">
            <h1 class="footer__container--title">TERRINOVA is Proudly supported by </h1>
            <div class="row footer__row align-items-center">
                <div class="col-md-3 footer__col">
                    <img src='~@/assets/images/img_1/afri.png' class="img-fluid rounded-start footer__col--img-afri">
                </div>
                <div class="col-md-3 footer__col ">
                    <img src='~@/assets/images/img_1/giz.png' class="img-fluid rounded-start footer__col--img-giz">
                </div>
                <div class="col-md-3 footer__col">
                    <img src='~@/assets/images/img_1/pau.png' class="img-fluid rounded-start footer__col--img-pau">
                </div>
                <div class="col-md-3 footer__col">
                    <img src='~@/assets/images/img_1/elab.png' class="img-fluid rounded-start footer__col--img-elab">
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12 footer__col">
                    <h2 class="footer__col--text">Parcelle H lot 265 Abomey-Calavi République du Bénin  ||  hello@terrinovagroup.com  ||  +22966074747 </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";

.footer{
    background-color: $color-deep-green;
    padding: 3rem 0;


    &__container {

        &--title {
            color: $color-light;
            font-weight: map-get($font-weights, medium);
            font-size: $font-md;
            text-align: center;
            padding: 2rem;
        }
    }

    &__col {
        padding-top: 2rem;

        &--img-elab, &--img-afri, &--img-giz {
            width: 80%;
        }

        &--img-pau{
            padding-right: 2rem;
            width: 50%;
        }


        &--text{
            padding-top: 3rem;
            color: $color-light;
            font-size: $font-sm;
            text-align: center;
        }
    }

    hr {
            color: $color-light;
        }
}


@media only screen and (max-width: 600px) {
    .footer {
        padding: 2rem 2rem;

        &__col {
            padding-top: 2rem;
            text-align: center;

            &--img-elab, &--img-afri, &--img-giz {
                width: 50%;
            }

        &--img-pau{
                padding-right: 2rem;
                width: 30%;
            }
        }
    }
}
</style>
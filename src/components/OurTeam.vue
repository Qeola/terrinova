<template>
    <div class="team" id="our-team">
        <div class="container">
            <h1 class="team__container--header">Our Team</h1>
            <div class="row team__new">
                <div class="col team__col">
                    <div class="card team__card mb-3" style="max-width: 700px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src='~@/assets/images/img_1/abdo.jpg' class="img-fluid rounded-start team__col--img-groupy" style="max-width: 100%;">
                            </div>
                            <div class="col-md-8 align-self-end">
                                <div class="card-body">
                                    <h5 class="card-title"> 
                                        <span class="team__card-title--desc">Abdoul Raouf </span>
                                        <span class="team__card-title--bold-desc">Sayadi Maazou</span>
                                    </h5>
                                    <p class="card-text">
                                        <span class="team__card-title--sub-desc">Ph.D. Plant Breeding, </span>
                                        <span class="team__card-title--sub-desc">PAULESI Research fellow, IITA. </span>
                                        <span class="team__card-title--sub-desc">Maize biofortification for </span>
                                        <span class="team__card-title--sub-desc">provitamin A (Research direction).</span>
                                    </p>
                                    <p class="card-text team__card-title--text"><i>Co-founder.</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col team__col">
                    <div class="card team__card mb-3" style="max-width: 700px;">
                        <div class="row g-0">
                            <div class="col-md-4 team__sub-col">
                                <img src='~@/assets/images/img_1/esperance.jpg' class="img-fluid rounded-start team__col--img-groupx" style="max-width: 100%;">
                            </div>
                            <div class="col-md-8 align-self-end team__sub-col">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <span class="team__card-title--desc">Espérance </span>
                                        <span class="team__card-title--bold-desc">Déo Gratias</span>
                                    </h5>
                                    <p class="card-text">
                                        <span class="team__card-title--sub-desc">Ph.D. Plant Breeding, </span>
                                        <span class="team__card-title--sub-desc">PAULESI Research fellow, IITA. </span>
                                        <span class="team__card-title--sub-desc">Maize biofortification for </span>
                                        <span class="team__card-title--sub-desc">provitamin A (Research direction).</span>
                                    </p>
                                    <p class="card-text team__card-title--text"><i>Co-founder.</i></p>
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

.team {
    padding: 4rem 0;

    &__container {
        
        &--header {
            font-family: 'Inter';
            font-style: normal;
            color: $color-deep-green;
            font-weight: map-get($font-weights, classic);
            font-size: $font-md;
            text-align: center;
            padding-bottom: 3rem;
        }
    }

    &__row {
        padding-top: 4rem 0;
    }

    &__card-title {
        padding:  2rem;
        font-family: 'Inter';
        font-style: normal;

        &--desc{
            color: $color-deep-green;
            font-weight: map-get($font-weights, medium);
            font-size: $font-rg;
            display: block;
        }

        &--bold-desc{
            color: $color-primary;
            font-weight: map-get($font-weights, bold);
            font-size: $font-rg;
        }
        
        &--sub-desc{
            color: $color-deep-green;
            font-weight: map-get($font-weights, heavy);
            font-size: $font-sm;
            // display: block;
        }

        &--text{
            color: $color-primary;
            font-weight: map-get($font-weights, medium);
            font-size: $font-sm;
        }
    }

    &__card {
        box-shadow: 0px 4px 16px rgba(12, 53, 15, 0.15);
        border-radius: $radius-md;
    }
}


@media only screen and (max-width: 768px) {
    .team {
        padding: 1rem 2rem;

        &__container {

            &--header {
                font-size: $font-xrg;
                padding-bottom: 1.5rem;
            }
        }


        // &__card {
        //     max-width: 500px;
        // }


        &__card-title {
            padding:  2rem;
        

        &--desc{
            font-size: $font-sm;
            display: block;
        }

        &--bold-desc{
            font-size: $font-sm;
        }
        
        &--sub-desc{
            font-size: $font-xsm;
            // display: block;
        }

        &--text{
            font-size: $font-xsm;
        }
    }

    }

}
</style>
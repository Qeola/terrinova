<template>
    <div class="team">
        <div class="container">
            <h1 class="team__container--header">Our Team</h1>
            <div class="row">
                <div class="col team__col">
                    <div class="card team__card mb-3" style="max-width: 700px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src='~@/assets/images/img_1/group_y.png' class="img-fluid rounded-start story__sub-col--img-groupy">
                            </div>
                            <div class="col-md-8 align-self-center">
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
                                    <p class="card-text team__card-title--text">Co-founder.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col team__col">
                    <div class="card team__card mb-3" style="max-width: 700px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src='~@/assets/images/img_1/group_x.png' class="img-fluid rounded-start story__sub-col--img-groupx">
                            </div>
                            <div class="col-md-8 align-self-center">
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
                                    <p class="card-text team__card-title--text">Co-founder.</p>
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
    padding: 3rem;

    &__container {
        
        &--header {
            color: $color-primary;
            font-weight: map-get($font-weights, medium);
            font-size: $font-xrg;
            text-align: center;
            padding-bottom: 3rem;
        }
    }

    &__card-title {
        padding:  2rem;

        &--desc{
            color: $color-primary;
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
            color: $color-primary;
            font-weight: map-get($font-weights, heavy);
            font-size: $font-sm;
            display: block;
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


@media only screen and (max-width: 600px) {
    .team {
        padding: 2rem 2rem;

        &__col {
            padding-top: 2rem;
        }
    }
}
</style>
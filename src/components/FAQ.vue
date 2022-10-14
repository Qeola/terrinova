<template>
    <div class="faq" id="faqs">
        <div class="container">
            <h1 class="faq__container--title">Frequently Asked Questions</h1>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="accordion faq__accordion" id="accordionExample">
                            <div class="faq__sub-content">
                                <div class="accordion-item faq__accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button faq__accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong class="faq__sub-content--bold">What is TERRINOVA?</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>TERRINOVA GROUP is a modern mill line Agro-Processing company that produces and packages high-quality, ready-for-consumption biofortified cassava and maize flours. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="faq__sub-content">
                            <div class="accordion-item faq__accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button faq__accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong class="faq__sub-content--bold">What do we offer?</strong>
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body</p>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="faq__sub-content">
                            <div class="accordion-item faq__accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button faq__accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <strong class="faq__sub-content--bold">Who are the founders?</strong>
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body</p>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>                            
                        </div>
                        <div class="faq__sub-content">
                            <div class="accordion-item faq__accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button faq__accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <strong class="faq__sub-content--bold">What is our motivation?</strong>
                                </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body</p>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="faq__sub-content">
                            <div class="accordion-item faq__accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button  collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <strong class="faq__sub-content--bold">Who are our partners?</strong>
                                </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body</p>, though the transition does limit overflow.
                                </div>
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
@import "@/sass/mixin.scss";
.faq {
    background-color: $color-rgb;
    padding: 3rem 0;

    &__container{
        // padding: 2rem 0;

        &--title{
            text-align: center;
            color: $color-deep-green;
            font-weight: map-get($font-weights, medium);
            font-size: $font-xrg;
            padding-bottom: 1.5rem;
        }
    }

    // .strong {
    //     color: $color-deep-green;
    // }

    &__accordion {
        box-shadow: none;
    }

    &__sub-content{
        padding-bottom: 1rem;
        box-shadow: none;
        border-radius: 10px;

        &--bold {
            color: $color-deep-green;
        }
    }
}
    .accordion-button:before {
    float: right;
    font-family: FontAwesome;
    background-image: url('@/assets/images/img_1/minus.svg');
    padding-right: 5px;
}
    .accordion-button .collapsed:after {
    float: right;
    background-image: url('@/assets/images/img_1/plus.svg');
}

.accordion-button:not(.collapsed)::after {
    background-image: url('@/assets/images/img_1/plus.svg');
    transform: rotate(-180deg);
}

.accordion-button::after {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
    content: "";
    background-image: url('@/assets/images/img_1/plus.svg');
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform .2s ease-in-out;
}



@media only screen and (max-width: 600px) {
    .faq {
        padding: 2rem 2rem;

        &__col {
            padding-top: 2rem;
        }
    }
}

</style>
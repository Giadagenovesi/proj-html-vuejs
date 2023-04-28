<script>
export default {
    name:"FeedbackSection",
}
</script>

<template>
<section class="feedback py-5">
            <div class="container">
                <div class="aknowledgements text-center">
                    <h6 class="ms_section-subtitle"> CUSTOMER TESTIMONIALS</h6>
                    <h2 class="ms_section-title mt-3"> 
                        Trusted<span>Feedback</span>
                    </h2>
                    <p class="mt-4 mb-5">We work intensivly in search of ideals that can add up in the lives of our customers. Tis is what moves us and we are grateful for the recognition.</p>
                </div>
                <div class="row mt-3">
                    <div class="col-4">
                        <div class="ms_card ">
                            <img  class="company mb-3" src="../assets/img/logo-1.png" alt="">   
                            <div class="rewiew">
                                <p>We are continually focused on developing technology solutions adapted to our client's needs.</p>
                                <p>We are continually focused on developing technology solutions adapted to our client's needs.</p>
                                <i class="fa-solid fa-quote-right "></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="ms_card ">
                            <img  class="company mb-3" src="../assets/img/logo-2.png" alt="">   
                            <div class="rewiew">
                                <p>We are continually focused on developing technology solutions adapted to our client's needs.</p>
                                <p>We are continually focused on developing technology solutions adapted to our client's needs.</p>
                                <i class="fa-solid fa-quote-right "></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="ms_card ">
                            <img  class="company mb-3" src="../assets/img/logo-3.png" alt="">   
                            <div class="rewiew">
                                <p>We are continually focused on developing technology solutions adapted to our client's needs.</p>
                                <p>We are continually focused on developing technology solutions adapted to our client's needs.</p>
                                <i class="fa-solid fa-quote-right "></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
</template>

<style scoped lang="scss">
.feedback {
    background-color: #121117;
    color: white;
    .aknowledgements {
        width: 70%;
        margin: 0 auto;
        
        p {
            color: rgba(255, 255, 255, 0.708);
            font-size: .9rem;
        }   
    }
    
    .company {
        width: 120px;
        filter: invert(100%) sepia(1%) saturate(2454%) hue-rotate(171deg) brightness(111%) contrast(100%);
    }
    .rewiew {
        p {
            color: rgba(255, 255, 255, 0.708);
            font-size: .9rem;

        }
        i {
            position: absolute;
            bottom: 10%;
            right: 15%;
            color: rgba(255, 255, 255, 0.293);
            font-size: 1.5rem;
        }      
    }          
}
</style>
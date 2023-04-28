<script>
export default {
    name:"LogisticSection",
}
</script>

<template>
<section class="logistic text-center py-5">
            <div class="ms_container mb-5">
                <h6 class=" ms_section-subtitle mb-3">HOW IT WORKS IN PRACTICE</h6>
                <h2 class=" ms_section-title mb-3">
                    <span>Logistical</span> Procedure
                </h2>
                <p>We work with innovative methodologies to ensure that the entire devlivery process is done from start to finish as planned.</p>
            </div>
            <div class="line"></div>
            <div class="steps_container">
                <div class="steps d-flex justify-content-between">
                    <div>
                        <h6 class="mb-4"> 01</h6>
                        <h5>Collection of information</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <h6 class="mb-4"> 02</h6>
                        <h5>Service Invoice Sending</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <h6 class="mb-4"> 03</h6>
                        <h5>Withdrawal of Cargo</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <h6 class="mb-4"> 04</h6>
                        <h5>Transport Customers Order</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div>
                        <h6 class="mb-4"> 05</h6>
                        <h5>Successful Delivery</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

            </div>
        </section>
</template>

<style scoped lang="scss">
.logistic {
    background-color: #EEF4ED;
    position: relative;
    
    .ms_container {
        width: 50%;
        margin: 0 auto;

        p {
            font-size: .9rem;
            color: #21333eb1;
        }
    }
    .line {
             width: 100%;
             height: 5px;
             background-color: rgba(179, 214, 225, 0.711);
         }
    .steps_container {
        width: 80%;
        margin: 0 auto;
        margin-top: -25px;
        
        .steps {
            h6 {
                margin: 0 auto;
                width: 40px;
                height: 40px;
                line-height:40px;
                background-color: #DAECED;
                border-radius: 50%;
                color: #038384;
                font-size: 1.2rem;
                font-weight: bolder;   
            }
            h5 {
                font-size: 1.3rem;
            }
            p {
                font-size: .9rem;
                color: #21333eb1;
            } 
        }
    }      
}
</style>
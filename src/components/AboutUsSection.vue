<script>
export default {
    name: "AboutUsSection",
}
</script>
<template>
    <section class="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-8 description">
                        <h6 class="ms_section-subtitle mb-4">WHO WE ARE</h6>
                        <h2 class="ms_section-title"> 
                            <span class="me-1">
                                <i class="fa-regular fa-gem"></i>
                                Excellence
                            </span> in Transport
                        </h2>
                        <div class="description-text mt-4">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio mollitia voluptas libero exercitationem ab labore debitis et, iste dolores minima nemo impedit. </p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio mollitia voluptas libero exercitationem ab labore debitis et, iste dolores minima nemo impedit. </p>
                            <p class="cit">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio mollitia voluptas libero exercitationem ab labore debitis et, iste dolores minima nemo impedit. </p>
                            <p>Sed mauris nulla, tempor eu est vel, dapibus hendreit mauris curabitur dictum pharetra.</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 vehicles">
                       <h3 class="mb-4">Vehicle Types</h3>
                       <div class=" d-flex">
                            <div class="truck me-4">
                                <img src="../assets/img/truck-1.png" alt="">
                            </div>
                            <div class="truck-type">
                                <h4>Light</h4>
                                <p>Max Weight 1200 Kg</p>
                            </div>
                       </div>
                       <hr>
                       <div class=" d-flex">
                            <div class="truck me-4">
                                <img src="../assets/img/truck-1.png" alt="">
                            </div>
                            <div class="truck-type">
                                <h4>Medium</h4>
                                <p>Max Weight 6000 Kg</p>
                            </div>
                       </div>
                       <hr>
                       <div class=" d-flex">
                            <div class="truck me-4">
                                <img src="../assets/img/truck-1.png" alt="">
                            </div>
                            <div class="truck-type">
                                <h4>Heavy</h4>
                                <p>Max Weight 24000 Kg</p>
                            </div>
                       </div>
                        <h3 class="my-3">Certifications</h3>
                        <div class="d-flex">
                            <div class="certification">
                                <img src="../assets/img/certificate.png" alt="">
                            </div>
                            <div class="certification ">
                                <img src="../assets/img/certificate.png" alt="">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
</template>
<style scoped lang="scss">
.about-us {
    color: #21333E;
    padding: 5rem 0;
    .description {
        .description-text {
        font-size: .8rem;

        .cit {
            padding: 16px;
            border-left: 4px solid rgba(173, 216, 230, 0.393);
            font-style: italic;
        }

        ul {
            padding-left: 16px;
        }
    }
       
    }
    .vehicles {
        color: #21333ecf;

        h3 {
            font-weight: bold;
            font-size: 1.2rem;
        }
        .truck {
            width: 80px;
            height: 50px;
            background-color: rgba(173, 216, 230, 0.393);
            border-radius: 2px;

            img {
            width: 80px;
            height: 50px;
            object-fit: contain;
            padding: .2rem .4rem;
            
            }
        }
        hr {
            margin: 8px 0;
        }
       
        .truck-type {
           h4 {
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 4px;
           }

           p {
            font-size: .9rem;
           }
        }
        .certification {
            width: 90px;
            height: 90px;
            background-color: white;
            margin-right:1rem;
            img {
                width: 90px;
                height: 90px;
                object-fit: contain;
            }
        }

    }
}
</style>
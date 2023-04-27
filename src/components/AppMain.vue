<script>
export default {
    name: "AppMain",
}
</script>

<template>
    <main>
        
        <!-- ABOUT US -->
        <section class="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-8 description">
                        <h6>WHO WE ARE</h6>
                        <h2> 
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
        <!-- /ABOUT US -->

        <!-- MAIN SERVICES -->
        <section class="main-services">
            <div class="container">
                <div class="row ">
                    <div class="col-9 services ">
                        <h6> ROAD TRANSPORT</h6>
                        <h2 class="mt-3">Main <span>Services</span></h2>
                        <p class="mt-4">With all of this expertise and capability comes an unrivalled commitment to customer service. We will work hard to understand your needs in order to develop a productive, long-term partnership.</p>
                    </div>
                    <div class="col-3 align-self-end mb-4 text-end">
                        <a href="" class="btn second-btn">SEE ALL</a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-4">
                        <div class="ms_card ">
                            <div class="symbol mb-3">
                                <i class="fa-solid fa-truck-ramp-box"></i>
                            </div>
                            <a href="">
                                <i class="fa-solid fa-arrow-right more"></i>
                            </a>
                            <div class="service">
                                <h6 class="mb-3">Technology</h6>
                                <p>We are continually focused on developing technology solutions adapted to our client's needs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="ms_card ">
                            <div class="symbol mb-3">
                                <i class="fa-solid fa-temperature-low"></i>
                            </div>
                            <a href="">
                                <i class="fa-solid fa-arrow-right more"></i>
                            </a>
                            <div class="service">
                                <h6 class="mb-3">Reefer Cargo</h6>
                                <p>Regular and frequent monitoring from the receipt of the loaded container to final destination</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="ms_card ">
                            <div class="symbol mb-3">
                                <i class="fa-solid fa-boxes-stacked"></i>
                            </div>
                            <a href="">
                                <i class="fa-solid fa-arrow-right more"></i>
                            </a>
                            <div class="service">
                                <h6 class="mb-3">Dry Cargo</h6>
                                <p>We work with most types of dry cargo,from valuable cargo to the most dangerous requiring care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /MAIN SERVICES -->

        <!-- LOGISTIC -->
        <section class="logistic text-center py-5">
            <h2>LOGISTICAL PROCEDURE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores rem delectus enim! Necessitatibus, laborum nemo, magnam illum cupiditate soluta quod architecto blanditiis repellendus dolorum, asperiores exercitationem quo consequatur vel?</p>
        </section>
        <!-- /LOGISTIC -->

        <!-- RESULTS -->
        <section class="results text-center">
            <div class="container">
                <h6>WHAT ARE WE DOING</h6>
                <h2> <span>Results</span> in Numbers</h2>
                <div class="result-number d-flex justify-content-between">
                    <div>
                        <h3>128</h3>
                        <p>Certification</p>
                    </div>
                    <div>
                        <h3>230</h3>
                        <p>Employees</p>
                    </div>
                    <div>
                        <h3>517</h3>
                        <p>Customer</p>
                    </div>
                    <div>
                        <h3>94</h3>
                        <p>Countries Served</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- /RESULTS -->

        <!-- FEEDBACK -->
        <section class="feedback py-5">
            <div class="container">
                <div class="aknowledgements text-center">
                    <h6> CUSTOMER TESTIMONIALS</h6>
                    <h2 class="mt-3"> Trusted<span>Feedback</span></h2>
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
        <!-- /FEEDBACK -->

        <!-- CONTACTS -->
        <section class="about-us py-5">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ducimus! Cum et error iusto ducimus id, quibusdam repellendus dignissimos laborum, nihil doloremque quidem tempora porro quam, ipsam vitae eum? Eligendi!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ducimus! Cum et error iusto ducimus id, quibusdam repellendus dignissimos laborum, nihil doloremque quidem tempora porro quam, ipsam vitae eum? Eligendi!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ducimus! Cum et error iusto ducimus id, quibusdam repellendus dignissimos laborum, nihil doloremque quidem tempora porro quam, ipsam vitae eum? Eligendi!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ducimus! Cum et error iusto ducimus id, quibusdam repellendus dignissimos laborum, nihil doloremque quidem tempora porro quam, ipsam vitae eum? Eligendi!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ducimus! Cum et error iusto ducimus id, quibusdam repellendus dignissimos laborum, nihil doloremque quidem tempora porro quam, ipsam vitae eum? Eligendi!
                    </div>
                    <div class="col-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, facere? Aliquam excepturi vero ipsam, accusamus labore voluptatibus aliquid quidem nostrum molestias laudantium sunt cum delectus possimus a repudiandae modi incidunt.
                    </div>
                </div>
            </div>
        </section>
        <!-- /CONTACTS -->
    </main>
</template>

<style scoped lang="scss">
//ABOUT US
.about-us {
    color: #21333E;
    padding: 5rem 0;
    .description {

        h6 {
            font-size: .8rem;
            padding-bottom: 1.5rem;
            font-weight: bold;
            color: #16928e;
        }
        h2 {
            font-weight: bold;

            span {
            background-color: rgba(173, 216, 230, 0.393);
            color: #16928e;
            padding: .2rem;
            }
        }
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
//MAIN SERVICES
.main-services {
    background-color: #121117;
    color: white;
    padding: 4rem 0 6rem;
    .services {
        h6 {
            font-size: .6rem;
            font-weight: bold;
            color: #16928e;
        }
        h2 {
            font-size: 2.5rem;
            font-weight: bold;

            span {
                background-color: #16928e26;
                padding: 0 .3rem;
                border-radius: 5px;
            }
        }
        p {
            font-size: .8rem;
        }
    }
    .symbol {
        width: 40px;
        height: 40px;
        color: #16928e;
        background-color: #16928e26;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
    }
    .more {
        color: #16928e88;
        font-size: .9rem;
        font-weight: bold;
        position: absolute;
        top: 20%;
        right: 20%;
    }
    .service {
        h6 {
            font-size: 1.2rem;
        }
        
        p {
            font-size: .8rem;
        }
    }
    
    
}
//LOGISTIC
.logistic {
    

   
    // DEBUG
    background-color: lightblue;
    min-height: 300px;
}

//RESULTS
.results {
    padding: 6rem 0;
    color: white;
    background-image: url(../assets/img/bg-10.jpg);
    background-size: cover;
    background-position: center;

    h6 {
        font-size: .6rem;
        font-weight: bold;
        color: #16928e;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        span {
            background-color: #16928e26;
            padding: 0 .3rem;
            border-radius: 5px; 
        }
    }
    .result-number {
        margin-top: 6rem;
        h3 {
            font-weight: bolder;
            color: #16928e;
        }
        p {
            font-weight: bolder;
        }
    }
}

//FEEDBACK
.feedback {
    background-color: #121117;
    color: white;
    .aknowledgements {
        width: 70%;
        margin: 0 auto;
        h6 {
            font-size: .6rem;
            font-weight: bold;
            color: #16928e;
        }
        h2 {
            font-size: 2.5rem;
            span {
                background-color: #16928e26;
                padding: .0 .8rem;
                border-radius: 5px;
            }
        }
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

//CONTACTS
</style>
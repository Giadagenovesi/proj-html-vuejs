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
                        <h6 class="ms_section-subtitle">WHO WE ARE</h6>
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
        <!-- /ABOUT US -->

        <!-- MAIN SERVICES -->
        <section class="main-services">
            <div class="container">
                <div class="row ">
                    <div class="col-9 services ">
                        <h6 class="ms_section-subtitle"> ROAD TRANSPORT</h6>
                        <h2 class="ms_section-title mt-3">Main <span>Services</span></h2>
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
        <!-- /LOGISTIC -->

        <!-- RESULTS -->
        <section class="results text-center">
            <div class="container">
                <h6 class="ms_section-subtitle mb-4">WHAT ARE WE DOING</h6>
                <h2 class="ms_section-title"> 
                    <span>Results</span> in Numbers
                </h2>
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
        <!-- /FEEDBACK -->

        <!-- CONTACTS -->
        <section class="contacts py-5">
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <div class="get-in-touch">
                            <h6 class="ms_section-subtitle">SEND A MESSAGE</h6>
                            <h2 class="ms_section-title mt-3">
                                Get in <span>Touch</span>
                            </h2>
                            <p class="mb-5">We will respond to your message as soon as possible</p>
                        </div>   
                        <form action="" class="contact-us">
                            <div class="row mb-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Name" aria-label="Name">
                                </div>
                                <div class="col">
                                    <input type="email" class="form-control" placeholder="Email" aria-label="Email">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Phone" aria-label="Phone">
                                </div>
                                <div class="col">
                                    <select id="inputState" class="form-select">
                                        <option selected>More info</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class=" col col-12">
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea2Disabled"></textarea>
                                        <label for="floatingTextarea2Disabled">Message</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <a href="" class="btn main-btn">SEND</a>

                    </div>
                    <div class="col-5">
                        <div class="company-contacts">
                            <h4 class="mb-3">Example Inc.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Illo deleniti repellendus laudantium autem molestiae reprehenderit dolor.</p>
                            <ul>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-phone me-2"></i>
                                    </a>
                                    <span>+1(305) 1234-5678</span>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-envelope me-2"></i>
                                    </a>
                                    <span>hello@examples.com</span>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </a>
                                    <span>Main Avenue, 987</span>
                                </li>
                                <a href="" class="btn second-btn map">VIEW MAP</a>
                            </ul>
                        </div>
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
            color: white;
            font-weight: 600;
        }
        
        p {
            font-size: .8rem;
        }
    } 
}
//LOGISTIC
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

//RESULTS
.results {
    padding: 6rem 0;
    color: white;
    background-image: url(../assets/img/bg-10.jpg);
    background-size: cover;
    background-position: center;

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
.contacts {
    .get-in-touch {
        p {
            color: #21333eb1;
            font-size: .9rem;
        }
    }
    .contact-us {
        .col {
            padding: 0 3px 0 12px;
        }
        input {
            background-color: rgb(246, 246, 246);
            border: 0;
        }
        select {
            background-color: rgb(246, 246, 246);
            border: 0;
            color: gray;
        }
        textarea {
            height: 120px;
            background-color: rgb(246, 246, 246);
            border: 0;
        }
    }
    .company-contacts {
        padding: 0 1.5rem ;
        h4 {
            font-size: 1.2rem;
            font-weight: bolder;
        }
        p {
            color: #21333eb1;
            font-size: .9rem;
        }
        ul {
            list-style-type: none;
            color: #038384;
            padding: 0;
            li {
                margin: 1.5rem 0;
            }

            i {
                width: 30px;
                height: 30px;
                text-align: center;
                border-radius: 50%;
                background-color: #16928e26;
                line-height: 30px;
                margin-right: 10px;
            }
        }
        .map {
            color: #038384;
        }
    }
}
</style>
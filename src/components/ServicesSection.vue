<script>
export default {
    name:"ServicesSection",
}
</script>

<template>
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
</template>

<style scoped lang="scss">
.main-services {
    background-color: #121117;
    color: white;
    padding: 4rem 0 6rem;
    .services {
        p {
            font-size: .8rem;
            color: rgba(255, 255, 255, 0.651);
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
</style>
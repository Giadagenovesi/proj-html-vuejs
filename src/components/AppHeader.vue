<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <div class="header-top pt-2">
            <div class="container d-flex justify-content-between">
                <div class="opening">
                    <i class="fa-solid fa-clock me-2"></i>
                    <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
                </div>
                <div class="social">
                    <ul class="d-flex">
                        <li>
                            <i class="fa-solid fa-phone me-2"></i>
                            <span>+1(305) 1234-5678</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-envelope me-2"></i>
                            <span>hello@examples.com</span>
                        </li>
                        <li>
                            <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header-bottom pt-3">
            <div class="container">
                <div class=" d-flex  justify-content-between align-items-center">
                    <div class="logo">
                        <h6>
                        <span>NEX</span>GEN
                    </h6>
                    </div>
                    <div class="nav-bar d-flex pt-3">
                        <ul class="d-flex">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-regular fa-user"></i>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                    <a href="" class="btn main-btn">GET IN TOUCH</a>
                  
                </div>
                <div class="cargo-transport">
                    <h6>LOGISTIC SERVICES</h6>
                    <h1>CARGO TRANSPORT</h1>
                    <p>Fractional or exclusive road cargo trasportation to all regions, with small, medium and large vehicles</p>
                    <a href="" class="me-2 btn main-btn">GET IN TOUCH</a>
                    <a href="" class="btn second-btn ">READ MORE</a>
                    
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {

    // HEADER TOP
.header-top {
    width: 100%;
    background-color: #21333E;
    color: rgba(255, 255, 255, 0.708);
    font-size: .8rem;
    .social li {
        margin: 0 1rem;
    }
}
// HEADER-BOTTOM
.header-bottom {
    background-image:url(../assets/img/bg-9.jpg);
    background-position: top left;
    filter: grayscale(.2);
    background-size: cover;
    color: white;
    padding-bottom:  9rem ;
    .logo {
        h6 {
            font-size: 1rem;
            font-weight:bold ;
            span {
                color: #52bbbb;
                margin-right: .2rem;
                background-color: #52bbbb37;
                padding: .4rem .1rem .4rem 1.5rem;
                border-radius: 30px 0 0 30px;
            }
        }
    }
    .nav-bar {
        li {
            margin: 0 1.2rem;
        }
    }

    .cargo-transport {
        padding-top: 2rem;
        width: 40%;
        margin: 5rem 0 0 2rem;

        h6 {
            font-size: .8rem;
            color: #52bbbb;
        }
        h1 {
            margin-bottom: 2rem;
            font-size: 3.5rem;
            font-weight: 900;
        }
    }
}

}

</style>
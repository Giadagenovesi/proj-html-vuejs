<script>
import { store } from '../store';
export default {
    name: "AppFooter",
    props: {
        abouts: String,
        transports: String,
        supports: String,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="logo">
                            <h6>
                                <span>NEX</span>GEN
                            </h6>
                        </div>
                        <div class="company-contacts">
                            <p class="mt-4">A Functional HTML Template for Corporate & Business.</p>
                            <ul >
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
                                <a href="" class="btn second-btn">GET IN TOUCH</a>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="col-3">
                        <div class="ms_card">
                            <h4 class="card-title">About</h4>
                            <ul class="more-details">
                                <li v-for="(about, index) in store.abouts" :key="index">{{ about }} </li>                             
                            </ul>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="ms_card">
                            <h4 class="card-title">Trasport</h4>
                            <ul class="more-details">
                                <li v-for="(transport, index) in store.transports" :key="index">{{ transport }} </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="ms_card">
                            <h4 class="card-title">Support</h4>
                            <ul class="more-details">
                                <li v-for="(support, index) in store.supports" :key="index">{{ support }} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container d-flex justify-content-between">
            <p>Enjoy the low price. We are tracking any intention of piracy.</p>
            <p>
                <i class="fa-regular fa-copyright"></i>
                2020 NEXGEN is Proudly Powered by <span>Codings</span>.</p>
            </div>
        </div>

    </footer>
</template>

<style scoped lang="scss">
.footer-top {
    color: white;
    background-color: #111117;
    padding: 5rem 0;
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
    .company-contacts {
        font-size: .8rem;
        color: rgba(255, 255, 255, 0.708);
        ul {
            list-style-type: none;
            padding: 0;
            li {
                margin: 1rem 0;
                i {
                    margin-right: 10px;
                }
    
            }   
        }
        //HOVER EFFECTS
        i:hover {
        color: #52bbbb;
        } 
        
    }
    .card-title {
        color: white;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    .more-details {
        list-style-type: none;
        padding: 0;
        font-size: .8rem;
        
        li::before {
            content: ">";
            margin-right: .4rem;
            font-size: 1rem;
        }
    }
    
}
.footer-bottom {
    height: 60px;
    background-color: #0D0D11;
    color: rgba(255, 255, 255, 0.605);
    font-size: .8rem;
    padding: 1rem 0;
    span {
        color: #038384;
    }
    
}
</style>
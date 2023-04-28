<script>
export default {
    name:"ContactsSection",
}
</script>

<template>
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
</template>

<style scoped lang="scss">
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
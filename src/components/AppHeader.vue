<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <div class="header-top">
            <div class="container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo exercitationem tempore expedita culpa minima tempora et repellendus? Voluptates ipsam doloribus corporis doloremque adipisci magnam, laborum sequi eveniet quis aut!
            </div>
        </div>
        <div class="header-bottom py-5">
            <div class="container">
                <div class="nav-bar d-flex  align-items-center">
                    <h2>NEX GEN</h2>
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
                    </ul>
                </div>
                <div class="cargo-transport">
                    <h4>LOGISTIC SERVICES</h4>
                    <h1>CARGO TRANSPORT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque eligendi ad consectetur officiis at voluptatem in.</p>
                    <a href="" class="me-2">GET IN TOUCH</a>
                    <a href="">READ MORE</a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {

}
// HEADER TOP
.header-top {
    height: 50px;
    width: 100%;
    background-color: #21333E;
    color: white;
}
// HEADER-BOTTOM
.header-bottom {
    // DEBUG
    min-height: 400px;
    background-color: lightblue;
    .nav-bar li{
        list-style-type: none;
        margin-right: 10px;
    }

    .cargo-transport {
        width: 30%;
        margin-top: 5rem;
    }
}
</style>
<script>
import { store } from '../store';

export default {
    name:"ResultsSection",
    props: {
        results: Object,
    },
    data() {
        return {
            store
        }
    }
    
}
</script>

<template>
<section class="results text-center">
            <div class="container">
                <h6 class="ms_section-subtitle mb-4">WHAT ARE WE DOING</h6>
                <h2 class="ms_section-title"> 
                    <span>Results</span> in Numbers
                </h2>
                <div class="d-flex justify-content-between">
                    <div class="result-number" v-for="(result, index) in store.results">
                        <h3> {{ result.number }}</h3>
                        <p>{{ result.topic }}</p>
                    </div>  
                </div>
            </div>
        </section>
</template>

<style scoped lang="scss">
.results {
    padding: 6rem 0;
    color: white;
    background-image: url(../assets/img/bg-10.jpg);
    background-size: cover;
    background-position: center;

    .result-number {
        padding: .5rem;
        margin-top: 4rem;
        border-radius: 3px; 
        transition: all 1s;

        h3 {
            font-weight: bolder;
            color: #16928e;
        }
        p {
            font-weight: bolder;
        }
    }
    .result-number:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
}
</style>
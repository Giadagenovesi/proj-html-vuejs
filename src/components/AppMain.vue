<script>
import AboutUsSection from './AboutUsSection.vue';
import ServicesSection from './ServicesSection.vue';
import LogisticSection from './LogisticSection.vue';
import ResultsSection from './ResultsSection.vue';
import FeedbackSection from './FeedbackSection.vue';
import ContactsSection from './ContactsSection.vue';
import { store } from '../store';


export default {
    name: "AppMain",
    components: {
    AboutUsSection,
    ServicesSection,
    LogisticSection,
    ResultsSection,
    FeedbackSection,
    ContactsSection
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>      
        <!-- ABOUT US -->
        <AboutUsSection />
        <!-- /ABOUT US -->

        <!-- MAIN SERVICES -->
        <ServicesSection />
        <!-- /MAIN SERVICES -->

        <!-- LOGISTIC -->
        <LogisticSection />
        <!-- /LOGISTIC -->

        <!-- RESULTS -->
        <ResultsSection />
        <!-- /RESULTS -->

        <!-- FEEDBACK -->
        <FeedbackSection />
        <!-- /FEEDBACK -->

        <!-- CONTACTS -->
        <ContactsSection />
        <!-- /CONTACTS -->
    </main>
</template>

<style scoped lang="scss">

</style>
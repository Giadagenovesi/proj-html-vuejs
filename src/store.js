import { reactive }  from "vue";

export const store = reactive({
    abouts: ["The Company", "Institutional", "Social & Events", "Innovation", "Environment", "Technology"],
    transports: ["Industrialized", "Chemicals", "Packaged Liquids", "Construction", "Laminated Wood", "And others"],
    supports:["Responsability", "Terms of Use", "About Cookies", "Privacy Policy", "Accessibility", "Information"],

    results: [
        {
            number: "128",
            topic: "Certification",
        },
        {
            number: "230",
            topic: "Customer",
        },
        {
            number: "517",
            topic: "Customer",
        },
        {
            number: "94",
            topic: "Countries Served",
        }
    ],

    NavLinks: ["HOME", "ABOUT", "SERVICES", "PROCESS", "TESTIMONIALS"]

});
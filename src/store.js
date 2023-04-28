import { reactive }  from "vue";

export const store = reactive({
    // HEADER
    NavLinks: ["HOME", "ABOUT", "SERVICES", "PROCESS", "TESTIMONIALS"],

    //LOGISTIC SECTION
    steps: [
        {
            number: "01",
            title: "Collection of information",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            number: "02",
            title: "Service Invoice Sending",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            number: "03",
            title: "Withdrawal of Cargo",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            number: "04",
            title: "Transport Customers Order",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            number: "05",
            title: "Successful Delivery",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
        },
       
    ],

    // RESULT SECTION
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
    //FEEDBACK SECTION
    abouts: ["The Company", "Institutional", "Social & Events", "Innovation", "Environment", "Technology"],
    transports: ["Industrialized", "Chemicals", "Packaged Liquids", "Construction", "Laminated Wood", "And others"],
    supports:["Responsability", "Terms of Use", "About Cookies", "Privacy Policy", "Accessibility", "Information"],

    //


    

});
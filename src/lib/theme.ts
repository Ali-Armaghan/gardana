import { Poppins } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    variable: "--font-poppins",
});

export const Theme = {
    colors: {
        primary: "#FE4D6A",
        secondary: "#EC4762",
        icon: "#DE425B",
        background: "#121212",
        text: "#FFFFFF",
        link: "#A8A8A8",
    },
    fonts: {
        default: "var(--font-poppins), sans-serif",
        montserrat: "var(--font-poppins), sans-serif",
        button: "var(--font-poppins), sans-serif",
        weight: {
            normal: 300,
            semiNormal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            heading: 900,
        },
        spacing: {
            normal: "0.05em",
            medium: "0.09em",
            large: "0.15em",
        },
    },
};


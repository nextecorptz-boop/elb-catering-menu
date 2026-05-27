/**
 * ELB Catering Menu Data
 * Single-week office lunch menu
 */

const MENU_DATA = {
    days: [
        {
            dayName: "Monday",
            meals: {
                mainStarch: "Vegetable Rice",
                protein1: "BBQ Chicken",
                protein2: "Beef Roast",
                vegetables: "Spinach",
                sides: "Maharage ya Nazi",
                fruit: "Seasonal Fruit"
            }
        },
        {
            dayName: "Tuesday",
            meals: {
                mainStarch: "Pilau",
                protein1: "Chicken Curry",
                protein2: "Beef Eminces",
                vegetables: "Kachumbari",
                sides: "Hindustan Vegetables",
                fruit: "Seasonal Fruit"
            }
        },
        {
            dayName: "Wednesday",
            meals: {
                mainStarch: "Fried Fries & Rice Zabibu",
                protein1: "BBQ Chicken",
                protein2: "Ox-Liver Roast",
                vegetables: "Macedoine Vegetables",
                sides: "Njegere Sauce",
                fruit: "Seasonal Fruit"
            }
        },
        {
            dayName: "Thursday",
            meals: {
                mainStarch: "Ndizi Mshale / Bukoba",
                protein1: "Beef Stew",
                protein2: "Chicken Fry",
                vegetables: "Green Beans",
                sides: "Maharage ya Nazi",
                fruit: "Seasonal Fruit"
            }
        },
        {
            dayName: "Friday",
            meals: {
                mainStarch: "Biryani",
                protein1: "Biryani Chicken Roast",
                protein2: "Biryani Beef Roast",
                vegetables: "Cabbage & Carrot",
                sides: "Ndizi Mzuzu",
                fruit: "Seasonal Fruit"
            }
        }
    ],

    themes: {
        classic: {
            primary: "#0F3020",
            accent: "#C2591F",
            secondary: "#D4AF37",
            background: "#FBF7EF",
            text: "#2D3A3A"
        },
        navy: {
            primary: "#0B132B",
            accent: "#D4AF37",
            secondary: "#48CAE4",
            background: "#F5F7FA",
            text: "#1A2A3A"
        },
        umber: {
            primary: "#4A2C20",
            accent: "#BC6C25",
            secondary: "#DDA15E",
            background: "#F9F5F0",
            text: "#3E2723"
        },
        slate: {
            primary: "#1F2421",
            accent: "#9B2226",
            secondary: "#D4AF37",
            background: "#F4F1EC",
            text: "#263238"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MENU_DATA;
}

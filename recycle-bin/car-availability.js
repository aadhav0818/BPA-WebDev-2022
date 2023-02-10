
function loadData()
{
    displayInventory(vehicle_data);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting)
            {
               entry.target.classList.add('show'); 
            }
            else
            {
               entry.target.classList.remove('show');
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
}

function displayInventory(data_array)
{
    let dataField = document.getElementById("main-listing");
    dataField.innerHTML = "";
    for(let i = 0; i < data_array.length; i++)
    {
        let rel_make = data_array[i].model.replaceAll(' ', '-');
        let checkpoint = data_array[i].brand.replace("Mercedes-Benz", "Mercedes");
        let rel_filepath = data_array[i].year + "-" + data_array[i].color + "-" + checkpoint + "-" +  rel_make;
        let display_name = `${data_array[i].year} ${data_array[i].color} ${data_array[i].brand} ${data_array[i].model}`;

        dataField.innerHTML +=
        `
            <div class="card vehicle-status hidden">
                <div class="card-body">
                    <p class="card-text vehicle-text">${display_name}</p>
                </div>
            </div>
        `
    }
}

let filterInv = [];

document.getElementById("myinput").addEventListener("keyup", function()
{
    let text = document.getElementById("myinput").value;
    filterInv = vehicle_data.filter(function(x)
    {
        if(x.model.includes(text))
        {
            return x.model;
        }
    });
    if(text == "")
    {
        console.log("HEY")
        displayInventory(vehicle_data);
    }
    else
    {
        displayInventory(filterInv);
    }
})



//Inventory Data

let vehicle_data = 
[
    {
        id: 1,
        model:"C 300 Sport",
        price:10538,
        color:"Red",
        brand:"Mercedes-Benz",
        year:2010,
        miles:112343,
        type:"Sedan"
    },

    {
        id: 2,
        model:"Insight Touring",
        price:29510,
        color:"Silver",
        brand:"Honda",
        year:2019,
        miles:25768,
        type:"Sedan"
    },


    {
        id: 3,
        model:"Impreza Premium",
        price:16950,
        color:"White",
        brand:"Subaru",
        year:2012,
        miles:54639,
        type:"Sedan"
    },

    {
        id: 4,
        model:"WRX STI",
        price:19967,
        color:"Orange",
        brand:"Subaru",
        year:2013,
        miles:68993,
        type:"Sedan"
    },

    {
        id: 5,
        model:"RX 350L Base",
        price:17934,
        color:"Red",
        brand:"Lexus",
        year:2013,
        miles:125789,
        type:"SUV"
    },

    {
        id: 6,
        model:"Pilot Elite",
        price:35758,
        color:"Blue",
        brand:"Honda",
        year:2019,
        miles:33523,
        type:"SUV"
    },

    {
        id: 7,
        model:"Highlander SE",
        price:24639,
        color:"Green",
        brand:"Toyota",
        year:2014,
        miles:112392,
        type:"SUV"
    },

    {
        id: 8,
        model:"R8 4.2",
        price:81844,
        color:"Blue",
        brand:"Audi",
        year:2015,
        miles:27988,
        type:"Coupe"
    },

    {
        id: 9,
        model:"RDX Base",
        price:18320,
        color:"Gray",
        brand:"Acura",
        year:2015,
        miles:21321,
        type:"SUV"
    },

    {
        id: 10,
        model:"TLX Tech",
        price:16632,
        color:"Gray",
        brand:"Acura",
        year:2015,
        miles:24490,
        type:"Sedan"
    },

    {
        id: 11,
        model:"LX 570 Base",
        price:36991,
        color:"Gray",
        brand:"Lexus",
        year:2015,
        miles:127651,
        type:"SUV"
    },

    {
        id: 12,
        model:"RAV4 LE",
        price:15950,
        color:"Gray",
        brand:"Toyota",
        year:2015,
        miles:74639,
        type:"SUV"
    },

    {
        id: 13,
        model:"Altima SV",
        price:16432,
        color:"Red",
        brand:"Nissan",
        year:2015,
        miles:89678,
        type:"Sedan"
    },

    {
        id: 14,
        model:"Avalon Limited",
        price:22757,
        color:"Tan",
        brand:"Toyota",
        year:2015,
        miles:45075,
        type:"Sedan"
    },

    {
        id: 15, 
        model:"Trax LTZ",
        price:15996,
        color:"Blue",
        brand:"Chevrolet",
        year:2016,
        miles:78323,
        type:"SUV"
    },

    {
        id: 16,
        model:"GLA 250 4MATIC",
        price:19452,
        color:"Gray",
        brand:"Mercedes-Benz",
        year:2020,
        miles:92452,
        type:"SUV"
    },

    {
        id: 17,
        model:"Murano Platinium",
        price:26750,
        color:"Orange",
        brand:"Nissan",
        year:2016,
        miles:98639,
        type:"SUV"
    },

    {
        id: 18,
        model:"MDX Base",
        price:21998,
        color:"Purple",
        brand:"Acura",
        year:2016,
        miles:19912,
        type:"SUV"
    },

    {
        id: 19,
        model:"Impala 2LT",
        price:19510,
        color:"Red",
        brand:"Chevrolet",
        year:2016,
        miles:54892,
        type:"Sedan"
    },

    {
        id: 20,
        model:"ES 350 Base",
        price:36789,
        color:"Silver",
        brand:"Lexus",
        year:2016,
        miles:44721,
        type:"Sedan"
    },

    {
        id: 21,
        model:"Sequoia Limited",
        price:37400,
        color:"Tan",
        brand:"Toyota",
        year:2016,
        miles:76347,
        type:"SUV"
    },

    {
        id: 23,
        model:"F-150 Limited",
        price:38998,
        color:"Red",
        brand:"Ford",
        year:2017,
        miles:19902,
        type:"Truck"
    },

    {
        id: 24,
        model:"Pathfinder SL",
        price:25996,
        color:"White",
        brand:"Nissan",
        year:2017,
        miles:56093,
        type:"SUV"
    },

    {
        id: 25,
        model:"Forester Premium 2.5i",
        price:17958,
        color:"White",
        brand:"Subaru",
        year:2017,
        miles: 94638,
        type:"Hatchback"
    },

    {
        id: 26,
        model:"Focus ST",
        price:16298,
        color:"Yellow",
        brand:"Ford",
        year:2017,
        miles:70000,
        type:"Sedan"
    },

    {
        id: 27,
        model:"Accord EX-L",
        price:27950,
        color:"Black",
        brand:"Honda",
        year:2020,
        miles:35632,
        type:"Sedan"
    },

    {
        id: 28,
        model:"Camaro ZL1",
        price:60661,
        color:"Blue",
        brand:"Chevrolet",
        year:2018,
        miles:15399,
        type:"Coupe"
    },

    {
        id: 29,
        model:"Focus SE",
        price:18998,
        color:"Blue",
        brand:"Ford",
        year:2018,
        miles:38002,
        type:"Sedan"
    },

    {
        id: 30,
        model:"4Runner Limited",
        price:35360,
        color:"Blue",
        brand:"Toyota",
        year:2018,
        miles:52432,
        type:"SUV"
    },

    {
        id: 31,
        model:"ILX A-Spec",
        price:24820,
        color:"Gray",
        brand:"Acura",
        year:2018,
        miles:41443,
        type:"Sedan"
    },

    {
        id: 32,
        model:"MDX Sport Hybrid",
        price:42012,
        color:"Gray",
        brand:"Acura",
        year:2018,
        miles:48561,
        type:"SUV"
    },

    {
        id: 33,
        model:"Q5 55 Prestige",
        price:32998,
        color:"Gray",
        brand:"Audi",
        year:2018,
        miles:59120,
        type:"SUV"
        },

        {
        id: 34,
        model:"Volt Premier",
        price:18559,
        color:"Gray",
        brand:"Chevrolet",
        year:2018,
        miles:82579,
        type:"Sedan"
    },

    {
        id: 35,
        model:"S5 Sportback",
        price:54998,
        color:"Red",
        brand:"Audi",
        year:2018,
        miles:33215,
        type:"Coupe"
    },

    {
        id: 36,
        model:"Fit EX",
        price:22400,
        color:"Orange",
        brand:"Honda",
        year:2019,
        miles:26447,
        type:"Sedan"
    },

    {
        id: 37,
        model:"HR-V EX-L",
        price:14639,
        color:"Gray",
        brand:"Honda",
        year:2016,
        miles:72392,
        type:"SUV"
    },

    {
        id: 38,
        model:"WRX Premium",
        price:27996,
        color:"Red",
        brand:"Subaru",
        year:2018,
        miles:26093,
        type:"Sedan"
    },

    {
        id: 39,
        model:"Cruze LS",
        price:18998,
        color:"Silver",
        brand:"Chevrolet",
        year:2018,
        miles:16641,
        type:"Sedan"
    },

    {
        id: 40,
        model:"S 560 4MATIC",
        price:57657,
        color:"Silver",
        brand:"Mercedes-Benz",
        year:2018,
        miles:42150,
        type:"Sedan"
    },

    {
        id: 41,
        model:"A6 2.0T Premium",
        price:24499,
        color:"White",
        brand:"Audi",
        year:2018,
        miles:37987,
        type:"Sedan"
    },

    {
        id: 42,
        model:"S5 3.0T Prestige",
        price:50485,
        color:"White",
        brand:"Audi",
        year:2018,
        miles:27625,
        type:"Sedan"
    },

    {
        id: 43,
        model:"Equinox 1LT",
        price:23998,
        color:"Black",
        brand:"Chevrolet",
        year:2019,
        miles:43623,
        type:"SUV"
    },

    {
        id: 44,
        model:"LS 500h Base",
        price:54998,
        color:"Black",
        brand:"Lexus",
        year:2019,
        miles:32822,
        type:"Sedan"
    },

    {
        id: 45,
        model:"RC F Base",
        price:61367,
        color:"Black",
        brand:"Lexus",
        year:2019,
        miles:22173,
        type:"Sports"
    },

    {
        id: 46,
        model:"CLS AMG",
        price:124320,
        color:"Black",
        brand:"Mercedes-Benz",
        year:2019,
        miles:20781,
        type:"Sedan"
    },

    {
        id: 47,
        model:"Crosstrek Hybrid Base",
        price:32757,
        color:"Blue",
        brand:"Subaru",
        year:2019,
        miles:55375,
        type:"Sedan"
    },

    {
        id: 48,
        model:"Odyssey Touring",
        price:41996,
        color:"Gray",
        brand:"Honda",
        year:2022,
        miles:12093,
        type:"SUV"
    },

    {
        id: 49,
        model:"Edge SEL",
        price:23992,
        color:"Red",
        brand:"Ford",
        year:2020,
        miles:50235,
        type:"SUV"
    },

    {
        id: 50,
        model:"GX 460 Premium",
        price:50420,
        color:"Gray",
        brand:"Lexus",
        year:2019,
        miles:46347,
        type:"SUV"
    },

    {
        id: 51,
        model:"A 220 4MATIC",
        price:39371,
        color:"White",
        brand:"Mercedes-Benz",
        year:2019,
        miles:17520,
        type:"Sedan"
    },

    {
        id: 52,
        model:"Titan Pro4X",
        price:42670,
        color:"Orange",
        brand:"Nissan",
        year:2019,
        miles:49765,
        type:"Truck"
    },

    {
        id: 53,
        model:"RLX Sport Hybrid",
        price:24521,
        color:"Red",
        brand:"Acura",
        year:2019,
        miles:34901,
        type:"Sedan"
    },

    {
        id: 54,
        model:"Sentra SR Turbo",
        price:19679,
        color:"Red",
        brand:"Nissan",
        year:2019,
        miles: 42392,
        type:"SUV"
    },

    {
        id: 55,
        model:"IS 300 F SPORT",
        price:39632,
        color:"Silver",
        brand:"Lexus",
        year:2019,
        miles: 32343,
        type:"Sedan"
    },

    {
        id: 56,
        model:"AMG GLS 63 4MATIC",
        price:52632,
        color:"Silver",                                 
        brand:"Mercedes-Benz",
        year:2019,
        miles:51390,
        type:"SUV"
    },

    {
        id: 57,
        model:"GTR Premium Coupe",
        price:120876,
        color:"Silver",
        brand:"Nissan",
        year:2019,
        miles:18162,
        type:"Coupe"
    },

    {
        id: 58,
        model:"RDX Advance",
        price:38998,
        color:"White",
        brand:"Acura",
        year: 2019,
        miles:28220,
        type:"SUV"
    },

    {
        id: 59,
        model:"TLX A-Spec",
        price:26998,
        color:"White",
        brand:"Acura",
        year:2019,
        miles:64221,
        type:"Sedan"
    },

    {
        id: 60,
        model:"CR-V EX-L",
        price:34998,
        color:"Red",
        brand:"Honda",
        year:2021,
        miles:11822,
        type:"SUV"
    },

    {
        id: 61,
        model:"GLB 250 4MATIC",
        price:33945,
        color:"White",
        brand:"Mercedes-Benz",
        year:2019,
        miles:32946,
        type:"SUV"
    },

    {
        id: 62,
        model:"G 550",
        price:142356,
        color:"White",
        brand:"Mercedes-Benz",
        year:2019,
        miles:12312,
        type:"SUV"
    },

    {
        id: 63,
        model:"Leaf SL",
        price:22900,
        color:"White",
        brand:"Nissan",
        year:2019,
        miles:32475,
        type:"Hatchback"
    },

    {
        id: 64,
        model:"Q7 55 Prestige",
        price:57910,
        color:"Black",
        brand:"Audi",
        year:2020,
        miles:39574,
        type:"SUV"
    },

    {
        id: 65,
        model:"CLA 250",
        price:34876,
        color:"Black",
        brand:"Mercedes-Benz",
        year:2020,
        miles:22701,
        type:"Sedan"
    },

    {
        id: 66,
        model:"Armada Platinium",
        price:36300,
        color:"Black",
        brand:"Nissan",
        year:2020,
        miles:46347,
        type:"SUV"
    },

    {
        id: 67,
        model:"Outback Onyx Edition XT",
        price:32998,
        color:"Black",
        brand:"Subaru",
        year:2020,
        miles:43822,
        type:"Hatchback"
    },

    {
        id: 68,
        model:"F-150 Raptor",
        price:57870,
        color:"Blue",
        brand:"Ford",
        year:2020,
        miles:35921,
        type:"Truck"
    },

    {
        id: 69,
        model:"AMG GLE 43 4MATIC",
        price:63765,
        color:"Blue",
        brand:"Mercedes-Benz",
        year:2020,
        miles:12301,
        type:"SUV"
    },

    {
        id: 70,
        model:"Impreza Premium",
        price:23400,
        color:"Blue",
        brand:"Subaru",
        year:2020,
        miles:16347,
        type:"Sedan"
    },

    {
        id: 71,
        model:"Q7 Premium Plus",
        price:39998,
        color:"Gray",
        brand:"Audi",
        year:2017,
        miles:42114,
        type:"SUV"
    },

    {
        id: 72,
        model:"Civic Touring",
        price:32757,
        color:"Red",
        brand:"Honda",
        year:2021,
        miles:4075,
        type:"Sedan"
    },

    {
        id: 73,
        model:"SQ5",
        price:52981,
        color:"Green",
        brand:"Audi",
        year:2020,
        miles:45661,
        type:"SUV"
    },

    {
        id: 74,
        model:"Mustang GT Premium",
        price:35998,
        color:"Orange",
        brand:"Ford",
        year:2020,
        miles:35921,
        type:"Coupe"
    },

    {
        id: 75,
        model:"Camry SE",
        price:31758,
        color:"Red",
        brand:"Toyota",
        year:2020,
        miles:43823,
        type:"Sedan"
    },

    {
        id: 76,
        model:"Prius LE",
        price:19367,
        color:"Red",
        brand:"Toyota",
        year:2020,
        miles:28973,
        type:"Sedan"
    },

    {
        id: 77,
        model:"Silverado 2500 HD Z71",
        price:55995,
        color:"Silver",
        brand:"Chevrolet",
        year:2020,
        miles:42800,
        type:"Truck"
    },

    {
        id: 78,
        model:"MDX Base",
        price:49231,
        color:"White",
        brand:"Acura",
        year:2020,
        miles:60189,
        type:"SUV"
    },

    {
        id: 79,
        model:"Passport Touring",
        price:31200,
        color:"Gray",
        brand:"Honda",
        year:2020,
        miles:28973,
        type:"SUV"
    },

    {
        id: 80,
        model:"Expedition Limited",
        price:54448,
        color:"White",
        brand:"Ford",
        year:2020,
        miles:20112,
        type:"SUV"
    },

    {
        id: 81,
        model:"Explorer",
        price:24123,
        color:"White",
        brand:"Ford",
        year:2020,
        miles:25711,
        type:"SUV"
    },
    
    {
        id: 82,
        model:"Corolla",
        price:24998,
        color:"White",
        brand:"Toyota",
        year:2020,
        miles:38822,
        type:"Hatchback"
    },

    {
        id: 83,
        model:"Supra",
        price:60001,
        color:"Yellow",
        brand:"Toyota",
        year:2020,
        miles:28162,
        type:"Coupe"
    },

    {
        id: 84,
        model:"Q5 45 Premium",
        price:36856,
        color:"Blue",
        brand:"Audi",
        year:2021,
        miles:49347,
        type:"SUV"
    },

    {
        id: 85,
        model:"Trailblazer RS",
        price:31998,
        color:"Blue",
        brand:"Chevrolet",
        year:2021,
        miles:21327,
        type:"SUV"
    },

    {
        id: 86,
        model:"Legacy Limited XT",
        price:32639,
        color:"Blue",
        brand:"Subaru",
        year:2021,
        miles: 13239,
        type:"Sedan"
    },

    {
        id: 87,
        model:"F-150 Limited",
        price:67230,
        color:"Black",
        brand:"Ford",
        year:2021,
        miles:56123,
        type:"Truck"
    },

    {
        id: 88,
        model:"Tacoma SR5",
        price:31996,
        color:"Gray",
        brand:"Toyota",
        year:2021,
        miles:16093,
        type:"Truck"
    },

    {
        id: 89,
        model:"Suburban Z71",
        price:68987,
        color:"Red",
        brand:"Chevrolet",
        year:2021,
        miles:19489,
        type:"SUV"
    },

    {
        id: 90,
        model:"Escape",
        price:29001,
        color:"Red",
        brand:"Ford",
        year:2021,
        miles:42783,
        type:"SUV"
    },

    {
        id: 91,
        model:"NX 300 F SPORT",
        price:36409,
        color:"Silver",
        brand:"Lexus",
        year:2021,
        miles:10980,
        type:"SUV"
    },

    {
        id: 92,
        model: "ILX A-Spec",
        price:31962,
        color:"White",
        brand:"Acura",
        year:2021,
        miles:65432,
        type:"Sedan"
    },

    {
        id: 93,
        model:"Tahoe LS",
        price:54658,
        color:"White",
        brand:"Chevrolet",
        year:2021,
        miles:29341,
        type:"SUV"
    },

    {
        id: 94,
        model:"Crosstrek Premium",
        price:27867,
        color:"White",
        brand:"Subaru",
        year:2021,
        miles:12432,
        type:"Hatchback"
    },

    {
        id: 95,
        model:"Ridgeline RTL-E",
        price:39201,
        color:"Red",
        brand:"Honda",
        year:2021,
        miles:19456,
        type:"Truck"
    },

    {
        id: 96,
        model:"ES 350 F SPORT",
        price:46987,
        color:"Blue",
        brand:"Lexus",
        year:2022,
        miles: 13823,
        type:"Sedan"
    },

    {
        id: 97,
        model:"BRZ Limited",
        price:35021,
        color:"Blue",
        brand:"Subaru",
        year:2022,
        miles:2162,
        type:"Coupe"
    },

    {
        id: 98,
        model:"Altima SR",
        price:26890,
        color:"Gray",
        brand:"Nissan",
        year:2022,
        miles:8907,
        type:"Sedan"
    },

    {
        id: 99,
        model:"RX 350L Base",
        price:59360,
        color:"Silver",
        brand:"Lexus",
        year:2022,
        miles:5209,
        type:"SUV"
    },

    {
        id: 100,
        model:"A7 Premium",
        price: 47123,
        color:"Gray",
        brand:"Audi",
        year:2020,
        miles:46190,
        type:"Sedan"
    }

]


let checkedBoxes = 
[
    {
        acura: false, 
        toyota: false, 
        chevrolet: false, 
        nissan: false,
        subaru: false, 
        mercedes: false, 
        audi: false, 
        lexus: false, 
        ford: false, 
        honda: false
    },

    {
        _lt10k: false,
        _10_25k: false,
        _25_40k: false,
        _40_55k: false,
        _55_70k: false,
        _gt70k: false
    },

    {
        SUV: false, 
        sedan: false, 
        truck: false, 
        hatchback: false, 
        coupe: false
    },

    {
        black: false, 
        gray: false, 
        white: false, 
        red: false, 
        purple: false, 
        blue: false, 
        tan: false, 
        green: false, 
        yellow: false, 
        silver: false, 
        orange: false, 
        brown: false
    },

    {
        _2010: false, 
        _2011: false, 
        _2012: false, 
        _2013: false, 
        _2014: false, 
        _2015: false, 
        _2016: false, 
        _2017: false, 
        _2018: false, 
        _2019: false, 
        _2020: false, 
        _2021: false,
        _2022: false
    }
]
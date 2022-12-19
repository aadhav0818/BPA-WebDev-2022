function showCards()
{

    let vehicle_data = 
    [
        {
            "id:": 1,
            "model":"C 300 Sport",
            "price":10538,
            "color":"Red",
            "brand":"Mercedes-Benz",
            "year":2010,
            "miles":112343,
            "type":"Sedan"
        },

        {
            "id:": 2,
            "model":"M3 Base",
            "price":39432,
            "color":"Orange",
            "brand":"BMW",
            "year":2012,
            "miles":49789,
            "type":"Sedan"
        },

        {
            "id": 3,
            "model":"Impreza Premium",
            "price":16950,
            "color":"White",
            "brand":"Subaru",
            "year":2012,
            "miles":54639,
            "type":"Sedan"
        },

        {
            "id": 4,
            "model":"WRX STI",
            "price":19967,
            "color":"Orange",
            "brand":"Subaru",
            "year":2013,
            "miles":68993,
            "type":"Sedan"
        },

        {
            "id": 5,
            "model":"RX 350 BASE",
            "price":17934,
            "color":"Red",
            "brand":"Lexus",
            "year":2013,
            "miles":125789,
            "type":"SUV"
        },

        {
            "id": 6,
            "model":"528i",
            "price":24599,
            "color":"Brown",
            "brand":"BMW",
            "year":2014,
            "miles":52341,
            "type":"Sedan"
        },

        {
            "id": 7,
            "model":"Highlander SE",
            "price":24639,
            "color":"Green",
            "brand":"Toyota",
            "year":2014,
            "miles":112392,
            "type":"SUV"
        },

        {
            "id": 8,
            "model":"R8 4.2",
            "price":81844,
            "color":"Blue",
            "brand":"Audi",
            "year":2015,
            "miles":27988,
            "type":"Coupe"
        },

        {
            "id": 9,
            "model":"RDX",
            "price":18320,
            "color":"Gray",
            "brand":"Acura",
            "year":2015,
            "miles":21321,
            "type":"SUV"
        },

        {
            "id": 10,
            "model":"TLX",
            "price":16632,
            "color":"Gray",
            "brand":"Acura",
            "year":2015,
            "miles":24490,
            "type":"Sedan"
        },

        {
            "id": 11,
            "model":"LX 570 Base",
            "price":36991,
            "color":"Gray",
            "brand":"Lexus",
            "year":2015,
            "miles":127651,
            "type":"SUV"
        },

        {
            "id": 12,
            "model":"RAV4 LE",
            "price":15950,
            "color":"Gray",
            "brand":"Toyota",
            "year":2015,
            "miles":74639,
            "type":"SUV"
        },

        {
            "id": 13,
            "model":"Altima SV",
            "price":16432,
            "color":"Red",
            "brand":"Nissan",
            "year":2015,
            "miles":89678,
            "type":"Sedan"
        },

        {
            "id": 14,
            "model":"Avalon Limited",
            "price":22757,
            "color":"Tan",
            "brand":"Toyota",
            "year":2015,
            "miles":45075,
            "type":"Sedan"
        },

        {
            "id": 15, 
            "model":"Trax LTZ",
            "price":15996,
            "color":"Blue",
            "brand":"Chevrolet",
            "year":2016,
            "miles":78323,
            "type":"SUV"
        },

        {
            "id": 16,
            "model":"GLA 250 4MATIC",
            "price":19452,
            "color":"Grey",
            "brand":"Mercedes-Benz",
            "year":2016,
            "miles":92452,
            "type":"SUV"
        },

        {
            "id": 17,
            "model":"Murano Platinium",
            "price":26750,
            "color":"Orange",
            "brand":"Nissan",
            "year":2016,
            "miles":98639,
            "type":"SUV"
        },

        {
            "id": 18,
            "model":"MDX",
            "price":21998,
            "color":"Purple",
            "brand":"Acura",
            "year":2016,
            "miles":19912,
            "type":"SUV"
        },

        {
            "id": 19,
            "model":"Impala 2LT",
            "price":19510,
            "color":"Red",
            "brand":"Chevrolet",
            "year":2016,
            "miles":54892,
            "type":"Sedan"
        },

        {
            "id": 20,
            "model":"ES 350 Base",
            "price":36789,
            "color":"Silver",
            "brand":"Lexus",
            "year":2016,
            "miles":44721,
            "type":"Sedan"
        },

        {
            "id": 21,
            "model":"Sequoia Limited",
            "price":37400,
            "color":"Tan",
            "brand":"Toyota",
            "year":2016,
            "miles":76347,
            "type":"SUV"
        },

        {
            "id": 22,
            "model":"Q7",
            "price":3998,
            "color":"Gray",
            "brand":"Audi",
            "year":2017,
            "miles":42114,
            "type":"SUV"
        },

        {
            "id": 23,
            "model":"F-150 Limited",
            "price":38998,
            "color":"Red",
            "brand":"Ford",
            "year":2017,
            "miles":19902,
            "type":"Truck"
        },

        {
            "id": 24,
            "model":"Pathfinder SL",
            "price":25996,
            "color":"White",
            "brand":"Nissan",
            "year":2017,
            "miles":56093,
            "type":"SUV"
        },

        {
            "id": 25,
            "model":"Forester Premium 2.5i",
            "price":17958,
            "color":"White",
            "brand":"Subaru",
            "year":2017,
            "miles": 94638,
            "type":"Hatchback"
        },

        {
            "id": 26,
            "model":"Focus",
            "price":16298,
            "color":"Yellow",
            "brand":"Ford",
            "year":2017,
            "miles":70000,
            "type":"Sedan"
        },

        {
            "model":"228i XDrive",
            "price":28750,
            "color":"Blue",
            "brand":"BMW",
            "year":2018,
            "miles":29045,
            "type":"Coupe"
        },

        {
            "model":"Camaro ZL1",
            "price":60661,
            "color":"Blue",
            "brand":"Chevrolet",
            "year":2018,
            "miles":15399,
            "type":"Coupe"
        },

        {
            "model":"Focus SE",
            "price":18998,
            "color":"Blue",
            "brand":"Ford",
            "year":2018,
            "miles":38002,
            "type":"Sedan"
        },

        {
            "model":"4Runner Limited",
            "price":35360,
            "color":"Blue",
            "brand":"Toyota",
            "year":2018,
            "miles":52432,
            "type":"SUV"
        },

        {
            "model":"ILX A-Spec",
            "price":24820,
            "color":"Gray",
            "brand":"Acura",
            "year":2018,
            "miles":41443,
            "type":"Sedan"
        },

        {
            "model":"MDX Sport Hybrid",
            "price":42012,
            "color":"Gray",
            "brand":"Acura",
            "year":2018,
            "miles":48561,
            "type":"SUV"
        },

        {
            "model":"Q5 55 Prestige",
            "price":32998,
            "color":"Gray",
            "brand":"Audi",
            "year":2018,
            "miles":59120,
            "type":"SUV"
         },

         {
            "model":"Volt Premier",
            "price":18559,
            "color":"Gray",
            "brand":"Chevrolet",
            "year":2018,
            "miles":82579,
            "type":"Sedan"
        },

        {
            "model":"S5 Sportback",
            "price":54998,
            "color":"Red",
            "brand":"Audi",
            "year":2018,
            "miles":33215,
            "type":"Coupe"
        },

        {
            "model":"i3 Base",
            "price":32878,
            "color":"Red",
            "brand":"BMW",
            "year":2018,
            "miles":31937,
            "type":"Hatchback"
        },

        {
            "model":"M5 Base",
            "price":71497,
            "color":"Red",
            "brand":"BMW",
            "year":2018,
            "miles":27089,
            "type":"Sedan"
        },

        {
            "model":"WRX Premium",
            "price":27996,
            "color":"Red",
            "brand":"Subaru",
            "year":2018,
            "miles":26093,
            "type":"Sedan"
        },

        {
            "model":"Cruze LS",
            "price":18998,
            "color":"Silver",
            "brand":"Chevrolet",
            "year":2017,
            "miles":16641,
            "type":"Sedan"
        },

        {
            "model":"S 560 4MATIC",
            "price":57657,
            "color":"Silver",
            "brand":"Mercedes-Benz",
            "year":2018,
            "miles":42150,
            "type":"Sedan"
        },

        {
            "model":"A6 2.0T Premium",
            "price":24499,
            "color":"White",
            "brand":"Audi",
            "year":2018,
            "miles":37987,
            "type":"Sedan"
        },

        {
            "model":"S5 3.0T Prestige",
            "price":50485,
            "color":"White",
            "brand":"Audi",
            "year":2019,
            "miles":27625,
            "type":"Sedan"
        },

        





    ]

    let main_inventory = document.getElementById("car-inventory")
    
    for(let i = 0; i < 100; i++)
    {
        main_inventory.innerHTML += 
        `
        <div class="col-sm-12 col-md-6 col-lg-3 " style="padding-top: 3rem;"> 
        <div class="card bg-dark text-white" style="width: 100%;">
            <img src="./image-assets/car-buying.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">2010 Mercedes C 300 Sport</h5>
                <p class="card-text text-white" style="margin-bottom: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                    <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                </svg>
                Price: $
                </p>
                <p class="card-text text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                </svg>  
                Distance: 112343 mi
                </p>
                <a href="#" class="btn btn-outline-success btn-inventory-card">$ | Purchase</a>
            </div>
        </div>
        `

    }
    
}


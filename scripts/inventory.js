
import { vehicle_data } from "./master-data"

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


function showCards()
{

    let main_inventory = document.getElementById("car-inventory")
    
    for(let i = 0; i < vehicle_data.length; i++)
    {
        let rel_make = vehicle_data[i].model.replaceAll(' ', '-')
        let checkpoint = vehicle_data[i].brand.replace("Mercedes-Benz", "Mercedes")
        let rel_filepath = vehicle_data[i].year + "-" + vehicle_data[i].color + "-" + checkpoint + "-" +  rel_make

        let inv_innerHTML = "";
        inv_innerHTML += 
        `
        <div class="col-sm-12 col-md-6 col-lg-3 " style="padding-top: 3rem;"> 
        <div class="card bg-dark text-white id-${vehicle_data[i].id}" style="width: 100%;">
            <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}</h5>
                <p class="card-text text-white" style="margin-bottom: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="hidden bi bi-currency-exchange" viewBox="0 0 16 16">
                    <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                </svg>
                Price: $${vehicle_data[i].price}
                </p>
                <p class="card-text text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                </svg> 
                Distance: ${vehicle_data[i].miles} mi
                <br> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                    <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
                </svg>
                Type: ${vehicle_data[i].type}
                </p>
                `

        if(vehicle_data[i].status === "Purchase")
        {
            inv_innerHTML += 
            `
            <a href="#" class="btn btn-outline-success btn-inventory-purchase" data-bs-toggle="modal" data-bs-target="#ShopModalCenter-${vehicle_data[i].id}">
            <i class="far fa-arrow-alt-circle-up"></i> Purchase
            </a>

            <div class="modal fade" id="InfoModalCenter-${vehicle_data[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title text-white" id="ModalLongTitle">
                    ${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}
                    </h5>
                </div>
                <div class="modal-body text-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9">
                                <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
                            </div>
                            <div class="col-sm-3">
                                Brand: ${vehicle_data[i].brand} <br>
                                Model: ${vehicle_data[i].model} <br>
                                Color: ${vehicle_data[i].color} <br>
                                Price: $${vehicle_data[i].price} <br>
                                Miles: ${vehicle_data[i].miles} mi <br>
                                Type: ${vehicle_data[i].type} <br>
                                Year: ${vehicle_data[i].year} <br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    <a href = "contact-us.html">
                        <button type="button" class="btn btn-outline-secondary">
                            <i class="fa-solid fa-user"></i> Inquire
                        </button>
                    </a>
                </div>
            </div>
            </div>
            </div>

            <a href="#" class="btn btn-outline-info btn-inventory-info" data-bs-toggle="modal" data-bs-target="#InfoModalCenter-${vehicle_data[i].id}">
            <i class="fas fa-poll"></i> Info
            </a>
            <div class="modal fade" id="ShopModalCenter-${vehicle_data[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h5 class="modal-title text-white" id="ModalLongTitle">
                        ${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}
                        </h5>
                    </div>
                    <div class="modal-body text-white">
                        <div class="container">
                            <div class="row">
                                <div class="contact-us-form hidden">
                                <div class="row contact-box">
                                <div class="contact-left">
                                    <h3>Schedule an Appointment</h3>
                                    <form
                                    action="https://formsubmit.co/e4487b747f43624ad7d7c604be4061aa"
                                    method="post"
                                    target="_blank"
                                    >
                                    <div class="input-row">
                                        <div class="input-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Smith"
                                            required
                                        />
                                        </div>
                                        <div class="input-group">
                                        <label>Phone</label>
                                        <input type="text" name="phone" placeholder="+1 469-592-7140" />
                                        </div>
                                    </div>
                                    <div class="input-row">
                                        <div class="input-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="johnsmith@gmail.com"
                                            required
                                        />
                                        </div>
                                        <div class="input-group">
                                        <label>Appointment Time</label>
                                        <input
                                            type="text"
                                            name="time"
                                            class="product-input"
                                            placeholder="5:30 P.M. 2/03/23"
                                        />
                                        </div>
                                    </div>
                                    <label>Comments</label>
                                    <textarea rows="5" placeholder="Your Message" required></textarea>
                                    <button class="btn btn-outline-info submit-btn" type="submit">
                                    <i class="fas fa-user-check"></i> Schedule Appointment
                                    </button>
                                    </form>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        
                    </div>
                </div>
                </div>
            </div>

            
            `

        }
        else if(vehicle_data[i].status === "Soon")
        {
            inv_innerHTML += 
            `
            <a href="#" class="btn btn-outline-warning btn-inventory-soon btn-soon" data-bs-toggle="modal" data-bs-target="#ShopModalCenter-${vehicle_data[i].id}">
            <i class="far fa-calendar-check"></i> Arriving Soon
            </a>

            <div class="modal fade" id="InfoModalCenter-${vehicle_data[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title text-white" id="ModalLongTitle">
                    ${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}
                    </h5>
                </div>
                <div class="modal-body text-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9">
                                <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
                            </div>
                            <div class="col-sm-3">
                                Brand: ${vehicle_data[i].brand} <br>
                                Model: ${vehicle_data[i].model} <br>
                                Color: ${vehicle_data[i].color} <br>
                                Price: $${vehicle_data[i].price} <br>
                                Miles: ${vehicle_data[i].miles} mi <br>
                                Type: ${vehicle_data[i].type} <br>
                                Year: ${vehicle_data[i].year} <br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    <a href = "contact-us.html">
                        <button type="button" class="btn btn-outline-secondary">
                            <i class="fa-solid fa-user"></i> Inquire
                        </button>
                    </a>
                </div>
            </div>
            </div>
            </div>

            
            <a href="#" class="btn btn-outline-info btn-inventory-info" data-bs-toggle="modal" data-bs-target="#InfoModalCenter-${vehicle_data[i].id}">
            <i class="fas fa-poll"></i> Info
            </a>

            <div class="modal fade" id="ShopModalCenter-${vehicle_data[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content bg-dark">
            <div class="modal-header">
                <h5 class="modal-title text-white" id="ModalLongTitle">
                ${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}
                </h5>
            </div>
            <div class="modal-body text-white">
                <div class="container">
                    <div class="row">
                        <div class="contact-us-form hidden">
                        <div class="row contact-box">
                        <div class="contact-left">
                            <h3>We'll contact you when this vehicle arrives</h3>
                            <form
                            action="https://formsubmit.co/e4487b747f43624ad7d7c604be4061aa"
                            method="post"
                            target="_blank"
                            >
                            <div class="input-row">
                                <div class="input-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Smith"
                                    required
                                />
                                </div>
                                <div class="input-group">
                                <label>Phone</label>
                                <input type="text" name="phone" placeholder="+1 469-592-7140" />
                                </div>
                            </div>
                            <div class="input-row">
                                <div class="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="johnsmith@gmail.com"
                                    required
                                />
                                </div>
                                <div class="input-group">
                                <label>Comments</label>
                                <input
                                    type="text"
                                    name="time"
                                    class="product-input"
                                    placeholder="Optional message here"
                                />
                                </div>
                            </div>
                            <button class="btn btn-outline-info submit-btn" type="submit">
                            <i class="far fa-bell"></i> Remind Me
                            </button>
                            </form>
                        </div>
                        </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                
            </div>
        </div>
        </div>
            </div>

            
        `
        }



        inv_innerHTML+= 
        `
            </div>
        </div>
        `

        main_inventory.innerHTML += inv_innerHTML;
    }
    
}

let filtered_inventory = [];
let main_inventory = document.getElementById("car-inventory")

function rebuildCards(group, datatype, name)
{
    group -= 1

    if(!checkedBoxes[group][name]) 
    {
        checkedBoxes[group][name] = true
        let pre_filtered_inventory;

        if(datatype === "price")
        {
            let x_pre_filtered_inventory = vehicle_data.filter(vehicle => 
            {            
                if(name === "_lt10k")
                {
                    if(vehicle.price < 10000 && !filtered_inventory.includes(vehicle))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_10_25k")
                {
                    if((vehicle.price >= 10000 && vehicle.price <= 24999) && !filtered_inventory.includes(vehicle))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_25_40k")
                {
                    if((vehicle.price >= 25000 && vehicle.price <= 39999) && !filtered_inventory.includes(vehicle))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_40_55k")
                {
                    if((vehicle.price >= 40000 && vehicle.price <= 54999) && !filtered_inventory.includes(vehicle))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_55_70k")
                {
                    if((vehicle.price >= 55000 && vehicle.price <= 70000) && !filtered_inventory.includes(vehicle))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_gt70k")
                {
                    if(vehicle.price > 70000 && !filtered_inventory.includes(vehicle))
                    {
                        return vehicle;
                    }
                }
            })
            console.log(x_pre_filtered_inventory)
            pre_filtered_inventory = x_pre_filtered_inventory;
        }

        else
        {
            let xname = name;
            if(datatype === "year")
            {
                xname = name[1] + name[2] + name[3] + name[4];
                xname = parseInt(xname);
            }
            let x_pre_filtered_inventory = vehicle_data.filter(vehicle => 
            { 
                if(!filtered_inventory.includes(vehicle) && vehicle[datatype] === (xname))
                    return vehicle
            })
            pre_filtered_inventory = x_pre_filtered_inventory
        }
       
        for(let iterator = 0; iterator < pre_filtered_inventory.length; iterator++)
        {
            filtered_inventory.push(pre_filtered_inventory[iterator])
        }


    }
    else if(checkedBoxes[group][name]) 
    {
        checkedBoxes[group][name] = false                   
        let pre_filtered_inventory;

        if(datatype === "price")
        {
            let x_pre_filtered_inventory = filtered_inventory.filter(vehicle => 
            {            
                if(name === "_lt10k")
                {
                    if(!(vehicle.price < 10000))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_10_25k")
                {
                    if(!(vehicle.price >= 10000 && vehicle.price <= 24999))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_25_40k")
                {
                    if(!(vehicle.price >= 25000 && vehicle.price <= 39999))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_40_55k")
                {
                    if(!(vehicle.price >= 40000 && vehicle.price <= 54999))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_55_70k")
                {
                    if(!(vehicle.price >= 55000 && vehicle.price <= 70000))
                    {
                        return vehicle;
                    }
                }
                else if(name === "_gt70k")
                {
                    if(!(vehicle.price > 70000))
                    {
                        return vehicle;
                    }
                }
            })
            console.log(x_pre_filtered_inventory)
            pre_filtered_inventory=x_pre_filtered_inventory;
        }

        else
        {
            let xname = name
            if(datatype === "year")
            {
                xname =  name[1] + name[2] + name[3] + name[4];
                xname = parseInt(xname)
            }
            let x_pre_filtered_inventory = filtered_inventory.filter(vehicle => 
            { 
                if(!(vehicle[datatype] === (xname)))
                    return vehicle
            })
            pre_filtered_inventory = x_pre_filtered_inventory;
        }
    
        filtered_inventory = pre_filtered_inventory                                                             
    }

    console.log(filtered_inventory)
    let flag = false;
    for(let i = 0; i < checkedBoxes.length; i++)
    {
        if(!Object.values(checkedBoxes[i]).every((v) => v === false)) {flag = true}
    }

    main_inventory.innerHTML = ""
    if(flag == false) {defaultFill()}
    else {filteredFill()}
    

}

function filteredFill()
{
    for(let i = 0; i < filtered_inventory.length; i++)
    {
        let rel_make = filtered_inventory[i].model.replaceAll(' ', '-')
        let checkpoint = filtered_inventory[i].brand.replace("Mercedes-Benz", "Mercedes")
        let rel_filepath = filtered_inventory[i].year + "-" + filtered_inventory[i].color + "-" + checkpoint + "-" +  rel_make

        let inv_innerHTML = "";
        inv_innerHTML += 
        `
        <div class="col-sm-12 col-md-6 col-lg-3 " style="padding-top: 3rem;"> 
        <div class="card bg-dark text-white id-${filtered_inventory[i].id}" style="width: 100%;">
            <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${filtered_inventory[i].year} ${filtered_inventory[i].color} ${filtered_inventory[i].brand} ${filtered_inventory[i].model}</h5>
                <p class="card-text text-white" style="margin-bottom: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                    <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                </svg>
                Price: $${filtered_inventory[i].price}
                </p>
                <p class="card-text text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                </svg> 
                Distance: ${filtered_inventory[i].miles} mi
                <br> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                    <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
                </svg>
                Type: ${filtered_inventory[i].type}
                </p>
                `

        if(filtered_inventory[i].status === "Purchase")
        {
            inv_innerHTML += 
            `
            <a href="#" class="btn btn-outline-success btn-inventory-purchase" data-bs-toggle="modal" data-bs-target="#ShopModalCenter-${filtered_inventory[i].id}">
            <i class="far fa-arrow-alt-circle-up"></i> Purchase
            </a>
                <div class="modal fade" id="InfoModalCenter-${filtered_inventory[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h5 class="modal-title text-white" id="ModalLongTitle">
                        ${filtered_inventory[i].year} ${filtered_inventory[i].color} ${filtered_inventory[i].brand} ${filtered_inventory[i].model}
                        </h5>
                    </div>
                    <div class="modal-body text-white">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-9">
                                    <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="col-sm-3">
                                    Brand: ${filtered_inventory[i].brand} <br>
                                    Model: ${filtered_inventory[i].model} <br>
                                    Color: ${filtered_inventory[i].color} <br>
                                    Price: $${filtered_inventory[i].price} <br>
                                    Miles: ${filtered_inventory[i].miles} mi <br>
                                    Type: ${filtered_inventory[i].type} <br>
                                    Year: ${filtered_inventory[i].year} <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        <a href = "contact-us.html">
                            <button type="button" class="btn btn-outline-secondary">
                                <i class="fa-solid fa-user"></i> Inquire
                            </button>
                        </a>
                    </div>
                </div>
                </div>
                </div>
            <a href="#" class="btn btn-outline-info btn-inventory-info" data-bs-toggle="modal" data-bs-target="#InfoModalCenter-${filtered_inventory[i].id}">
            <i class="fas fa-poll"></i> Info
            </a>
                <div class="modal fade" id="ShopModalCenter-${filtered_inventory[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content bg-dark">
                        <div class="modal-header">
                            <h5 class="modal-title text-white" id="ModalLongTitle">
                            ${filtered_inventory[i].year} ${filtered_inventory[i].color} ${filtered_inventory[i].brand} ${filtered_inventory[i].model}
                            </h5>
                        </div>
                        <div class="modal-body text-white">
                            <div class="container">
                                <div class="row">
                                    <div class="contact-us-form hidden">
                                    <div class="row contact-box">
                                    <div class="contact-left">
                                        <h3>Schedule an Appointment</h3>
                                        <form
                                        action="https://formsubmit.co/e4487b747f43624ad7d7c604be4061aa"
                                        method="post"
                                        target="_blank"
                                        >
                                        <div class="input-row">
                                            <div class="input-group">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="John Smith"
                                                required
                                            />
                                            </div>
                                            <div class="input-group">
                                            <label>Phone</label>
                                            <input type="text" name="phone" placeholder="+1 469-592-7140" />
                                            </div>
                                        </div>
                                        <div class="input-row">
                                            <div class="input-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="johnsmith@gmail.com"
                                                required
                                            />
                                            </div>
                                            <div class="input-group">
                                            <label>Appointment Time</label>
                                            <input
                                                type="text"
                                                name="time"
                                                class="product-input"
                                                placeholder="5:30 P.M. 2/03/23"
                                            />
                                            </div>
                                        </div>
                                        <label>Comments</label>
                                        <textarea rows="5" placeholder="Your Message" required></textarea>
                                        <button class="btn btn-outline-info submit-btn" type="submit">
                                        <i class="fas fa-user-check"></i> Schedule Appointment
                                        </button>
                                        </form>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                    </div>
                </div>

            
            `

        }
        else if(filtered_inventory[i].status === "Soon")
        {
            inv_innerHTML += 
            `
            <a href="#" class="btn btn-outline-warning btn-inventory-soon btn-soon" data-bs-toggle="modal" data-bs-target="#ShopModalCenter-${filtered_inventory[i].id}">
            <i class="far fa-calendar-check"></i> Arriving Soon
            </a>

            <div class="modal fade" id="InfoModalCenter-${filtered_inventory[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title text-white" id="ModalLongTitle">
                    ${filtered_inventory[i].year} ${filtered_inventory[i].color} ${filtered_inventory[i].brand} ${filtered_inventory[i].model}
                    </h5>
                </div>
                <div class="modal-body text-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9">
                                <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
                            </div>
                            <div class="col-sm-3">
                                Brand: ${filtered_inventory[i].brand} <br>
                                Model: ${filtered_inventory[i].model} <br>
                                Color: ${filtered_inventory[i].color} <br>
                                Price: ${filtered_inventory[i].price} <br>
                                Miles: ${filtered_inventory[i].miles} mi <br>
                                Type: ${filtered_inventory[i].type} <br>
                                Year: ${filtered_inventory[i].year} <br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    <a href = "contact-us.html">
                        <button type="button" class="btn btn-outline-secondary">
                            <i class="fa-solid fa-user"></i> Inquire
                        </button>
                    </a>
                </div>
            </div>
            </div>
            </div>

            
            <a href="#" class="btn btn-outline-info btn-inventory-info" data-bs-toggle="modal" data-bs-target="#InfoModalCenter-${filtered_inventory[i].id}">
            <i class="fas fa-poll"></i> Info
            </a>

            <div class="modal fade" id="ShopModalCenter-${filtered_inventory[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content bg-dark">
            <div class="modal-header">
                <h5 class="modal-title text-white" id="ModalLongTitle">
                ${filtered_inventory[i].year} ${filtered_inventory[i].color} ${filtered_inventory[i].brand} ${filtered_inventory[i].model}
                </h5>
            </div>
            <div class="modal-body text-white">
                <div class="container">
                    <div class="row">
                        <div class="contact-us-form hidden">
                        <div class="row contact-box">
                        <div class="contact-left">
                            <h3>We'll contact you when this vehicle arrives</h3>
                            <form
                            action="https://formsubmit.co/e4487b747f43624ad7d7c604be4061aa"
                            method="post"
                            target="_blank"
                            >
                            <div class="input-row">
                                <div class="input-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Smith"
                                    required
                                />
                                </div>
                                <div class="input-group">
                                <label>Phone</label>
                                <input type="text" name="phone" placeholder="+1 469-592-7140" />
                                </div>
                            </div>
                            <div class="input-row">
                                <div class="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="johnsmith@gmail.com"
                                    required
                                />
                                </div>
                                <div class="input-group">
                                <label>Comments</label>
                                <input
                                    type="text"
                                    name="time"
                                    class="product-input"
                                    placeholder="Optional message here"
                                />
                                </div>
                            </div>
                            <button class="btn btn-outline-info submit-btn" type="submit">
                            <i class="far fa-bell"></i> Remind Me
                            </button>
                            </form>
                        </div>
                        </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                
            </div>
        </div>
        </div>
            </div>

            
        `
        }


    
        inv_innerHTML+= 
        `
            </div>
        </div>
        `

        main_inventory.innerHTML += inv_innerHTML;
    }
}

function defaultFill()
{
    let main_inventory = document.getElementById("car-inventory")
    
    for(let i = 0; i < vehicle_data.length; i++)
    {
        let rel_make = vehicle_data[i].model.replaceAll(' ', '-')
        let checkpoint = vehicle_data[i].brand.replace("Mercedes-Benz", "Mercedes")
        let rel_filepath = vehicle_data[i].year + "-" + vehicle_data[i].color + "-" + checkpoint + "-" +  rel_make

        let inv_innerHTML = "";
        inv_innerHTML += 
        `
        <div class="col-sm-12 col-md-6 col-lg-3 " style="padding-top: 3rem;"> 
        <div class="card bg-dark text-white id-${vehicle_data[i].id}" style="width: 100%;">
            <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}</h5>
                <p class="card-text text-white" style="margin-bottom: 0px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                    <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                </svg>
                Price: $${vehicle_data[i].price}
                </p>
                <p class="card-text text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                </svg> 
                Distance: ${vehicle_data[i].miles} mi
                <br> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                    <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
                </svg>
                Type: ${vehicle_data[i].type}
                </p>
                `

        if(vehicle_data[i].status === "Purchase")
        {
            inv_innerHTML += 
            `
            <a href="#" class="btn btn-outline-success btn-inventory-purchase" data-bs-toggle="modal" data-bs-target="#ShopModalCenter-${vehicle_data[i].id}">
            <i class="far fa-arrow-alt-circle-up"></i> Purchase
            </a>
                <div class="modal fade" id="InfoModalCenter-${vehicle_data[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h5 class="modal-title text-white" id="ModalLongTitle">
                        ${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}
                        </h5>
                    </div>
                    <div class="modal-body text-white">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-9">
                                    <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="col-sm-3">
                                    Brand: ${vehicle_data[i].brand} <br>
                                    Model: ${vehicle_data[i].model} <br>
                                    Color: ${vehicle_data[i].color} <br>
                                    Price: $${vehicle_data[i].price} <br>
                                    Miles: ${vehicle_data[i].miles} mi <br>
                                    Type: ${vehicle_data[i].type} <br>
                                    Year: ${vehicle_data[i].year} <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        <a href = "contact-us.html">
                            <button type="button" class="btn btn-outline-secondary">
                                <i class="fa-solid fa-user"></i> Inquire
                            </button>
                        </a>
                    </div>
                </div>
                </div>
                </div>
            <a href="#" class="btn btn-outline-info btn-inventory-info" data-bs-toggle="modal" data-bs-target="#InfoModalCenter-${vehicle_data[i].id}">
            <i class="fas fa-poll"></i> Info
            </a>
                <div class="modal fade" id="ShopModalCenter-${vehicle_data[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content bg-dark">
                        <div class="modal-header">
                            <h5 class="modal-title text-white" id="ModalLongTitle">
                            ${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}
                            </h5>
                        </div>
                        <div class="modal-body text-white">
                            <div class="container">
                                <div class="row">
                                    <div class="contact-us-form hidden">
                                    <div class="row contact-box">
                                    <div class="contact-left">
                                        <h3>Schedule an Appointment</h3>
                                        <form
                                        action="https://formsubmit.co/e4487b747f43624ad7d7c604be4061aa"
                                        method="post"
                                        target="_blank"
                                        >
                                        <div class="input-row">
                                            <div class="input-group">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="John Smith"
                                                required
                                            />
                                            </div>
                                            <div class="input-group">
                                            <label>Phone</label>
                                            <input type="text" name="phone" placeholder="+1 469-592-7140" />
                                            </div>
                                        </div>
                                        <div class="input-row">
                                            <div class="input-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="johnsmith@gmail.com"
                                                required
                                            />
                                            </div>
                                            <div class="input-group">
                                            <label>Appointment Time</label>
                                            <input
                                                type="text"
                                                name="time"
                                                class="product-input"
                                                placeholder="5:30 P.M. 2/03/23"
                                            />
                                            </div>
                                        </div>
                                        <label>Comments</label>
                                        <textarea rows="5" placeholder="Your Message" required></textarea>
                                        <button class="btn btn-outline-info submit-btn" type="submit">
                                        <i class="fas fa-user-check"></i> Schedule Appointment
                                        </button>
                                        </form>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                    </div>
                </div>

            
            `

        }
        else if(vehicle_data[i].status === "Soon")
        {
            inv_innerHTML += 
            `
            <a href="#" class="btn btn-outline-warning btn-inventory-soon btn-soon" data-bs-toggle="modal" data-bs-target="#ShopModalCenter-${vehicle_data[i].id}">
            <i class="far fa-calendar-check"></i> Arriving Soon
            </a>

            <div class="modal fade" id="InfoModalCenter-${vehicle_data[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title text-white" id="ModalLongTitle">
                    ${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}
                    </h5>
                </div>
                <div class="modal-body text-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9">
                                <img src="./vehicle-images/${rel_filepath}.jpg" class="card-img-top" alt="...">
                            </div>
                            <div class="col-sm-3">
                                Brand: ${vehicle_data[i].brand} <br>
                                Model: ${vehicle_data[i].model} <br>
                                Color: ${vehicle_data[i].color} <br>
                                Price: $${vehicle_data[i].price} <br>
                                Miles: ${vehicle_data[i].miles} mi <br>
                                Type: ${vehicle_data[i].type} <br>
                                Year: ${vehicle_data[i].year} <br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    <a href = "contact-us.html">
                        <button type="button" class="btn btn-outline-secondary">
                            <i class="fa-solid fa-user"></i> Inquire
                        </button>
                    </a>
                </div>
            </div>
            </div>
            </div>

            
            <a href="#" class="btn btn-outline-info btn-inventory-info" data-bs-toggle="modal" data-bs-target="#InfoModalCenter-${vehicle_data[i].id}">
            <i class="fas fa-poll"></i> Info
            </a>

            <div class="modal fade" id="ShopModalCenter-${vehicle_data[i].id}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content bg-dark">
            <div class="modal-header">
                <h5 class="modal-title text-white" id="ModalLongTitle">
                ${vehicle_data[i].year} ${vehicle_data[i].color} ${vehicle_data[i].brand} ${vehicle_data[i].model}
                </h5>
            </div>
            <div class="modal-body text-white">
                <div class="container">
                    <div class="row">
                        <div class="contact-us-form hidden">
                        <div class="row contact-box">
                        <div class="contact-left">
                            <h3>We'll contact you when this vehicle arrives</h3>
                            <form
                            action="https://formsubmit.co/e4487b747f43624ad7d7c604be4061aa"
                            method="post"
                            target="_blank"
                            >
                            <div class="input-row">
                                <div class="input-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Smith"
                                    required
                                />
                                </div>
                                <div class="input-group">
                                <label>Phone</label>
                                <input type="text" name="phone" placeholder="+1 469-592-7140" />
                                </div>
                            </div>
                            <div class="input-row">
                                <div class="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="johnsmith@gmail.com"
                                    required
                                />
                                </div>
                                <div class="input-group">
                                <label>Comments</label>
                                <input
                                    type="text"
                                    name="time"
                                    class="product-input"
                                    placeholder="Optional message here"
                                />
                                </div>
                            </div>
                            <button class="btn btn-outline-info submit-btn" type="submit">
                            <i class="far fa-bell"></i> Remind Me
                            </button>
                            </form>
                        </div>
                        </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                
            </div>
        </div>
        </div>
            </div>

            
        `
        }



        inv_innerHTML+= 
        `
            </div>
        </div>
        `

        main_inventory.innerHTML += inv_innerHTML;
    }
}

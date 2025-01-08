let open_Sidebar = document.getElementById('flex-menu');
let coloe_menu = document.getElementById('close-menu');
let menu = document.getElementById('open-menu');
let expoler_vehicles = document.getElementById('expoler-vehicles')

open_Sidebar.addEventListener('click', function () {
    
    if (menu.classList.contains('open-sidebar-l')) {

        menu.classList.add('open-sidebar-l')

    } else {

        menu.classList.add('open-sidebar-l')

    }

})


let products = [
    {
        id: 1,
        img: './img/cars-img/car13-660x440.jpg.png',
        name: 'Ford Transit – 2021',
        price: '$22,000',
        about: '4.0 D5 PowerPulse Momentum 5dr AW…',
        category: 'notebook',
        quant: 0,
        miles: '2500Miles',
        mator: 'Diesel',
        peredacha: 'Manual'
    },
    {
        id: 2,
        img: './img/cars-img/car13-660x440.jpg.png',
        name: 'New GLC – 2023',
        price: '$95,000',
        about: '4.0 D5 PowerPulse Momentum 5dr AW…',
        category: 'notebook',
        quant: 0,
        miles: '3500Miles',
        mator: 'Petrol',
        peredacha: 'Automatic'
    },
    {
        id: 3,
        img: './img/cars-img/car13-660x440.jpg.png',
        name: 'Audi A6 3.5 – New',
        price: '$58,000',
        about: '3.5 D5 PowerPulse Momentum 5dr AW…',
        category: 'notebook',
        quant: 0,
        miles: '3500Miles',
        mator: 'Petrol',
        peredacha: 'Automatic'
    },
    {
        id: 4,
        img: './img/cars-img/car13-660x440.jpg.png',
        name: 'Corolla Altis – 2023',
        price: '$45,000',
        about: '3.5 D5 PowerPulse Momentum 5dr AW…',
        category: 'notebook',
        quant: 0,
        miles: '1500Miles',
        mator: 'Diesel',
        peredacha: 'CVT'
    },
    {
        id: 5,
        img: './img/cars-img/car13-660x440.jpg.png',
        name: 'Ford Explorer 2023',
        price: '$35,000',
        about: '3.5 D5 PowerPulse Momentum 5dr AW…',
        category: 'notebook',
        quant: 0,
        miles: '1000Miles',
        mator: 'Diesel',
        peredacha: 'CVT'
    },
]

showScreen(products)


function showScreen(products) {
    console.log(products);
    
    expoler_vehicles.innerHTML = ''
    products.map((product) =>{
        return(
            expoler_vehicles.innerHTML += `
             <div class="card">
                    <div style="position: relative;">
                        <img src="${product.img}" alt="Car Image">
                        <div class="badge">Great Price</div>
                        <div class="bookmark">
                            <img width="50" height="50" src="https://img.icons8.com/material-outlined/50/bookmark-ribbon.png" alt="bookmark-ribbon"/>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="title">${product.name}</div>
                        <div class="subtitle">4.0 D5 PowerPulse Momentum 5dr AWD</div>
                        <div class="details">
                            <div>
                                <img width="100" height="100" src="https://img.icons8.com/ios/100/speed--v1.png" alt="speed--v1"/>
                                ${product.miles}
                            </div>
                            <div>
                                <img width="100" height="100" src="https://img.icons8.com/ios/100/gas-station.png" alt="gas-station"/>
                                ${product.mator}
                            </div>
                            <div>
                                <img width="100" height="100" src="https://img.icons8.com/ios/100/automatic.png" alt="automatic"/>
                                ${product.peredacha}
                            </div>
                        </div>
                        <div class="price-container">
                            <div class="price">${product.price}</div>
                            <a href="#" class="view-details"></a>
                        </div>
                    </div>
                </div> 
            `
        )
    })
}
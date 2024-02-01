const items=[
    {
        id:1,
        image:"images/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        qty:0
    },
    {
        id:2,
        image:"images/fruite-item-2.jpg",
        name:"Raspberries",
        price:5.93,
        stock:23,
        qty:0
    },
    {
        id:3,
        image:"images/fruite-item-4.jpg",
        name:"Apricots",
        price:3.97,
        stock:21,
        qty:0
    },
    {
        id:4,
        image:"images/fruite-item-3.jpg",
        name:"Banana",
        price:2.39,
        stock:18,
        qty:0
    },
    {
        id:5,
        image:"images/fruite-item-1.jpg",
        name:"Oranges",
        price:4.96,
        stock:20,
        qty:0
    },
    {
        id:6,
        image:"images/featur-1.jpg",
        name:"Apples",
        price:7.90,
        stock:27,
        qty:0
    },
    {
        id:7,
        image:"images/featur-2.jpg",
        name:"Strawberry",
        price:4.92,
        stock:10,
        qty:0
    },
    {
        id:8,
        image:"images/featur-3.jpg",
        name:"Brocolli",
        price:1.30,
        stock:9,
        qty:0
    },
    {
        id:9,
        image:"images/vegetable-item-1.jpg",
        name:"Tomatoes",
        price:2.99,
        stock:24,
        qty:0
    },
    {
        id:10,
        image:"images/vegetable-item-4.jpg",
        name:"Capsicum",
        price:3.99,
        stock:25,
        qty:0
    },
    {
        id:11,
        image:"images/vegetable-item-5.jpg",
        name:"Potatoes",
        price:5.99,
        stock:20,
        qty:0
    },
    {
        id:12,
        image:"images/vegetable-item-6.jpg",
        name:"Parsely",
        price:3.69,
        stock:21,
        qty:0
    },
    {
        id:13,
        image:"images/bread-item-1.jpg",
        name:"Garlic Bread",
        price:2.57,
        stock:13,
        qty:0
    },
    {
        id:14,
        image:"images/bread-item-2.jpg",
        name:"Roasted Bread",
        price:3.45,
        stock:10,
        qty:0
    },
    {
        id:15,
        image:"images/meat-1.jpg",
        name:"Mixed Salad",
        price:1.57,
        stock:12,
        qty:0
    },
    {
        id:16,
        image:"images/meat-2.jpg",
        name:"Chicken Masala",
        price:3.57,
        stock:15,
        qty:0
    }
]
let productel=document.querySelector('.products')
console.log(productel)
function displayproducts()
{
    items.map((prod)=>{
        productel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayproducts()
let vegesel=document.querySelector('.veges')
console.log(vegesel)
function displayveges()
{
    items.slice(7,12).map((prod)=>{
        vegesel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayveges()
let fruitel=document.querySelector('.fruits')
console.log(fruitel)
function displayfruits()
{
    items.slice(0,7).map((prod)=>{
        fruitel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayfruits()
let breadel=document.querySelector('.bread')
console.log(breadel)
function displaybread()
{
    items.slice(12,14).map((prod)=>{
        breadel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top h-75 w-75" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaybread()
let meatel=document.querySelector('.meat')
console.log(meatel)
function displaymeat()
{
    items.slice(14,16).map((prod)=>{
        meatel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaymeat()

let bestprodel=document.querySelector('.bestprod')
console.log(bestprodel)
function displaybestprod()
{
  items.slice(0,6).map((bestprod)=>
  {
    bestprodel.innerHTML+=`<div class="col">
        <div class="card mb-3 rounded bg-light" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-6">
              <img src=${bestprod.image} class="img-fluid rounded-circle" alt="...">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">${bestprod.name}</h5>
                <p class="card-text">
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star text-secondary"></i>
                </p>
                <p class="card-text"><small class="text-body-secondary">${bestprod.price}</small></p>
                <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                  <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>`
  })
}
displaybestprod()

let bestprodel1=document.querySelector('.bestprods1')
function displaybestprod1()
{
  items.slice(0,4).map((prod)=>{
    bestprodel1.innerHTML+=`
    <div class="col">
          <div class="card">
            <img src=${prod.image} class="card-img-top h-75 w-100" alt="...">
            <div class="card-body text-center">
              <h4 class="card-title">${prod.name}</h4>
              <p class="fs-5">
              <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star text-secondary"></i>
              </p>
              <h5>$${prod.price} / kg</h5>
              <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
              </button>
            </div>
          </div>
        </div>`
})
}
displaybestprod1()
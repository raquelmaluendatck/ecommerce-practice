// =======================================================================
// EVENTO DE PÁGINA VISTA (PAGE_VIEW)
// Descomenta este código para implementar el evento de página vista
// Este evento se dispara cuando el usuario carga la página principal
/*
document.addEventListener('DOMContentLoaded', function() {
dataLayer.push({
  'event': 'page_view',
  'page_title': document.title,
  'page_location': window.location.href,
  'page_path': window.location.pathname,
  'language': navigator.language
});
});
*/
// =======================================================================

let div = document.querySelector("#div");
const phones = [
  {
    brand: "Samsung",
    model: "S20",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 1100,
  },
  {
    brand: "Xiomi",
    model: "note10",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: 1300,
  },
  {
    brand: "Infinix",
    model: "z10",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: 1500,
  },
  {
    brand: "Tecno",
    model: "spark10",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: 1100,
  },
  {
    brand: "Iphone",
    model: "14",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: 1540,
  },
  {
    brand: "Oppo",
    model: "F11",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 1450,
  },
  {
    brand: "Vivo",
    model: "y20",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: 1300,
  },
  {
    brand: "Samsung",
    model: "s50",
    ram: 50,
    rom: 1024,
    camera: "60 megapixel",
    price: 1250,
  },
];
let arr = [];
let cartCount = 0;

function render() {
  let content = "";
  for (let i = 0; i < phones.length; i++) {
    if (i % 2 === 0) {
      content += '<div class="row justify-content-center">';
    }

    content += `
  <div class="col-md-5 mb-4 d-flex align-items-stretch">
      <div class="card mt-4 rounded-sm bg-dark text-white border border-white w-100">
          <div class="card-body d-flex flex-column">
              <h3 class="card-title">Brand : ${phones[i].brand}</h3>
              <h5 class="card-text">Model : ${phones[i].model}</h5>
              <h5 class="card-text">Ram : ${phones[i].ram}</h5>
              <h5 class="card-text">Rom : ${phones[i].rom}</h5>
              <h5 class="card-text">Camera : ${phones[i].camera}</h5>
              <h5 class="card-text">Price : ${phones[i].price}</h5>
              <div class="mt-auto">
                  <button onclick="addTocart(${i})" class="btn btn-primary">Add to Cart</button>
              </div>
          </div>
      </div>
  </div>`;

    if (i % 2 === 1 || i === phones.length - 1) {
      content += "</div>";
    }
  }
  div.innerHTML = content;
}

function addTocart(index) {
  if (arr.includes(phones[index])) {
    phones[index].quantity += 1;
  } else {
    phones[index].quantity = 1;
    arr.push(phones[index]);
  }
  cartCount++;
  }

function checkCart() {
  localStorage.setItem("CartItem", JSON.stringify(arr));
  window.location = "pages/cart.html";
}

window.addTocart = addTocart;
window.checkCart = checkCart;

render();

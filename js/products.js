const promoRow = document.querySelector(".promo__row");

function getPromoCard({
  id,
  name,
  category,
  description,
  price,
  rating,
  discount,
  images,
}) {
  const promoCard = document.createElement("div");
  promoCard.className = "promo__card";
  const promoCardImg = document.createElement("img");
  promoCardImg.className = "promo__card-img";
  promoCardImg.src = images[1];
  const promoCardBottom = document.createElement("div");
  promoCardBottom.className = "promo__card-bottom";
  const promoPrice = document.createElement("div");
  promoPrice.className = "promo__price";
  const promoPriceH3 = document.createElement("h3");
  const promoPriceH4 = document.createElement("h4");
  const promoTitle = document.createElement("div");
  promoTitle.className = "promo__title";
  const promoTitleH4 = document.createElement("h4");
  const promoTitleH41 = document.createElement("h4");
  const promoCardBottomP = document.createElement("p");
  promoCardBottomP.classList = "promo__card-p";
  const promoCardBottomRating = document.createElement("img");
  promoCardBottomRating.src = "../assets/images/rating.svg";
  const promoCardBottomBtn = document.createElement("button");
  const promoCardBottomBtnA = document.createElement("a");
  promoCardBottomBtnA.href = "../pages/korzina.html";
  const promoCardLove = document.createElement("img");
  promoCardLove.className = "promo__card-love";
  promoCardLove.src = "../assets/images/love.svg";
  const promoDiscount = document.createElement("div");
  promoDiscount.className = "promo__card-50";
  const promoDiscountH4 = document.createElement("h4");
  const promoName = document.createElement("h2");

  const promoPriceH3Text = document.createTextNode(price);
  const promoPriceH4Text = document.createTextNode(price);
  const promoTitleH4Text = document.createTextNode("С картой");
  const promoTitleH41Text = document.createTextNode("Обычная");
  const promoCardBottomPText = document.createTextNode(description);
  const promoCardBottomBtnAText = document.createTextNode("В корзину");
  const promoDiscountH4Text = document.createTextNode(discount);
  promoName.textContent = name;

  promoPriceH3.appendChild(promoPriceH3Text);
  promoPriceH4.appendChild(promoPriceH4Text);
  promoTitleH4.appendChild(promoTitleH4Text);
  promoTitleH41.appendChild(promoTitleH41Text);
  promoCardBottomP.appendChild(promoCardBottomPText);
  promoCardBottomBtnA.appendChild(promoCardBottomBtnAText);
  promoDiscountH4.appendChild(promoDiscountH4Text);

  promoPrice.append(promoPriceH3, promoPriceH4);
  promoTitle.append(promoTitleH4, promoTitleH41);
  promoCardBottomBtn.appendChild(promoCardBottomBtnA);
  promoDiscount.appendChild(promoDiscountH4);
  promoCardBottom.append(
    promoName,
    promoPrice,
    promoTitle,
    promoCardBottomP,
    promoCardBottomRating,
    promoCardLove,
    promoDiscount,
    promoCardBottomBtn
  );
  promoCard.append(promoCardImg, promoCardBottom);

  promoRow.append(promoCard);

  if (discount === 0) {
    promoDiscount.style.display = "none";
  }
  promoName.style = `
  color: #F63;
  font-size: 20px;
  `;
  return promoCard;
}

// searhing products

const inputCards = document.querySelector(".input__cards");

let search = "";

function getInputCards({
  id,
  name,
  category,
  description,
  price,
  rating,
  discount,
  images,
}) {
  return `
    <div class="input__card-1">
        <img class="input__card-1-img" src=${images[0]} alt=${name}>
        <h3>${name}</h3>
            <div class="input__rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        <p>${price}</p>
    </div>`;
}

let navInput = document.querySelector(".nav__inputs");

function getProduct() {
  let result = products.filter((pr) => pr.name.toLowerCase().includes(search));
  inputCards.innerHTML = " ";
  if (result.length == products.length) {
    inputCards.style.display = "none";
  } else {
    result.forEach((product) => {
      inputCards.innerHTML += getInputCards(product);
    });
  }
}

getProduct();

if (this.value !== " ") {
  navInput.addEventListener("keyup", function () {
    search = this.value.trim().toLowerCase();
    getProduct();
    inputCards.style.display = "grid";
  });
}

// pagination

let pagination = document.querySelector(".pagination");
let activePage = 1;

function getPagination() {
  let result = products.filter((el) => el.name.includes(search));
  promoRow.innerHTML = ""

  let startProduct = (activePage - 1) * 8;
  let endProduct = activePage * 8;

  products.slice(startProduct, endProduct).map((product) => {
    promoRow.append(getPromoCard(product));
  });
  let pages = Math.ceil(result.length / 8);
  pagination.innerHTML = `<button class="btn1" onclick="getPage('-')""><img src="../assets/images/arrow.svg"></button>`;
  for (i = 1; i <= pages; i++) {
    pagination.innerHTML += `<button class="link ${i === activePage? "active-page":""}" onclick="getPage(${i})">${i}</button>`;
  }
  pagination.innerHTML += `<button class="btn2" onclick="getPage('+')""><img src="../assets/images/arrow.svg"></button>`;
  let prevBtn = document.querySelector('.btn1')
  let nextBtn = document.querySelector('.btn2')
  if(activePage === 1){
    prevBtn.disabled = true;
  }
  if(activePage === pages){
    nextBtn.disabled = true
  }
}

getPagination();

function getPage(page){
    if(page === "+"){
        activePage++;
    }else if(page === "-"){
        activePage--;
    }else{
        activePage = page;
    }
    getPagination();
}
// function activeLink() {
//   for (l of link) {
//     l.classList.remove("active");
//   }
//   event.target.classList.add("active");
//   currentLink = event.target.value;
// }

// function backBtn() {
//   if (currentLink > 1) {
//     for (l of link) {
//       l.classList.remove("active");
//     }
//     currentLink--;
//     link[currentLink - 1].classList.add("active");
//   }
// }

// function nextBtn() {
//   if (currentLink < 5) {
//     for (l of link) {
//       l.classList.remove("active");
//     }
//     currentLink++;
//     link[currentLink - 1].classList.add("active");
//   }
// }

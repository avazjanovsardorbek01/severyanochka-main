//promo cards start

const promoRow = document.querySelector(".promo__row");
const newRow = document.querySelector(".new__row");
const oldRow = document.querySelector(".old__row");

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

let discountProduct = products.filter((el) => el.discount).slice(-4);

discountProduct.forEach((product) => {
  promoRow.append(getPromoCard(product));
});

let newProduct = products.slice(-4);

newProduct.forEach((product) => {
  newRow.append(getPromoCard(product));
});

let ratingProduct = products.toSorted((a, b) => a.rating - b.rating).slice(-4);

ratingProduct.forEach((product) => {
  oldRow.append(getPromoCard(product));
});
//promo cards end

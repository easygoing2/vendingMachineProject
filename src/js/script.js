const products = [
  { name: "Ice 아메리카노", price: 1500, url: "./src/img/imgCoffee01.png" },
  { name: "Hot 아메리카노", price: 1500, url: "./src/img/imgCoffee02.png"  },
  { name: "카페라떼", price: 2000, url: "./src/img/imgCoffee03.png"  },
  { name: "카라멜 마끼아또", price: 2000, url: "./src/img/imgCoffee04.png"  },
  { name: "카페모카", price: 2500, url: "./src/img/imgCoffee05.png"  },
  { name: "돌체라떼", price: 2200, url: "./src/img/imgCoffee06.png"  }
];

const statusText = [
  { txt: "Ice 아메리카노", price: 1500, url: "./src/img/imgCoffee01.png" },
  { txt: "Hot 아메리카노", price: 1500, url: "./src/img/imgCoffee02.png"  },
  { txt: "카페라떼", price: 2000, url: "./src/img/imgCoffee03.png"  },
  { txt: "카라멜 마끼아또", price: 2000, url: "./src/img/imgCoffee04.png"  },
  { txt: "카페모카", price: 2500, url: "./src/img/imgCoffee05.png"  },
  { txt: "돌체라떼", price: 2200, url: "./src/img/imgCoffee06.png"  }
];

// 상품 뿌려줌
let productWraps = document.querySelector('.productWrap');
productWraps.innerHTML = "";

for (let i = 0; i < products.length; i++) {
  let product = products[i];
  console.log("제품명 : ", product.name);
  console.log("제품가격 : ", product.price);
  console.log("제품이미지 : ", product.url);
  productWraps.innerHTML +=
  `<div class="product btn--product" onclick="productBtn(this)">
  <img class="productImg" src="` + product.url + `" alt="상품이미지">
  <p class="productName">` + product.name + `</p>
  <div class="productPrice">` + product.price + `</div>
  </div>`  
};


// 상품 클릭시 아래 선택상품에 제품명, 가격 노출.
// 이미 뿌려진 상품들이 클릭되면 onclick="productBtn(this)" 함수 실행됨.
productChioceName.innerHTML = "";
productChiocePrice.innerHTML = "";

function productBtn(element) {
  if (productInsertPrice.innerHTML == "0") {
    infoTxt.innerHTML = "금액을 먼저 투입해주세요."
  } else {
    proImg = element.querySelector('.productImg').src;
    proName = element.querySelector('.productName').innerHTML;
    proPrice = element.querySelector('.productPrice').innerHTML;
    console.log("this :", proImg, proName, proPrice);
    productChioceImg.src = proImg;
    productChioceName.innerHTML = proName;
    productChiocePrice.innerHTML = proPrice;
    console.log(productInsertPrice.innerHTML);
  }
};

// 투입금액 버튼 클릭 시 금액합산해서 보여줌.
let sum = 0;
let proPrice = productChiocePrice.innerHTML;
let proName = productChioceName.innerHTML;


function calc(button) {
  if(button) {
    sum+= parseInt(button.value);
  }
	else {
    sum-= button.value;
  }
  productInsertPrice.innerHTML = sum;
  infoTxt.innerHTML = "상품을 선택해 주세요."
}
//parseInt를 안하면 값이 더하기가 안되고 옆에 붙여넣기가 됨
//this는 이 버튼을 클릭했을 때 참조값
//function()에 들어갈 변수이름은 아무거나

// 초기화 버튼
function reset() {
  sum = 0;
  productInsertPrice.innerHTML = sum;
}

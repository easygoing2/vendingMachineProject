// 제품
const products = [
  { name: "Ice 아메리카노", price: 1500, url: "./src/img/imgCoffee01.png" },
  { name: "Hot 아메리카노", price: 1500, url: "./src/img/imgCoffee02.png"  },
  { name: "카페라떼", price: 2000, url: "./src/img/imgCoffee03.png"  },
  { name: "카라멜 마끼아또", price: 2000, url: "./src/img/imgCoffee04.png"  },
  { name: "카페모카", price: 2500, url: "./src/img/imgCoffee05.png"  },
  { name: "아이스티", price: 3500, url: "./src/img/imgCoffee06.png"  },
  { name: "말차라떼", price: 4000, url: "./src/img/imgCoffee07.png"  },
  { name: "아포카토", price: 2200, url: "./src/img/imgCoffee08.png"  }
];


const products_sample = {
  version: 3.1,

  data: [
  { name: "Ice 아메리카노", price: 1500, url: "./src/img/imgCoffee01.png" },
  { name: "Hot 아메리카노", price: 1500, url: "./src/img/imgCoffee02.png"  },
  { name: "카페라떼", price: 2000, url: "./src/img/imgCoffee03.png"  },
  { name: "카라멜 마끼아또", price: 2000, url: "./src/img/imgCoffee04.png"  },
  { name: "카페모카", price: 2500, url: "./src/img/imgCoffee05.png"  },
  { name: "아이스티", price: 3500, url: "./src/img/imgCoffee06.png"  },
  { name: "말차라떼", price: 4000, url: "./src/img/imgCoffee07.png"  },
  { name: "아포카토", price: 2200, url: "./src/img/imgCoffee08.png"  }

// 안내 메세지
const infoMsgs = [
  { massage: "금액을 투입해 주세요."},
  { massage: "금액을 더 넣어주세요."},
  { massage: "거스름돈은 0원입니다."},
  { massage: "제품을 수령해주세요."}
];

const CashType = [
  50000, 10000, 5000, 1000, 500, 100
];

const UserPrice = {
  total: 0,
  inputCash: function(price) {
    this.total += price;
  },
  clear: function() {

  }
};

// 투입금액 영역 
var sum = 0;

function printProduct() {
  // [반복문] 상품 뿌려줌
  productWrap.innerHTML = ""; // 상품 영역 초기화
  
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log("제품명 : ", product.name);
    console.log("제품가격 : ", product.price);
    console.log("제품이미지 : ", product.url);
    productWrap.innerHTML +=
    `<div class="product btn--product" onclick="choiceProductBtn(this, ` + i + `)">
    <img class="productImg" src="` + product.url + `" alt="상품이미지">
    <p class="productName">` + product.name + `</p>
    <div class="productPrice">` + product.price + `</div>
    </div>`  
  };

  validProduct();
  printTotalPrice();
}

function validProduct() {
  let list = productWrap.querySelectorAll(".product");
  for (let i = 0; i < list.length; i++) {
    if (products[i].price > UserPrice.total) {
      list[i].classList.add("disabledButton");
    } else {
      list[i].classList.remove("disabledButton");
    }
  }
}

function printStatusMsg() {
  // [반복문] 상태메세지 뿌려줌
  statusMsg.innerHTML = "";  // 메세지 영역 초기화
  for (let i = 0; i < infoMsgs.length; i++) {
    statusMsg.innerHTML +=
    `<p class="disabledButton">` + infoMsgs[i].massage + `</p>`
  };
}


function selectStatusMsg(x) {
  let list = statusMsg.querySelectorAll("p");
  for (let i = 0; i < list.length; i++) {
    if (i == x) {
      list[i].classList.add("on");
    } else {
      list[i].classList.remove("on");
    }
  }
}

function printTotalPrice() {
  console.log(UserPrice);
  productInsertPrice.innerHTML = UserPrice.total; // 투입금액 영역에 텍스트로 뿌려줌
  
}

// 투입 금액 버튼 클릭 
function insertMoney(value) {
  //if (value) {
    //calcMoney(value)  // 투입금액 더하기 함수
    UserPrice.inputCash(value);
    console.log("금액이" + value + "투입됩니다.");
    console.log("투입된 총 금액이" + UserPrice.total + "원 입니다.");
  //} else {

  //}
  //productActive();  // 제품 활성화 함수
  validProduct();
  printTotalPrice();
  if (value < 0) {
    alert("방출~ " + -value);
  }
};


// 투입금액 더하기 연산 함수
function calcMoney(element) {
  //parseInt를 안하면 값이 더하기가 안되고 옆에 붙여넣기가 됨
  sum+= parseInt(element.value);
};

// 상품 클릭 Event. 
function choiceProductBtn(o, i) {
  console.log(products[i].price);

  UserPrice.inputCash(-products[i].price);

  validProduct();
  printTotalPrice();


return;
  if (productInsertPrice.innerHTML == "0") {
    // 투입금액이 0원이면 안내 메세지 노출
  } 
  else if (productInsertPrice.innerHTML !== "0") {
    // 투입금액이 있다면 안내 메세지 노출
    let purchaseProducts = document.querySelector('.purchaseProduct > div');
    purchaseProducts.classList.replace("inside", "comeOut");
  } 
  else if (productInsertPrice == productChiocePrice) {
    alert("투입금액과 상품 가격이 일치합니다.");
    // 제품 나옴, 메세지 노출.
  }
};

// 투입 금액 초기화 버튼
function resetMoney() {
  sum = 0;
  productInsertPrice.innerHTML = sum;

  printTotalPrice();
}

window.onload = function () {
  printProduct();
  printStatusMsg();
};
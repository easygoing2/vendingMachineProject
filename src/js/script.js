// 제품
const products = [
  { name: "Ice 아메리카노", price: 1500, url: "./src/img/imgCoffee01.png" },
  { name: "Hot 아메리카노", price: 1500, url: "./src/img/imgCoffee02.png"  },
  { name: "카페라떼", price: 2000, url: "./src/img/imgCoffee03.png"  },
  { name: "카라멜 마끼아또", price: 2000, url: "./src/img/imgCoffee04.png"  },
  { name: "카페모카", price: 2500, url: "./src/img/imgCoffee05.png"  },
  { name: "아이스티", price: 3500, url: "./src/img/imgCoffee06.png"  },
  { name: "그린티라떼", price: 4000, url: "./src/img/imgCoffee07.png"  },
  { name: "돌체라떼", price: 2200, url: "./src/img/imgCoffee08.png"  }
];

// 안내 메세지
const infoMsgs = [
  { massage: "금액을 투입해 주세요."},
  { massage: "금액을 더 넣어주세요."},
  { massage: "거스름돈은 0원입니다."},
  { massage: "제품을 수령해주세요."}
];


// [반복문] 상품 뿌려줌
productWrap.innerHTML = ""; // 상품 영역 초기화

for (let i = 0; i < products.length; i++) {
  let product = products[i];
  console.log("제품명 : ", product.name);
  console.log("제품가격 : ", product.price);
  console.log("제품이미지 : ", product.url);
  productWrap.innerHTML +=
  `<div class="product btn--product disabledButton" onclick="choiceProductBtn(this)">
  <img class="productImg" src="` + product.url + `" alt="상품이미지">
  <p class="productName">` + product.name + `</p>
  <div class="productPrice">` + product.price + `</div>
  </div>`  
};


// [반복문] 상태메세지 뿌려줌
stateMsg.innerHTML = "";  // 메세지 영역 초기화

for (let i = 0; i < infoMsgs.length; i++) {
  let infoMsg = infoMsgs[i];
  stateMsg.innerHTML +=
  `<p>` + infoMsg.massage + `</p>`
};


// 투입금액 영역 초기화 
let sum = 0;
// 투입 금액 버튼 클릭 
function insertMoney(element) {
  if (element) {
    calcMoney(element)
    console.log("금액이" + element.value + "투입됩니다.");
    console.log("투입된 총 금액이" + sum + "원 입니다.");
  }
  productInsertPrice.innerHTML = sum; // 투입금액 영역에 텍스트로 뿌려줌
  let products = document.querySelectorAll('.product'); // 모든 상품 변수에 담아줌.
  for (let i = 0; i < products.length; i++) {
    products[i].classList.remove('disabledButton');  // disabledButton 클래스 삭제하여 제품 활성화
  }
};


// 투입금액 더하기 연산
function calcMoney(element) {
  //parseInt를 안하면 값이 더하기가 안되고 옆에 붙여넣기가 됨
  sum+= parseInt(element.value);
}


// 상품 클릭 Event. 
function choiceProductBtn() {
  if (productInsertPrice.innerHTML == "0") {
    // 투입금액이 0원이면 안내 메세지 노출
  } 
  else if (productInsertPrice.innerHTML !== "0") {
    // 투입금액이 0원이면 안내 메세지 노출
  } 
  else if (productInsertPrice == productChiocePrice) {
    alert("투입금액과 상품 가격이 일치합니다.");
    // 투입 금액이 상품가격과 일치하면 구매하기 버튼 활성화 & 메세지 수정.
  }
};


// 투입 금액 초기화 버튼
function resetMoney() {
  sum = 0;
  productInsertPrice.innerHTML = sum;

}

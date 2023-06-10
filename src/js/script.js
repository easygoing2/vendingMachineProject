// 제품
const products = {
  version: 1.1,
  data: [
    { name: "Ice 아메리카노", price: 1500, url: "./src/img/imgCoffee01.png",url2: "./src/img/imgCoffee01-1.png" },
    { name: "Hot 아메리카노", price: 1500, url: "./src/img/imgCoffee02.png",url2: "./src/img/imgCoffee02-1.png"  },
    { name: "카페라떼", price: 2000, url: "./src/img/imgCoffee03.png",url2: "./src/img/imgCoffee03-1.png"  },
    { name: "카라멜 마끼아또", price: 2000, url: "./src/img/imgCoffee04.png",url2: "./src/img/imgCoffee04-1.png"  },
    { name: "카페모카", price: 2500, url: "./src/img/imgCoffee05.png",url2: "./src/img/imgCoffee05-1.png"  },
    { name: "아이스티", price: 3500, url: "./src/img/imgCoffee06.png",url2: "./src/img/imgCoffee06-1.png"  },
    { name: "말차라떼", price: 4000, url: "./src/img/imgCoffee07.png",url2: "./src/img/imgCoffee07-1.png"  },
    { name: "아포카토", price: 2200, url: "./src/img/imgCoffee08.png",url2: "./src/img/imgCoffee08-1.png"  }
  ]};

// 아래 함수들의 연산작업들(투입금액 - 상품금액)이 UserPrice.total에 적용됨.
const UserPrice = {
  total: 0,
  inputCash: function(price) {  // 투입금액 연산 함수.
    this.total += price;
  }
};

var currentIndex = 0;

// // 구매 시점 날짜 노출 YYYY-MM-DD ********************************************TODO
// const BuyDate = { // 2000-01-02 12:34:56
//   date: "YYYY-MM-DD",
//   today: new Date(),
//   year: new Date().getFullYear(),
//   month: ('0' + (new Date().getMonth() + 1)).slice(-2),
//   day: ('0' + new Date().getDate()).slice(-2),
//   sec: ('0' + new Date().getSeconds()).slice(-2),
//   inputDate: function(year, month, day, sec) {
//     this.date = year + '-' + month + '-' + day + ' ' + sec;
//   },
//   inputDates: function() {
//     this.date = this.year + '-' + this.month + '-' + this.day + ' ' + this.sec;
//   }
// }
// BuyDate.inputDate(BuyDate.year, BuyDate.month, BuyDate.day, BuyDate.sec);
// console.log(BuyDate.date);

function getDateTime() {
  let today = new Date();
  return today.getFullYear() + "-" +
  ('0' + (today.getMonth() + 1)).slice(-2) + "-" +
  ('0' + today.getDate()).slice(-2);
}

function printProduct() {
  // [반복문] 상품 뿌려줌
  productWrap.innerHTML = ""; // 상품 영역 초기화

  for (let i = 0; i < products.data.length; i++) {
    let product = products.data[i];
    console.log("제품명 : ", product.name);
    console.log("제품가격 : ", product.price);
    console.log("제품이미지 : ", product.url);
    productWrap.innerHTML +=
    `<div class="product btn--product" onclick="choiceProductBtn(this, ` + i + `)">
      <img class="productImg" src="` + product.url + `" alt="상품이미지">
      <p class="productName">` + product.name + `</p>
      <div class="productPrice">` + product.price.toLocaleString() + `원` + `</div>
    </div>`  
  };
  validProduct(); // 투입가격과 상품 가격을 비교하여 해당 상품 노출 함수.
  printTotalPrice();  // 사용자 금액을 투입금액 영역에 넣어주는 함수.
};

function validProduct() { // [반복문] 뿌려진 상품들과 투입금액을 비교해서 투입금액보다 금액이 낮은 상품들 활성화시키는 함수.
  let list = productWrap.querySelectorAll(".product");  // 뿌려진 상품들 list변수에 담기.
  for (let i = 0; i < list.length; i++) { // 상품들 반복문으로 loop 돌려서
    if (products.data[i].price > UserPrice.total) {  // 상단 UserPrice객체의 total금액(투입금액)보다 product[i].price(상품가격)이 크다면
      list[i].classList.add("disabledButton");  // 상품들을 노출시키지 않음.
    } else {
      list[i].classList.remove("disabledButton"); // 상품가격보다 투입한 금액이 크다면 해당 상품들을 노출시킴.
    }
  }
};

function printTotalPrice() {  // 투입금액 & 계산금액을 productInsertPrice영역에 innerHTML해주는 함수.
  console.log("UserPrice(사용자금액) : ", UserPrice);
  productInsertPrice.innerHTML = UserPrice.total.toLocaleString(); // 금액(원)영역에 텍스트로 뿌려줌
}

// 투입 금액 클릭 이벤트
function insertMoney(value) {
  UserPrice.inputCash(value); // 클릭한 투입금액을 UserPrice.inputCash 객체 함수에서 연산함. 연산한 금액은 total객체에 저정됨.
  console.log("금액이" + value + "투입됩니다.");
  console.log("투입된 총 금액이" + UserPrice.total + "원 입니다.");
  validProduct(); // 투입된 금액과 상품금액을 비교하여 해당 제품 활성화 함수.
  printTotalPrice();  // 금액을 상단에 보여주는 함수.
  if (value < 0) {  // 초기화버튼에 인자값 value를 html에서 마이너스값으로 넘어오기 때문에 무조건 방출 alert 띄움.
    alert("방출~ " + -value);
    console.log("방출~ ", -value);
  }
};

// 상품 클릭 Event
function choiceProductBtn(o, i) {
  console.log("클릭한 상품의 가격 products[i].price : ", products.data[i].price); // 클릭한 상품의 가격
  console.log("클릭한 상품의 가격 products[i].price : ", products.data[i].url2); // 클릭한 상품의 가격
  console.log("클릭한 상품 o : ", o); // 클릭한 상품 <div ...
  UserPrice.inputCash(-products.data[i].price);  // inputCash 계산함수에 인자값으로 상단의 클릭한 상품가격이 마이너스값으로 들어감. 투입된 가격에 상품가격을 뺀 금액이 아래 함수들을 거치면서 금액(원)영역에 뿌려짐.
  validProduct();
  printTotalPrice();
  outputProduct(i);
};

// 상품 출력
function outputProduct(i) {
  let purchaseProductIn = document.querySelector('.purchaseProduct > div');
  purchaseProductIn.classList.remove("show");
  setTimeout(()=>{
    purchaseProductIn.style.backgroundImage = "url('" + products.data[i].url2 + "')";
    purchaseProductIn.classList.add("show");
    setTimeout(()=>{
    //  listUpBoard(i); // 보드에 리스트업.
    }, 1000);
    listUpBoard(i); // 보드에 리스트업.
  });
}

// 리스트영역에 구매한 내역 노출 함수.
function listUpBoard(i) {
  let buyLists = buyList.querySelector(".listWrap > ul");
  console.log("buyLists : ", buyLists); // <li></li>
  console.log("i : ", products.data[i]); // 해당 [i]인덱스의 정보
  buyLists.innerHTML += 
  `<li class="infoList">
    <p>` + ++currentIndex + `</p>
    <p>` + products.data[i].name + `</p>
    <p>` + getDateTime() + `
  </li>
  ` 
};

// 초기화 기능. (상품방출, 금액방출, 리스트리셋)
function resetAll() {
  document.querySelector('.purchaseProduct>div').classList.remove("show");
  insertMoney(-UserPrice.total); // 금액방출
  let buyLists = buyList.querySelector(".listWrap > ul");
  buyLists.innerHTML = ``; 
  currentIndex = 0;
}

// 순차적으로 자동실행
window.onload = function () {
  printProduct();
  // printStatusMsg();
};
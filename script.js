const tipContainer = document.querySelector(".tip-container");

const bill = document.querySelector(".bill");
const noOfPeople = document.querySelector(".share-bill");
const select = document.querySelector("#select");

const tipContent = document.querySelector(".tip-content");
const btn = document.querySelector(".btn");

tipContainer.addEventListener("submit", function (e) {
  e.preventDefault();
  const selects = select.value;
  let tipValue;
  if (selects === ".1") {
    tipValue = "10";
  } else if (selects === ".2") {
    tipValue = "20";
  } else if (selects === ".02") {
    tipValue = "2";
  } else {
    tipValue = "You do not  have chosen tip Value";
  }
  console.log(`tipvalue is ${tipValue}`);

  const totalAmount = bill.value;
  const eachPersonAmount = noOfPeople.value;

  const eachPersonBill = (totalAmount / eachPersonAmount).toFixed(2);

  if (bill.value === "" || noOfPeople.value === " ") {
    alert("please enter amount");
    tipContent.style.display = "none";
  }
  const newEls = document.createElement("div");

  newEls.classList.add("newEl");
  newEls.innerHTML = `<h3>Tip Amount -${tipValue}%</h3>
<h3>Total Amount- ${totalAmount}</h3>
<h3>Each person Owes- ${eachPersonBill}</h3>`;

  tipContent.append(newEls);

  bill.value = "";
  noOfPeople.value = "";
});

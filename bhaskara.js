let $form = document.querySelector("form");
let $a = document.querySelector("#a");
let $b = document.querySelector("#b");
let $c = document.querySelector("#c");
let $x1 = document.querySelector("#x1");
let $x2 = document.querySelector("#x2");

function bhaskara() {
    let a = $a.value;
    let b = $b.value;
    let c = $c.value;

    let delta = b * b - 4 * a * c;

  if (!a || !b || !c) {
    createAlert("Ops! Você precisa inserir os valores de a, b e c para obter a resposta");
  } else if (a == 0) {
    createAlert("O valor de <strong>a</strong>, deve ser diferente de 0");
  } else if (delta < 0) {
    createAlert("Sem raízes reais");
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    $x1.value = x1;
    $x2.value = x2;
  }
}

function createAlert(msg) {
  document
    .querySelector("body")
    .insertAdjacentHTML("beforebegin", `<div class='alert'>${msg}</div>`);

  setTimeout(function () {
    deleteAlert();
  }, 3000);
}

function deleteAlert() {
    let list = document.querySelectorAll(".alert");
  for (let item of list) {
    item.remove();
  }
}

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  bhaskara();
});



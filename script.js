const alertText = () => {
  alert("hi");
  console.log(e);
};

const inputText = document.getElementById("inp");
inputText.addEventListener("keyup", (e) => {
  console.log(e);
  const response = document.getElementById("response");
  response.innerHTML = e.target.value;
});
let colorCh = document.getElementById("btn");
colorCh.addEventListener("click", (e) => {
  document.body.style.backgroundColor = `rgb(${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
});



const progessAction = (e) => {
  const progree = e.target.checked;
  const progressFill = document.getElementsByClassName("progress-Fill");
  console.log(progressFill);
  const loading = progressFill[0].style.width;
  const cal = Number(loading.substring(0, loading.length - 1));
  console.log(cal);
  if (progree) {
    progressFill[0].style.width = `${cal + 25}%`;
  } else {
    progressFill[0].style.width = `${cal - 25}%`;
  }
};

let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");
let checkbox4 = document.getElementById("checkbox4");

checkbox1.addEventListener("click", progessAction);
checkbox2.addEventListener("click", progessAction);
checkbox3.addEventListener("click", progessAction);
checkbox4.addEventListener("click", progessAction);

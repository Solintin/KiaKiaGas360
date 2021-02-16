const year = document.getElementById("year");
const menuList = document.querySelector(".menu-list ")
const menuBar = document.querySelector(".menu-bar i")
const date = new Date();
year.innerHTML = date.getFullYear();

menuBar.addEventListener("click", ()=>{
  menuList.classList.toggle("open")
  menuBar.classList.toggle("open")
})


const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

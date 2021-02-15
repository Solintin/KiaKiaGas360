const year = document.getElementById("year");
const menuList = document.querySelector(".menu-list ");
const menuBar = document.querySelector(".menu-bar i");
const date = new Date();
year.innerHTML = date.getFullYear();

menuBar.addEventListener("click", () => {
  menuList.classList.toggle("open");
  menuBar.classList.toggle("open");
});

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

const support = document.querySelector(".support");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
support.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

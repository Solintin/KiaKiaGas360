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

const selectOption = document.querySelector("#dropdown");
const blog = document.querySelector(".blog");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
blog.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id || selectOption) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      console.log(article);
      article.classList.remove("active");
    });
    if (id) {
      const element = document.getElementById(id);
      element.classList.add("active");
    } else {
      const element2 = document.getElementById(selectOption.value);
      element2.classList.add("active");
    }
  }
});

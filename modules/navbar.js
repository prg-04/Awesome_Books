const navbar = () => {
  document.getElementById("list-link").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#books").style.display = "block";
    document.getElementById("awesome_book").style.display = "block";
    document.querySelector("#form").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector("#add_book").style.display = "none";
    document.querySelector("#contact").style.display = "none";
  });

  document
    .getElementById("add-book-link")
    .addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#awesome_book").style.display = "none";
      document.querySelector("#add_book").style.display = "block";
      document.querySelector("#form").style.display = "flex";
      document.querySelector("#books").style.display = "none";
      document.querySelector("#contact").style.display = "none";
    });

  document.getElementById("contact-link").addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("#contact").style.display = "block";
    document.querySelector("#books").style.display = "none";
    document.getElementById("awesome_book").style.display = "none";
    document.querySelector("#form").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector("#add_book").style.display = "none";
  });

  document.querySelector("svg").addEventListener("click", (event) => {
    document.querySelector(".navlinks").classList.add('open');
  });
};

export default navbar;

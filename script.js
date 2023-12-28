const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
      if (
        !e.composedPath().includes(menuBtn) &&
        !e.composedPath().includes(navbar)
      ) {
        navbar.classList.remove("active");
      }
    });
  });
  //resim bölümü
  function openModal(imageUrl) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = imageUrl;
  }

  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  // resim bölüümü
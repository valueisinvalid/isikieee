fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerContent').innerHTML = data;
    });
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
  //-------------------
  //Her şey başlıyor animasyon
  document.addEventListener("DOMContentLoaded", function() {
    const letters = "abcçdefgğhıijklmnoöprsştuüvyz";
    const targetElement = document.getElementById("anabaslik2");
    const originalText = targetElement.innerText.trim();
    let repetition = 0;
    const interval = setInterval(() => {
        targetElement.innerText = originalText
            .split("")
            .map((char, index) => {
                if (char.trim() === "") {
                    return char; 
                }
                if (index < repetition) {
                    return targetElement.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 29)];
            })
            .join("");

        if (repetition >= targetElement.dataset.value.length) {
            clearInterval(interval);
        }

        repetition += 1 ;
    }, 30);
});
//------
//Işık Ieee Animasyon
document.addEventListener("DOMContentLoaded", function() {
  const letters = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
  const targetElement = document.getElementById("anabaslik1")
  const originalText = targetElement.innerText.trim();
  let repetition = 0;
  const interval = setInterval(() => {
      targetElement.innerText = originalText
          .split("")
          .map((char, index) => {
              if (char.trim() === "") {
                  return char; 
              }
              if (index < repetition) {
                  return targetElement.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 29)];
          })
          .join("");

      if (repetition >= targetElement.dataset.value.length) {
          clearInterval(interval);
      }

      repetition += 1 / 3;
  }, 30);
});

//KAR


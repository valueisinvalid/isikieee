//Header Yönlendirmesi
fetch('/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerContent').innerHTML = data;
    });
//Footer Yönlendirmesi
fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerContent').innerHTML = data;
    });
//Kar animasyonu
Date.now ||
(Date.now = function () {
  return new Date().getTime();
}),
(function () {
  "use strict";
  for (
    var t = ["webkit", "moz"], e = 0;
    e < t.length && !window.requestAnimationFrame;
    ++e
  ) {
    var i = t[e];
    (window.requestAnimationFrame =
      window[i + "RequestAnimationFrame"]),
      (window.cancelAnimationFrame =
        window[i + "CancelAnimationFrame"] ||
        window[i + "CancelRequestAnimationFrame"]);
  }
  if (
    /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) ||
    !window.requestAnimationFrame ||
    !window.cancelAnimationFrame
  ) {
    var s = 0;
    (window.requestAnimationFrame = function (t) {
      var e = Date.now(),
        i = Math.max(s + 16, e);
      return setTimeout(function () {
        t((s = i));
      }, i - e);
    }),
      (window.cancelAnimationFrame = clearTimeout);
  }
})(),
(function (t) {
  (t.snowfall = function (e, i) {
    function s(s, n, a, h, r) {
      (this.id = r),
        (this.x = s),
        (this.y = n),
        (this.size = a),
        (this.speed = h),
        (this.step = 0),
        (this.stepSize = o(1, 10) / 100),
        i.collection && (this.target = w[o(0, w.length - 1)]);
      var l = null;
      i.image
        ? ((l = t(document.createElement("img"))), (l[0].src = i.image))
        : ((l = t(document.createElement("div"))),
          l.css({ background: i.flakeColor })),
        l
          .attr({ class: "snowfall-flakes", id: "flake-" + this.id })
          .css({
            width: this.size,
            height: this.size,
            position: i.flakePosition,
            top: this.y,
            left: this.x,
            fontSize: 0,
            zIndex: i.flakeIndex,
          }),
        t(e).get(0).tagName === t(document).get(0).tagName
          ? (t("body").append(l), (e = t("body")))
          : t(e).append(l),
        (this.element = document.getElementById("flake-" + this.id)),
        (this.update = function () {
          if (
            ((this.y += this.speed),
            this.y > d - (this.size + 6) && this.reset(),
            (this.element.style.top = this.y + "px"),
            (this.element.style.left = this.x + "px"),
            (this.step += this.stepSize),
            (this.x +=
              S === !1 ? Math.cos(this.step) : S + Math.cos(this.step)),
            i.collection &&
              this.x > this.target.x &&
              this.x < this.target.width + this.target.x &&
              this.y > this.target.y &&
              this.y < this.target.height + this.target.y)
          ) {
            var t = this.target.element.getContext("2d"),
              e = this.x - this.target.x,
              s = this.y - this.target.y,
              n = this.target.colData;
            if (
              void 0 !==
                n[parseInt(e)][parseInt(s + this.speed + this.size)] ||
              s + this.speed + this.size > this.target.height
            )
              if (s + this.speed + this.size > this.target.height) {
                for (
                  ;
                  s + this.speed + this.size > this.target.height &&
                  this.speed > 0;

                )
                  this.speed *= 0.5;
                (t.fillStyle = "#fff"),
                  void 0 ==
                  n[parseInt(e)][parseInt(s + this.speed + this.size)]
                    ? ((n[parseInt(e)][
                        parseInt(s + this.speed + this.size)
                      ] = 1),
                      t.fillRect(
                        e,
                        s + this.speed + this.size,
                        this.size,
                        this.size
                      ))
                    : ((n[parseInt(e)][parseInt(s + this.speed)] = 1),
                      t.fillRect(
                        e,
                        s + this.speed,
                        this.size,
                        this.size
                      )),
                  this.reset();
              } else
                (this.speed = 1),
                  (this.stepSize = 0),
                  parseInt(e) + 1 < this.target.width &&
                  void 0 == n[parseInt(e) + 1][parseInt(s) + 1]
                    ? this.x++
                    : parseInt(e) - 1 > 0 &&
                      void 0 == n[parseInt(e) - 1][parseInt(s) + 1]
                    ? this.x--
                    : ((t.fillStyle = "#fff"),
                      t.fillRect(e, s, this.size, this.size),
                      (n[parseInt(e)][parseInt(s)] = 1),
                      this.reset());
          }
          (this.x > c - f || this.x < f) && this.reset();
        }),
        (this.reset = function () {
          (this.y = 0),
            (this.x = o(f, c - f)),
            (this.stepSize = o(1, 10) / 100),
            (this.size = o(100 * i.minSize, 100 * i.maxSize) / 100),
            (this.speed = o(i.minSpeed, i.maxSpeed));
        });
    }
    function n() {
      for (l = 0; l < h.length; l += 1) h[l].update();
      p = requestAnimationFrame(function () {
        n();
      });
    }
    var a = {
        flakeCount: 35,
        flakeColor: "#ffffff",
        flakePosition: "absolute",
        flakeIndex: 999999,
        minSize: 1,
        maxSize: 2,
        minSpeed: 1,
        maxSpeed: 5,
        round: !1,
        shadow: !1,
        collection: !1,
        collectionHeight: 40,
        deviceorientation: !1,
      },
      i = t.extend(a, i),
      o = function (t, e) {
        return Math.round(t + Math.random() * (e - t));
      };
    t(e).data("snowfall", this);
    var h = [],
      r = 0,
      l = 0,
      d = t(e).height(),
      c = t(e).width(),
      f = 0,
      p = 0;
    if (i.collection !== !1) {
      var m = document.createElement("canvas");
      if (m.getContext && m.getContext("2d"))
        for (
          var w = [],
            g = t(i.collection),
            u = i.collectionHeight,
            l = 0;
          l < g.length;
          l++
        ) {
          var x = g[l].getBoundingClientRect(),
            z = t("<canvas/>", { class: "snowfall-canvas" }),
            v = [];
          if (x.top - u > 0) {
            t("body").append(z),
              z
                .css({
                  position: i.flakePosition,
                  left: x.left + "px",
                  top: x.top - u + "px",
                })
                .prop({ width: x.width, height: u });
            for (var y = 0; y < x.width; y++) v[y] = [];
            w.push({
              element: z.get(0),
              x: x.left,
              y: x.top - u,
              width: x.width,
              height: u,
              colData: v,
            });
          }
        }
      else i.collection = !1;
    }
    for (
      t(e).get(0).tagName === t(document).get(0).tagName && (f = 25),
        t(window).bind("resize", function () {
          (d = t(e)[0].clientHeight), (c = t(e)[0].offsetWidth);
        }),
        l = 0;
      l < i.flakeCount;
      l += 1
    )
      (r = h.length),
        h.push(
          new s(
            o(f, c - f),
            o(0, d),
            o(100 * i.minSize, 100 * i.maxSize) / 100,
            o(i.minSpeed, i.maxSpeed),
            r
          )
        );
    i.round &&
      t(".snowfall-flakes").css({
        "-moz-border-radius": i.maxSize,
        "-webkit-border-radius": i.maxSize,
        "border-radius": i.maxSize,
      }),
      i.shadow &&
        t(".snowfall-flakes").css({
          "-moz-box-shadow": "1px 1px 1px #555",
          "-webkit-box-shadow": "1px 1px 1px #555",
          "box-shadow": "1px 1px 1px #555",
        });
    var S = !1;
    i.deviceorientation &&
      t(window).bind("deviceorientation", function (t) {
        S = 0.1 * t.originalEvent.gamma;
      }),
      n(),
      (this.clear = function () {
        t(e).children(".snowfall-flakes").remove(),
          t(".snowfall-canvas").remove(),
          (h = []),
          cancelAnimationFrame(p);
      });
  }),
    (t.fn.snowfall = function (e) {
      return "object" == typeof e || void 0 == e
        ? this.each(function () {
            new t.snowfall(this, e);
          })
        : "string" == typeof e
        ? this.each(function () {
            var e = t(this).data("snowfall");
            e && e.clear();
          })
        : void 0;
    });
})(jQuery);

$(document).snowfall({
flakeCount: 100,
maxSpeed: 10,
flakeColor: "white",
minSize: 1,
maxSize: 5,
round: true,
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

//FAQ Page
document.addEventListener("DOMContentLoaded", function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    item.querySelector('.accordion-header').addEventListener('click', function() {
      const activeContent = item.querySelector('.accordion-content');
      accordionItems.forEach(item => {
        const content = item.querySelector('.accordion-content');
        if (content !== activeContent) {
          content.classList.remove('active');
        }
      });
      activeContent.classList.toggle('active');
    });
  });
});
//mobil menu button
var tik= 0;
function mobilactive(){
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
      if (
        !e.composedPath().includes(menu-btn) &&
        !e.composedPath().includes(navbar)
      ) {
        navbar.classList.remove("active");
      }
    });
  });
  if(tik%2==0){
  setTimeout(function() {
    // İkinci tıklama
    menuBtn.click();
    
    // İkinci tıklama işlemleri burada gerçekleştirilebilir
}, 1);
  }
  tik = tik + 1;
}






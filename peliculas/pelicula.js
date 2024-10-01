const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 200,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

function ver() {
  document.getElementById("menu").classList.toggle("down")
}

function caja() {
  document.getElementById("menu").classList.remove("down")
}
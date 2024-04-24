const topSwiper = new Swiper('.top__swiper', {
    // Optional parameters
    loop: true,
    infinity: true,
    autoplay: {
      delay: 
      10000,
      disableOnInteractive: false
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var aboutSwiper = new Swiper(".about__swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
  });


  document.querySelectorAll('.accordeon__triger').forEach((item) => {
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('accordeon__item--active');
    });
  })
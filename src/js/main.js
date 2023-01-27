
const selectEl = document.querySelector('#selectCustom');
const selectHideEl = document.querySelector('#selectCustomHide');
const selectCategory = document.querySelector('#selectCategory');
const searchInput = document.querySelector('.search__input');
const searchIcon = document.querySelector('.search__svg');
const burgerEl = document.querySelector('.burger-js');
const heroSlider = document.querySelector('.swiper-js');
const reitingBtn = document.querySelector('.reiting__btn');
const reitingGrid = document.querySelector('.reiting__grid');

const choices = new Choices(selectEl, {
  searchEnabled: false,
  shouldSort: false,
  duplicateItemsAllowed: false,
  renderChoiceLimit: 4,
  renderSelectedChoices: false,
});

const choicesHide = new Choices(selectHideEl, {
  searchEnabled: false,
  shouldSort: false,
  duplicateItemsAllowed: false,
  renderChoiceLimit: 4,
  renderSelectedChoices: false,
});

const choicesCategory = new Choices(selectCategory, {
  searchEnabled: false,
  shouldSort: false,
  duplicateItemsAllowed: false,
  resetScrollPosition: false,
  renderSelectedChoices: false,
});

searchInput.addEventListener('change', function(){
  if (searchInput.value){
    searchIcon.style.color = '#A65CF0';
  } else searchIcon.style.color = '#999999';
})

selectCategory.addEventListener('change', function(){
  el = document.querySelector('.choices__item[data-value="категория"]');
  el.style.display="none";
})


burgerEl.addEventListener('click', function(ev){
  document.querySelector('.header').classList.toggle('open-burger');
})

const swiper = new Swiper('.hero__swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
});

let specialSlider = new Swiper(".special-slider-js", {
  spaceBetween: 32,
  slidesPerView: "auto",
  direction: "horizontal",
  navigation: {
    nextEl: ".special__next",
    prevEl: ".special__back"
  },

  breakpoints: {
    610: {
      slidesPerGroup: 2,
    },

    1281: {
      slidesPerGroup: 3,
    }
  }
});

reitingBtn.addEventListener('click', function(){
  reitingGrid.style.height= '100%';
  reitingBtn.style.display = 'none';
})

let usefulSlider = new Swiper(".useful-slider-js", {
  spaceBetween: 32,
  slidesPerView: 2,
  navigation: {
    nextEl: ".useful__next",
    prevEl: ".useful__back"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    610: {
      slidesPerView: 2,
    },

    940: {
      slidesPerView: 3,
    },

    1025: {
      slidesPerView: 2,
    },
  }
});

tippy('#connect__tooltip', {
  content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
  placement: 'top',
  animation: 'swift-away',
  theme: 'secondary'
});

let inputTel = document.querySelector("input[type='tel']");
let maskTel = new Inputmask("+7 (999)-999-99-99");
maskTel.mask(inputTel);

new JustValidate('.connect__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = inputTel.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    email: {
      required: true,
      email: true
    },
    check: {
      function: () => {
        const check = document.querySelector('.checkbox__input');
        return check.checked;
      }
    }
  },
  messages: {
    name:'Недопустимый формат',
    tel: 'Укажите ваш телефон',
    email: 'Недопустимый формат',
    check: 'Примите пользовательское соглашение'
  },
  // submitHandler: function(thisForm) {
  //   let formData = new FormData(thisForm);

  //   let xhr = new XMLHttpRequest();

  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         alert('Отправлено');
  //       }
  //     }
  //   }

  //   xhr.open('POST', 'mail.php', true);
  //   xhr.send(formData);

  //   thisForm.reset();
  // }
})
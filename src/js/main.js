window.onload = function(){
  const selectEl = document.querySelector('#selectCustom');
const selectHideEl = document.querySelector('#selectCustomHide');
const selectCategory = document.querySelector('#selectCategory');
const searchInput = document.querySelector('.search__input');
const searchIcon = document.querySelector('.search__svg');
const burgerEl = document.querySelector('.burger-js');
const heroSlider = document.querySelector('.swiper-js');
const reitingBtn = document.querySelector('.reiting__btn');
const reitingGrid = document.querySelector('.reiting__grid');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');
const rangeSlider = document.getElementById('range-slider');
const filter = document.querySelector('.filter');
const filterCategoryList = document.querySelectorAll('.filter-category__item');
const filterSaleList = document.querySelectorAll('.filter-sale__item');
const filterColorList = document.querySelectorAll('.filter-color__item');
const catalogList = document.querySelector('.catalog__list');
const catalogCard = document.querySelectorAll('.catalog-card');
const catalogWrap = document.querySelector('.catalog__wrap');
const catalogNavigation = document.querySelector('.catalog__navigation');
const production = document.querySelector('.production');
const collaboration = document.querySelector('.collaboration');

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

function addBreadCrumpsItemLink(text, link){
  const breadCrumpsItem = document.createElement('li');
  breadCrumpsItem.className = 'breadcrumps__item';
  breadCrumpsLink = document.createElement('a');
  breadCrumpsLink.className = 'breadcrumps__link';
  breadCrumpsLink.textContent = text;
  breadCrumpsLink.href = link;
  breadCrumpsItem.append(breadCrumpsLink);
  document.querySelector('.breadcrumps__list').append(breadCrumpsItem);
}

function addBreadCrumpsItem(text){
  const breadCrumpsItem = document.createElement('li');
  breadCrumpsItem.className = 'breadcrumps__item';
  breadCrumpsItem.textContent = text;
  document.querySelector('.breadcrumps__list').append(breadCrumpsItem);
}

if(document.querySelector('.hero__swiper')){
  const swiper = new Swiper('.hero__swiper', {
    loop: true,
    autoHeight: false,
    pagination: {
      el: '.hero__pagination',
      bulletClass:'hero-bullit',
      clickable: true,
      bulletActiveClass: 'hero-bullit__active',
      renderBullet: function () {
        return `<span class="hero-bullit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
    
          <circle cx="16" cy="16" r="15.9155" class="hero-bullit__background" />
    
          <circle cx="16" cy="16" r="15.9155" class="hero-bullit__progress" />
        </svg>
      </span>`;
      },
    },
    // autoplay: {
    //   delay: 4000,
    // }, 
  });
  setTimeout(function(){document.querySelector('.hero-bullit__active').classList.add('active')}, 500);
  swiper.on('slideChange', function () {
    swiper.autoplay.stop()
    document.querySelectorAll('.hero-bullit').forEach(el=>{el.classList.remove('active')});
    document.querySelector('.hero-bullit__active').classList.add('active');
  });
  document.querySelectorAll('.hero-bullit').forEach(el=>{
    el.addEventListener('transitionend', () => {
      swiper.slideNext();
    });
  })
}

if(document.querySelector('.special-slider-js')){
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
}

if (reitingBtn){
  reitingBtn.addEventListener('click', function(){
    reitingGrid.style.height= '100%';
    reitingBtn.style.display = 'none';
  })
}



if(document.querySelector('.useful-slider-js')){
  let usefulSlider = new Swiper(".useful-slider-js", {
    spaceBetween: 32,
    slidesPerView: 2,
    navigation: {
      nextEl: ".useful__next",
      prevEl: ".useful__back"
    },
  
    breakpoints: {
      310: {
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
}

if(document.querySelector('#connect__tooltip')){
  tippy('#connect__tooltip', {
    content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
    placement: 'top',
    animation: 'swift-away',
    theme: 'secondary'
  });
}

if(document.querySelector('.connect__form')){
  let inputTel = document.querySelector("input[type='tel']");
let maskTel = new Inputmask("+7 (999)-999-99-99");
maskTel.mask(inputTel);

const validator = new JustValidate('.connect__form', {
  validateBeforeSubmitting: true,
});
  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Поле не заполнено',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Недопустимый формат'
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Недопустимый формат'
      },
    ])
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Поле не заполнено',
      },
      {
        validator: (value) => {
          const phone = inputTel.inputmask.unmaskedvalue();
          const result = Number(phone) && phone.length === 10;
          return result;
        },
        errorMessage: 'Недопустимый формат'
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Поле не заполнено',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат'
      },
    ])
    .addField('#check', [
      {
        validator: (value) => {
          const check = document.querySelector('.checkbox__input');
          return check.checked;
        },
        errorMessage: 'Примите пользовательское соглашение'
      },
    ])
    .onSuccess((ev) => {
      modal.classList.add('visible');
      document.querySelector('body').style.overflow = 'hidden';
      let formData = new FormData(ev.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (afterSend) {
              afterSend();
            }
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', '/resources/mail.php', true);
      xhr.send(formData);

      ev.target.reset();
    })
}

    if(modalBtn) {
      document.querySelector('.modal').addEventListener('click', function(ev){
        if((ev.target == modalBtn) || (ev.target.classList.contains('modal'))) {
          modal.classList.remove('visible');
          document.querySelector('body').style.overflow = 'auto';
        }
      });
    }
    

    if(rangeSlider){
      noUiSlider.create(rangeSlider, {
        start: [2000, 150000],
        connect: true,
        step: 1,
        range: {
          'min': [1],
          'max': [180000]
        }
      });
  
        const input0 = document.getElementById('input-0');
        const input1 = document.getElementById('input-1');
        const inputs = [input0, input1];
  
        rangeSlider.noUiSlider.on('update', function(values, handle){
          inputs[handle].value = Math.round(values[handle]);
        })
  
        const setRangeSlider = (i, value) => {
          let arr = [null, null];
          arr[i] = value;
          rangeSlider.noUiSlider.set(arr);
        };
  
        inputs.forEach((el,index) => {
          el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
          });
        });
    }

    const addFilter = function(name, text){
      name.firstElementChild.innerHTML = text;
      console.log(name);
    }

    if (filter) {
      addBreadCrumpsItemLink(' Каталог /', 'catalog.html');
      addBreadCrumpsItemLink(' Диваны /', '#');
      addBreadCrumpsItem(' Прямые диваны');
      const catalogTagGreen = document.querySelector('.catalog-tag__block--green');
      const catalogTagPinck = document.querySelector('.catalog-tag__block--pinck');
      const catalogTagGrey = document.querySelector('.catalog-tag__block--grey');
      const catalogTagBone = document.querySelector('.catalog-tag__block--bone');
      filterCategoryList.forEach(el=>{
        if(el.children[0].children[2].textContent === 'Диваны') {
          el.children[0].children[0].setAttribute('checked', 'checked');
        }
        el.addEventListener('change', function(ev){
          
          filterCategoryList.forEach(item=>{
            if (item != el) {
              item.children[0].children[0].checked = false;
            }
          })
          if ((window.innerWidth < 1280) && (window.innerWidth > 610)) {
            catalogTagGreen.style.display = 'flex';
            let text = ev.target.parentElement.lastElementChild.textContent;
            addFilter(catalogTagGreen, text);
            if (!el.firstElementChild.firstElementChild.checked){
              catalogTagGreen.style.display = 'none';
            }
          }
        })
      })

      if ((window.innerWidth < 1280) && (window.innerWidth > 610)){
        document.getElementById('input-1').addEventListener('change', function(ev){
        catalogTagBone.style.display = 'flex';
        catalogTagBone.firstElementChild.innerHTML ='До ' + ev.currentTarget.value;
        })

        const catalogTagBtn = document.querySelectorAll('.catalog-tag__btn');
        catalogTagBtn.forEach((el)=>{
          
          el.addEventListener('click', function(ev){
            const resultClass = ev.target.parentElement.className.substring(19, 100).trim();
            console.log(resultClass);
            switch(resultClass){
              case 'catalog-tag__block--green':
                document.querySelector('.catalog-tag__block--green').style.display= 'none';
                filterCategoryList.forEach(item=>{
                    item.children[0].children[0].checked = false;
                })
              case 'catalog-tag__block--pinck':
                document.querySelector('.catalog-tag__block--pinck').style.display= 'none';
                filterSaleList.forEach(item=>{
                    item.children[0].children[0].checked = false;
                })
              case 'catalog-tag__block--grey':
                document.querySelector('.catalog-tag__block--grey').style.display= 'none';
                filterColorList.forEach(item=>{
                    item.children[0].children[0].checked = false;
                })
                case 'catalog-tag__block--bone':
                  document.querySelector('.catalog-tag__block--bone').style.display= 'none';
                  document.getElementById('input-0').value = '0';
                  document.getElementById('input-1').value = '0';
            }
          })
        })
      }

      filterSaleList.forEach(el=>{
        if(el.children[0].children[2].textContent === 'Не важно') {
          el.children[0].children[0].setAttribute('checked', 'checked');
        }
        el.addEventListener('change', function(ev){
          filterSaleList.forEach(item=>{
            if (item != el) {
              item.children[0].children[0].checked = false;
            }
          })
          if ((window.innerWidth < 1280) && (window.innerWidth > 610)) {
            catalogTagPinck.style.display = 'flex';
            let text = ev.target.parentElement.lastElementChild.textContent;
            addFilter(catalogTagPinck, text);
            if (!el.firstElementChild.firstElementChild.checked){
              catalogTagPinck.style.display = 'none';
            }
          }
        })
      })

      filterColorList.forEach(el=>{
        if(el.children[0].children[2].textContent === 'Оранжевый') {
          el.children[0].children[0].setAttribute('checked', 'checked');
        }
        el.addEventListener('change', function(ev){
          filterColorList.forEach(item=>{
            if (item != el) {
              item.children[0].children[0].checked = false;
            }
          })
          if ((window.innerWidth < 1280) && (window.innerWidth > 610)) {
            catalogTagGrey.style.display = 'flex';
            const catalogTagGreen = document.querySelector('.catalog-tag__block--grey');
            let text = ev.target.parentElement.lastElementChild.textContent;
            addFilter(catalogTagGreen, text);
            if (!el.firstElementChild.firstElementChild.checked){
              catalogTagGrey.style.display = 'none';
            }
          }
        })
      })

    }

    if (catalogWrap) {
      let countCard;
      let catalogBtn;
      if (window.innerWidth>980) {countCard = 9};
      if (window.innerWidth<=980) {countCard = 6};
      const catalogCardArray = Array.prototype.slice.call(catalogCard);
      for (let item of catalogCardArray) {
        if (catalogCardArray.indexOf(item)>countCard-1){
          item.classList.add('invisible');
        }
      }

      let countBtn = (catalogCard.length % countCard === 0 ) ? catalogCard.length/countCard : catalogCard.length/countCard + 1;
      for (let i=1; i<=countBtn; i++){
        catalogBtn = document.createElement('button');
        catalogBtn.innerHTML = i;
        catalogBtn.classList.add('catalog-navigation__btn');
        if (i=='1'){catalogBtn.classList.add('active')};
        catalogNavigation.append(catalogBtn);
      }

   

      if(catalogNavigation) {
        catalogNavigation.addEventListener('click', function(ev){
          let catalogNavigationArray = Array.prototype.slice.call(catalogNavigation.children)
          ev.preventDefault();
          count = ev.target.innerHTML;
          console.log(catalogNavigationArray);
          catalogNavigationArray.forEach(el=>{
            el.classList.remove('active');
            if (el == ev.target) {el.classList.add('active')};
          });
          catalogCardArray.forEach(el=>{
            if (catalogCardArray.indexOf(el)>=((count-1)*countCard) && catalogCardArray.indexOf(el)<=count*countCard-1){
              if(el.classList.contains('invisible')){el.classList.remove('invisible')}
              el.classList.add('visible');
            } else {
              if(el.classList.contains('visible')){el.classList.remove('visible')}
              el.classList.add('invisible');
            }
          })
        });
      } 

      if (window.innerWidth < 1280) {
        const categoryListEl = document.querySelectorAll('.filter-list');
        const filterTitleEl = document.querySelectorAll('.filter__subtitle');
        categoryListEl.forEach(el=>{
          el.classList.add('invisible');
        })

        filter.addEventListener('click', function(ev) {
          if (ev.target.classList.contains('filter__subtitle')){
            ev.target.classList.toggle('open-list');
            ev.target.nextElementSibling.classList.toggle('invisible');
            filterTitleEl.forEach(el=>{
              if (el != ev.target){
                el.classList.remove('open-list');
                el.nextElementSibling.classList.add('invisible');
              } 
            })
          }
        })
      }
    }

  if (production) {
    addBreadCrumpsItemLink(' Каталог /', 'catalog.html');
      addBreadCrumpsItemLink(' Диваны /', '#');
      addBreadCrumpsItemLink(' Прямые диваны /');
      addBreadCrumpsItem(' D-31');

    const swiperProduction = new Swiper(".production__slider", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: {
        enabled: true,
        sticky: true,
      },
      watchSlidesProgress: true,
      grabCursor: true,
      breakpoints: {  
        0: {
          direction: 'horizontal',
        },
        611: {
          direction: 'vertical',
        },
        871: {
          direction: 'horizontal',
        },
      }
    });
    const thumbswiperProduction = new Swiper(".production__thumbslider", {
      spaceBetween: 10,
      thumbs: {
        swiper: swiperProduction,
        multipleActiveThumbs: false
      },
    });

    const modalSlider = new Swiper(".modal-slider__slider", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      grabCursor: true,
      allowSlideNext: true,
      navigation: {
        nextEl: '.modal-slider__next',
        prevEl: '.modal-slider__back',
      }
    });
    const thumbModalSlider = new Swiper(".modal-slider__thumbslider", {
      spaceBetween: 10,
      thumbs: {
        swiper: modalSlider,
        multipleActiveThumbs: false
      },
    });

    const similarSlider = new Swiper(".similar__slider", {
      spaceBetween: 32,
      breakpoints: {  
        0: {
          slidesPerView: 2,
          spaceBetween: 16,
        },

        610: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
    
        970: {
          slidesPerView: 3,
        },
    
        1330: {
          slidesPerView: 4,
        }
      },
      navigation: {
        nextEl: ".similar__next",
        prevEl: ".similar__back"
      },
    });

    const slideBtn = document.querySelectorAll('.product-thumbslider__thumbslide');
    const productionSale = document.querySelector('.production__sale');
    const modalSliderVisible = document.querySelector('.modal-slider');
    const modalFormVisible = document.querySelector('.modal-form');
    const modalSliderClose = document.querySelector('.modal-slider__btn--js');
    const modalFormClose = document.querySelector('.modal-form__btn--js');
    slideBtn.forEach(element => {
      element.addEventListener('click', function(ev){
        modalSliderVisible.classList.add('visible');
        document.querySelector('body').style.overflow = 'hidden';
      })
    });

    document.querySelector('.modal-slider').addEventListener('click', function(ev){
      if((ev.target == modalSliderClose) || (ev.target.classList.contains('modal-slider'))) {
        modalSliderVisible.classList.remove('visible');
        document.querySelector('body').style.overflow = 'auto';
      }
    });

    productionSale.addEventListener('click', function(ev){
      modalFormVisible.classList.add('visible');
      document.querySelector('body').style.overflow = 'hidden';
      if (window.innerWidth<611) {
        document.querySelector('.modal-form__block').classList.remove('modal-form__block--height');
      }
    })

    document.querySelector('.modal-form').addEventListener('click', function(ev){
      console.log(ev.target);
      if((ev.target == modalFormClose) || (ev.target.classList.contains('modal-form'))) {
        modalFormVisible.classList.remove('visible');
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.modal-form__start').style.display = 'flex';
        document.querySelector('.modal-form__end').style.display = 'none';
      }
    });

    if(document.querySelector('.modal-form__form')){
      let inputTel = document.querySelector("input[type='tel']");
      let maskTel = new Inputmask("+7 (999)-999-99-99");
      maskTel.mask(inputTel);
    
      const validator = new JustValidate('.modal-form__form', {
        validateBeforeSubmitting: true,
      });
      validator
        .addField('#name', [
          {
            rule: 'required',
            errorMessage: 'Поле не заполнено',
          },
          {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Недопустимый формат'
          },
          {
            rule: 'maxLength',
            value: 15,
            errorMessage: 'Недопустимый формат'
          },
        ])
        .addField('#tel', [
          {
            rule: 'required',
            errorMessage: 'Поле не заполнено',
          },
          {
            validator: (value) => {
              const phone = inputTel.inputmask.unmaskedvalue();
              const result = Number(phone) && phone.length === 10;
              return result;
            },
            errorMessage: 'Недопустимый формат'
          },
        ])
        .addField('#check', [
          {
            validator: (value) => {
              const check = document.querySelector('.checkbox__input');
              return check.checked;
            },
            errorMessage: 'Примите пользовательское соглашение'
          },
        ])
        .onSuccess((ev) => {
          document.querySelector('.modal-form__start').style.display='none';
          document.querySelector('.modal-form__end').style.display='flex';
          if (window.innerWidth<611) {
            document.querySelector('.modal-form__block').classList.add('modal-form__block--height');
          }
          let formData = new FormData(ev.target);
    
          let xhr = new XMLHttpRequest();
    
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                if (afterSend) {
                  afterSend();
                }
                console.log('Отправлено');
              }
            }
          }
    
          xhr.open('POST', '/resources/mail.php', true);
          xhr.send(formData);
    
          ev.target.reset();
        })
    }
  }

    if (collaboration) {
      addBreadCrumpsItem('Сотрудничество')
    }
    
}
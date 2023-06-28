window.addEventListener('DOMContentLoaded', () => {  

//basket
const cartWrapper = document.querySelector('.cart-wrapper');


let num =1;
window.addEventListener('click', function (event) {
  
  if (event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.menu-item');

    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      weight: card.querySelector('.item-weight').innerText,
      price: card.querySelector('.price').innerText,
      
      // counter: card.querySelector('[data-counter]').innerText,
    }
    

    // if(num.length < 0){
    //   num = Number(productInfo.id);
    // }else{
    //   num +=1;
    // }
    
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    if (itemInCart) {
      // const counterElement = itemInCart.querySelector('[data-counter]');
      // counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      // num = num+1;
      //// console.log(productInfo.num)
      const counterValue = itemInCart.querySelector('.items__current');
      let  a = Number(counterValue.innerHTML);
      a++
    counterValue.innerHTML = a;
    console.log(a);
    } else {
      
      num =1;
      const cartItemHTML = `
      <div class="cart-item" data-id="${productInfo.id}">
      <div class="cart-item__img">
      <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
   </div>
      <div>
         <h4>${productInfo.title}</h4>
         <p>${productInfo.weight}</p>
         <p>${productInfo.price}</p>
         <div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" id="counter-value" >1</div>
												<div class="items__control" data-action="plus">+</div>
			</div>
      </div>
      </div>
      `

      cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
   
  }

})


// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');

// Отслеживаем клик на кнопку btnMinus
// btnMinus.addEventListener('click', function () {

//     // Проверяем чтобы счетчик был больше 1
//     if (parseInt(counter.innerText) > 1) {
// 		// Изменяем текст в счетчике уменьшая его на 1
// 		counter.innerText = --counter.innerText;
// 	}

// });

// // Отслеживаем клик на кнопку btnPlus
// btnPlus.addEventListener('click', function () {
// 	// Изменяем текст в счетчике увеличивая его на 1
// 	counter.innerText = ++counter.innerText;
// })


// window.addEventListener('click', function (event) {

//    // Объявляем переменную для счетчика
//    let counter;

//    // Проверяем клик строго по кнопкам Плюс либо Минус
//    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
//      // Находим обертку счетчика
//      const counterWrapper = event.target.closest('.counter-wrapper');
//      // Находим див с числом счетчика
//        counter = counterWrapper.querySelector('[data-counter]');
//   }

//   // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
//   if (event.target.dataset.action === 'plus') {
//      counter.innerText = ++counter.innerText;
//   }

//   // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
//   if (event.target.dataset.action === 'minus') {

//      // Проверяем чтобы счетчик был больше 1
//      if (parseInt(counter.innerText) > 1) {
//         // Изменяем текст в счетчике уменьшая его на 1
//         counter.innerText = --counter.innerText;
//      } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
//         // Проверка на товар который находится в корзине
//         console.log('IN CART!!!!');
//         // Удаляем товар из корзины
//         event.target.closest('.cart-item').remove();

//         // Отображение статуса корзины Пустая / Полная
//         toggleCartStatus();

//         // Пересчет общей стоимости товаров в корзине
//         calcCartPriceAndDelivery();
//      }

//   }

//   // Проверяем клик на + или - внутри коризины
//   if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
//      // Пересчет общей стоимости товаров в корзине
//      calcCartPriceAndDelivery();
//   }
// });


///
const tabs = document.querySelectorAll('.nav__catalog__item'),
  tabsParent = document.querySelector('.nav__catalog'),
  tabsContent = document.querySelectorAll('.menu-osnova');


function hideTabContent() {
  tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });

  tabs.forEach(item => {
    item.classList.remove('tabheader__item_active');
  });

}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('tabheader__item_active');
}
hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
  const target = event.target;
  console.log("Ffff");
  if (target && target.classList.contains('nav__catalog__item')) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }

});


  

});



let navMove = document.querySelector('.nav__catalog');


navMove.addEventListener('touchstart', (TouchEvent)=>{
  console.log("tyt")

  let shiftX = 100;
  console.log(shiftX);
  document.addEventListener('touchmove', onMouseMove);
  document.addEventListener('touchend', onMouseUp);

  function onMouseMove(TouchEvent) {
    let newLeft = 200;
    console.log(newLeft)
    // курсор вышел из слайдера => оставить бегунок в его границах.
   

    console.log(navMove.style.left = newLeft + 'px');
  }
  function onMouseUp() {
    document.removeEventListener('touchend', onMouseUp);
    document.removeEventListener('touchmove', onMouseMove);
  }}
);

///touchslider навигации 
const navSlider = document.querySelector('.nav-slider'),
      navCatalog = document.querySelector('.nav__catalog'),
      navItem = document.querySelectorAll('.nav__catalog__item'),
      main = document.querySelector('.product'),
      navWrapper = document.querySelector('.nav-wrapper');

// отслеживаем касание для перемещения списка навагицаии 
navCatalog.addEventListener('touchstart',function(event) {
      
    // event.preventDefault(); // предотвратить запуск выделения (действие браузера)

      let shiftX = event.touches[0].clientX  - navCatalog.getBoundingClientRect().left;
      
      document.addEventListener('touchmove', onMouseMove);
      document.addEventListener('touchend', onMouseUp);

  function onMouseMove(event) {
      
        let newLeft = event.touches[0].clientX - shiftX - navSlider.getBoundingClientRect().left;
        let rightEdge = main.offsetWidth - navSlider.offsetWidth;
     
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        navCatalog.style.cssText = `transform: translateX(${newLeft +"px"})`;
      }

  function onMouseUp() {
        document.removeEventListener('touchend', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
      }
});


//отслеживаем окончание касание, для того чтоб первый и последний элемент вернуть 
//на прежнее местоположение с помощью изменения transform: translateX()
    navCatalog.addEventListener('touchend',() =>{
      let Firstitem = navItem[0]; // получаем первый элемент списка
      let lastItem = navItem[navItem.length-1]; // получаем последний элемент

      let coords = Firstitem.getBoundingClientRect(); //координаты первого эл-та
      let coordsLast = lastItem.getBoundingClientRect(); //координаты второго эл-та

      let x =Math.abs(coords.x)  + window.innerWidth;
     
      let y = navWrapper.clientWidth - window.innerWidth + 60;
     
      
      if(coords.left>20){
        navCatalog.style.cssText = `transform: translateX(${"0px"})`;
      }else if( x > navWrapper.clientWidth){
        navCatalog.style.cssText = `transform: translateX(${-y+'px'})`;
      }
      
      
   
    });

    



    navCatalog.ondragstart = function() {
      return false;
    };
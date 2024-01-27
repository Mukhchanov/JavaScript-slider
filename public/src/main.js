import './style.scss';

'use strict';

[...document.querySelectorAll('.slide_list li')].forEach((li) => {
     li.onclick = function() {
          document.querySelector('.slide_list li.active').classList.remove('active'); 
          this.classList.add('active');
          document.querySelector('.main_slider img').src = this.firstElementChild.src;
     }
});

[...document.querySelectorAll('.arrow')].forEach((arr) => {
     arr.onclick = function() {
          const activeLi = document.querySelector('.slide_list li.active');
          activeLi.classList.remove('active');

          let newActiveLi;

          if(this.classList.contains('arrow_left')){
               newActiveLi = 
                    activeLi.previousElementSibling !== null ?
                    activeLi.previousElementSibling :
                    document.querySelector('.slide_list li:last-child');
          } else { 
               newActiveLi = 
                    activeLi.nextElementSibling !== null ?
                    activeLi.nextElementSibling :
                    document.querySelector('.slide_list li:first-child');
          }
          newActiveLi.classList.add('active');
          document.querySelector('.main_slider img').src = newActiveLi.firstElementChild.src;
     }
});
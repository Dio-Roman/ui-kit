import $ from 'jquery';
// import './pagination.js';
// import 'paginationjs';
// import 'jq-paginator';
// import  "./jq-paginator";


// console.log('Hello World!');


// import './css/style.css';
import './scss/main.scss';



// mask
// ^[1-31]+$  \d
// const regNum = '/\D/';
// const mask = document.getElementById('mask');
// function checkMask () {
//   console.log(mask.value);
//   if (mask.value == regNum) {
//     mask.value = ''
//   };
// };
// mask.addEventListener("keypress", checkMask );

// $(function($){
// 	$('.date').mask('99/99/9999');
// });


import './jquery.maskedinput';
$( '.date').mask('d9/m9/2099');

// import './pickmeup.min.js';
// pickmeup('.range', {
//   flat : true,
//   mode : 'range'
// });

// ___toggle-switch___
const toggleSwitchInput = document.querySelector('.toggle-switch__input');
const toggleSwitch = document.querySelector('.toggle-switch');
toggleSwitchInput.onclick = () =>{
  if (toggleSwitchInput.checked ==true) {
  toggleSwitch.style.borderColor = '#BC9CFF'
  // console.log('ok')
} else {
  toggleSwitch.style.borderColor = 'rgba(31, 32, 65, 0.25)'
}
}

// ___like-button___
const likeBtnInput = document.querySelector('.like-btn__input');
const likeBtn = document.querySelector('.like-btn');
const likeBtnCounter = document.querySelector('.like-btn__counter');

likeBtnInput.onclick = () =>{
  if (likeBtnInput.checked ==true) {
    likeBtn.style.borderColor = '#BC9CFF';
    likeBtnCounter.innerHTML ++;
  // console.log(likeBtnCounter.innerHTML)
} else {
  likeBtn.style.borderColor = 'rgba(31, 32, 65, 0.25)';
  likeBtnCounter.innerHTML --;
}
}
// --------------------------


// const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// function simpleTemplating(data) {
//   var html = '<ul>';
//   $.each(data, function(index, item){
//       html += '<li>'+ item +'</li>';
//   });
//   html += '</ul>';
//   return html;
// }

// $('#pagination-container').pagination({
//   dataSource: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//   callback: function(data, pagination) {
//       // template method of yourself
//       var html = template(data);
//       dataContainer.html(html);
//   }
// })






// $(document).ready(function() {
//  $.jqPaginator('#pagination-demo', {
  
//     // options here
  
//   });
// })


  

document.addEventListener("DOMContentLoaded", function() {

  function closeAlert() {
      var alertContainer = document.getElementById("alert-container");
      alertContainer.style.display = "none";
  }

  function toggleContent() {
      var content = document.querySelector('.collapse-content');
      content.style.display = (content.style.display === 'none') ? 'block' : 'none';
  }
















  // const container = document.querySelector('.marquee-container');
  // const imagesScroller = document.querySelector('.marquee-container .images');
  // const leftBtn = document.querySelector('.marquee-container .left');
  // const rightBtn = document.querySelector('.marquee-container .right');

  // let position = 0;
  // const step = 300  
  

  // leftBtn.addEventListener('click', () => {
  //   // position -= 50; // Move left by 50px
  //   if (position + step  >= 0 ) {
  //     position -= imagesScroller.scrollWidth / 2; // Quick jump half the width with no transition
  //     imagesScroller.style.transition = 'none';
  //     imagesScroller.style.transform = `translateX(${position}px)`;
  //     setTimeout(() => {
  //       imagesScroller.style.transition = ''; // Restore transition
  //       position += step; 
  //       imagesScroller.style.transform = `translateX(${position}px)`;  
  //     }, 0); // Use a timeout to ensure the transition is restored after the jump
  //   } else {    
  //     position += step; 
  //     imagesScroller.style.transform = `translateX(${position}px)`;
  //   }
  // });

  // rightBtn.addEventListener('click', () => {
  //   // position += 50; // Move right by 50px
  //   if (position - step  <= -imagesScroller.scrollWidth + container.offsetWidth) {
  //     position += imagesScroller.scrollWidth / 2; // Quick jump half the width with no transition
  //     imagesScroller.style.transition = 'none';
  //     imagesScroller.style.transform = `translateX(${position}px)`;
  //     setTimeout(() => {
  //       imagesScroller.style.transition = ''; // Restore transition
  //       position -= step; 
  //       imagesScroller.style.transform = `translateX(${position}px)`;  
  //     }, 0); // Use a timeout to ensure the transition is restored after the jump
  //   } else {    
  //     position -= step; 
  //     imagesScroller.style.transform = `translateX(${position}px)`;
  //   }
  // });

//   function getTranslateX(element) {
//     const style = window.getComputedStyle(element);
//     const transform = style.transform || style.webkitTransform;
  
//     if (transform && transform !== 'none') {
//       const matrix = transform.includes('3d')
//         ? new DOMMatrixReadOnly(transform)
//         : new DOMMatrix(transform); // fallback for 2D
  
//       return matrix.m41;
//     }
  
//     return 0; // No transform applied
//   }

// let position = 0;
// let isAutoScrolling = false;
// const step = isAutoScrolling ? 300 : 300; // Adjust this value to change the scroll speed

// function scrollImages(direction="right") {
//   const isRight = direction === 'right';

//   const scrollAmount = isRight ? step : -step;
//   const nextPosition = position + scrollAmount;


//   const shouldJump = isRight
//     ? nextPosition >= 0
//     : nextPosition <= -imagesScroller.scrollWidth + container.offsetWidth;
//   const jumpDistance = imagesScroller.scrollWidth / 2;
  

//   if (shouldJump) {
//     position += isRight ? -jumpDistance : jumpDistance;
//     imagesScroller.style.transition = 'none';
//     imagesScroller.style.transform = `translateX(${position}px)`;

//     setTimeout(() => {
//       imagesScroller.style.transition = '';
//       position += scrollAmount;
//       imagesScroller.style.transform = `translateX(${position}px)`;
//     });
//   } else {
//     position = nextPosition;
//     imagesScroller.style.transform = `translateX(${position}px)`;
//   }
// }

// const startAutoScroll = () => {
//   if (isAutoScrolling) return; // Prevent multiple intervals
//   setTimeout(() => {
//     imagesScroller.style.animation = ''; // Set the transition timing function to linear
//   }, 100);
// }

// const stopAutoScroll = () => {
//   imagesScroller.style.animation = 'unset';
//   position = getTranslateX(imagesScroller); // Get the current position
//   isAutoScrolling = false;
// }
// startAutoScroll()
// container.addEventListener('mouseleave', startAutoScroll);

// leftBtn.addEventListener('click', () => {
//   // stopAutoScroll();
//   // scrollImages('left');
//   imagesScroller.classList.toggle('left-moving');
//   setTimeout(() => {
//     imagesScroller.classList.toggle('left-moving');
//   }, 1000); // Adjust the duration to match your animation duration

// });
// rightBtn.addEventListener('click', () => {
//   // stopAutoScroll();
//   // scrollImages('right');
//   imagesScroller.classList.toggle('right-moving');
//   setTimeout(() => {
//     imagesScroller.classList.toggle('right-moving');
//   }, 1000); // Adjust the duration to match your animation duration
// });

});

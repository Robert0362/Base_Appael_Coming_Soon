'use strict'
const mediaQuery = window.matchMedia('(max-width: 1000px)');
const heroPic = document.getElementById('hero');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');


function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log the following message to the console
        console.log('Media Query Matched!')
        heroPic.src = 'images/hero-mobile.jpg';
    }
    else{
        console.log('Big Screen')
        heroPic.src = 'images/hero-desktop.jpg';
    }
  }

function validateEmail(inputText)
{
    let mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.match(mailFormat)){
        emailError.innerHTML = 'Thank you!';
        email.value = '';
        return true;
        
	  }else {
        emailError.innerHTML = 'Looks like this is not an email';
        email.value = '';
        email.innerHTML = '' 
        email.focus();
        return false;
       
      }
}

emailBtn.addEventListener('click', function(){
  let passEmail = email.value;
  console.log(passEmail);
  validateEmail(passEmail);
})

  // Register event listener
  mediaQuery.addEventListener('change', handleTabletChange);
  // Initial check
  handleTabletChange(mediaQuery);
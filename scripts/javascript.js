'use strict'
const mediaQuery = window.matchMedia('(max-width: 1000px)');
const heroPic = document.getElementById('hero');


// Create a media condition that targets viewports at least 1000px wide
;

function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log the following message to the console
        console.log('Media Query Matched!')
        heroPic.src = '../images/hero-mobile.jpg';

    }
    else{
        console.log('Big Screen')
        heroPic.src = '../images/hero-desktop.jpg';
    }
  }
  
  // Register event listener
  mediaQuery.addEventListener('change', handleTabletChange);
  // Initial check
  handleTabletChange(mediaQuery);


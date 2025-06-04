// create an array to hold the image locations
let arrImages = [
    "./images/beach1.jpg",
    "./images/beach2.jpg",
    "./images/beach3.jpg",
    "./images/beach4.jpg"
];

// the first image is at index 0, so we will start there
let iCurrentSlide = 0;

// create a function display the selected image
function displaySlideshowImage(iImgLocation){
    // set up a nickname/shortcut to access the HTML image element that is going to hold the slideshow
    let imgElement = document.getElementById("imgSlide");

    // set the img source for the slideshow to the index of the image array that was passed into the function
    imgElement.src = arrImages[iImgLocation];
}

// function to navigate to the previous slide
function previousSlide(){
    // navigate to the previous slide by subtracting 1 from the current slide counter
    iCurrentSlide = iCurrentSlide - 1;
    // equivalent to iCurrentSlide--;

    // check to see if we have an index less than 0, if so, I want to loop around to the last image in the array
    if (iCurrentSlide < 0){
        // if you want the slideshow to stay on that first image: iCurrentSlide = 0;
        
        // set the index to the length of the array minus 1, so if there are 4 images, we want the index of 3
        iCurrentSlide = arrImages.length - 1;
    }

    // call the function to swap out the image with whatever our index is
    displaySlideshowImage(iCurrentSlide);
}

// function to navigate to the next slide
function nextSlide(){
    // navigate to the next slide by adding 1 to the current slide counter
    iCurrentSlide = iCurrentSlide + 1;
    // equivalent to iCurrentSlide++;

    // check if the current slide index is now of out bounds - is it equal to the length of the array
    if (iCurrentSlide == arrImages.length){
        // you could stay here - iCurrentSlide = arrImages.length - 1;
        // to loop around, change the index to 0
        iCurrentSlide = 0; //show the first slide
    }

    // call the function to swap out the image with whatever our index is
    displaySlideshowImage(iCurrentSlide);
}


// load the first image when the page loads
displaySlideshowImage(iCurrentSlide);
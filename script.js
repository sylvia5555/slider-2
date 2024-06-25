// get slider items array.from()  ES6 feature 
var sliderImages = Array.from(document.querySelectorAll('.slider-container img')),
slidesCount = sliderImages.length;
// set current slide
var currentSlide = 1,
slideNumEle = document.getElementById('slide-number'),
nextBtn = document.getElementById('next'),
prevBtn = document.getElementById('prev');

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

var paginationEle = document.createElement('ul');
paginationEle.setAttribute('id', 'pagination-ul');


for(var li = 1; li <= slidesCount; li++) {
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', li);
    paginationItem.appendChild(document.createTextNode(li));
    paginationEle.appendChild(paginationItem);
}

// var paginationUl = document.getElementById('pagination-ul');
document.getElementById('indicators').appendChild(paginationEle);


var paginationCreatedUl = document.getElementById('pagination-ul');

// get pagination items in an array 
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for(var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        // currentSlide = parseInt(i+1);
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker()
    }
}

checker()
function nextSlide () {
    if(nextBtn.classList.contains('disabled')) {
        return false;
    }else {
    currentSlide++;
    checker()
    }
}
function prevSlide () {
    if (prevBtn.classList.contains('disabled')) {
        return false;
    } else {
    currentSlide--;
    checker()
    }

}

// checker function 

function checker() {

    slideNumEle.textContent = 'Slide #' + currentSlide + ' of ' + (slidesCount);
    
    removeAllActives();

    sliderImages[currentSlide - 1].classList.add('active');
    
    paginationCreatedUl.children[currentSlide-1].classList.add('active');

    // check if the current slide is the first
    if(currentSlide === 1) {
        prevBtn.classList.add('disabled');
    } else if (currentSlide === slidesCount) {
        nextBtn.classList.add('disabled');
    } 
    else {
        prevBtn.classList.remove('disabled');
        nextBtn.classList.remove('disabled');
    }
    
    
}

checker();

function removeAllActives() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    })

    paginationBullets.forEach(ele => {
        ele.classList.remove('active');
    });
}
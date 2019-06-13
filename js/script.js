
// modal windows
var linkWriteUs = document.querySelector('.link-write-us');
var linkMap = document.querySelector('.link-map');
var linkBuy = document.querySelectorAll('.buy');

if (linkWriteUs) {
	var modalWriteUs = document.querySelector('.modal-write-us');
	var closeButton = modalWriteUs.querySelector('.modal-close');

	closeButton.addEventListener('click',function (evt) {
		evt.preventDefault();
		modalWriteUs.classList.remove('modal-show');
	});

	linkWriteUs.addEventListener('click',function (evt) {
		evt.preventDefault();
		modalWriteUs.classList.add('modal-show');
	});
}

if (linkMap) {
	var modalMap = document.querySelector('.modal-map');
	var closeButton = modalMap.querySelector('.modal-close');

	closeButton.addEventListener('click',function (evt) {
		evt.preventDefault();
		modalMap.classList.remove('modal-show');
	});

	linkMap.addEventListener('click', function(evt) {
		evt.preventDefault();
		modalMap.classList.add('modal-show');
	});

}

if (linkBuy) {
	var modalOrder = document.querySelector('.modal-order');
	var closeButton = modalOrder.querySelector('.modal-close');
	var continueToShop = modalOrder.querySelector('.button-cancel');

	closeButton.addEventListener('click',function (evt) {
		evt.preventDefault();
		modalOrder.classList.remove('modal-show');
	});

	continueToShop.addEventListener('click',function (evt) {
		evt.preventDefault();
		modalOrder.classList.remove('modal-show');
	});

	for (var i=0; i<linkBuy.length; i++ ) {
		linkBuy[i].addEventListener('click', function (evt) {
			evt.preventDefault();
			modalOrder.classList.add('modal-show');
		});
	}
}

// slider

var slideIndex = 1;
showSlides(slideIndex);

var nextButton = document.querySelector('.next');
nextButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	slideIndex++;
	showSlides(slideIndex);
});

var prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	slideIndex--;
	showSlides(slideIndex);
});

var radioSwithesContainer = document.querySelector('.radio-swithes');
radioSwithesContainer.addEventListener('click', function (evt) {
	var target = evt.target || evt.srcElement;
	for(var i = 0; i < radioSwithesContainer.children.length; i++) {
		if (radioSwithesContainer.children[i] == target)  {
			slideIndex = ++i;
			showSlides(slideIndex);
		}
	}
});

function showSlides(numberOfSlide) {
	var slides = document.querySelectorAll('div.item');
	var switchers = document.querySelectorAll('.radio-switcher-item');
	
	if (numberOfSlide > slides.length) {
		slideIndex = 1;
	}
	if (numberOfSlide < 1) {
		slideIndex = slides.length
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < switchers.length; i++) {
		switchers[i].className = switchers[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	switchers[slideIndex - 1].className += " active";
}
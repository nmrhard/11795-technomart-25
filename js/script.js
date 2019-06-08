var linkWriteUs = document.querySelector('.link-write-us');
var modalWriteUs = document.querySelector('.modal-write-us');

var linkMap = document.querySelector('.link-map');
var modalMap = document.querySelector('.modal-map');

var linkBuy = document.querySelector('.buy');
var modalOrder = document.querySelector('.modal-order');

linkWriteUs.addEventListener('click',function (evt) {
	evt.preventDefault();
	modalWriteUs.classList.add('modal-show');

	var closeButton = modalWriteUs.querySelector('.modal-close');
	closeButton.addEventListener('click',function (evt) {
		evt.preventDefault();
		modalWriteUs.classList.remove('modal-show');
	});
});

linkMap.addEventListener('click', function(evt) {
	evt.preventDefault();
	modalMap.classList.add('modal-show');

	var closeButton = modalMap.querySelector('.modal-close');
	closeButton.addEventListener('click',function (evt) {
		evt.preventDefault();
		modalMap.classList.remove('modal-show');
	});
});

linkBuy.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalOrder.classList.add('modal-show');

	var closeButton = modalOrder.querySelector('.modal-close');
	closeButton.addEventListener('click',function (evt) {
		evt.preventDefault();
		modalOrder.classList.remove('modal-show');
	});
});

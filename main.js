var slideShowSelection = function(index, idTarget) {

	var targetEffect = document.getElementById(idTarget);

	slideIndex = index;
	slideShowEffectCurrent = idTarget;

	showBase.setAttribute('src', slideImg[index]);
	targetEffect.setAttribute('style', 'border: solid 1.5px #BB77BB');

	if ( !slideShowTargetEffectOld ) {
		slideShowTargetEffectOld = idTarget;
	} else {
		document.getElementById(slideShowTargetEffectOld).setAttribute('style', 'none');
		slideShowTargetEffectOld = idTarget;
	}
	return 0;
};

var autoSlide = function() {
	setInterval(function() {
		if ( slideIndex === slideImg.length - 1  ) {
			slideIndex = 0;
			
			slideShowEffectCurrent = slideShowEffectCurrent.split('-');
			slideShowEffectCurrent[2] = 0;
			slideShowEffectCurrent = slideShowEffectCurrent.join('-');
		} else {
			slideIndex ++;
			
			slideShowEffectCurrent = slideShowEffectCurrent.split('-');
			slideShowEffectCurrent[2] = parseInt(slideShowEffectCurrent[2]) + 1;
			slideShowEffectCurrent = slideShowEffectCurrent.join('-');
		}
			return slideShowSelection(slideIndex, slideShowEffectCurrent);
	}, 2000);
}

var showBase = document.getElementById('slide-show-main-bg');
var slideIndex = 0;
var slideShowEffectCurrent = 'slideShow-selector-0';
var slideShowTargetEffectOld;

autoSlide(slideIndex);
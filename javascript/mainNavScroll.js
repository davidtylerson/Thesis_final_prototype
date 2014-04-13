
	var myScroll;
	var position;

	function updatePosition () {
		position.innerHTML = this.x>>0;
	}

	function makeSmall(){
		$('.three').removeClass('big');
		$('.four').removeClass('big');
		$('.five').removeClass('big');
		$('.six').removeClass('big');
		$('.seven').removeClass('big');
		$('.eight').removeClass('big');
		$('.nine').removeClass('big');
		$('.ten').removeClass('big');
	}

	function printPosition () {
		console.log(position.innerHTML);
		if(position.innerHTML == 0){
			console.log('yeah');
			makeSmall();
			$('.three').addClass('big');
		}else if(position.innerHTML == -120){
			console.log('yeah');
			makeSmall();
			$('.four').addClass('big');
		} else if(position.innerHTML == -240){
			makeSmall();
			$('.five').addClass('big');
		}else if(position.innerHTML == -360){
			makeSmall();
			$('.six').addClass('big');
		}else if(position.innerHTML == -480){
			makeSmall();
			$('.seven').addClass('big');
		}else if(position.innerHTML == -600){
			makeSmall();
			$('.eight').addClass('big');
		}else if(position.innerHTML == -720){
			makeSmall();
			$('.nine').addClass('big');
		}else if(position.innerHTML == -840){
			makeSmall();
			$('.ten').addClass('big');
		}
	}

	function loaded () {
		position = document.getElementById('position');
		myScroll = new IScroll('#wrapper', {scrollX: true, scrollY: false, preventDefault: false, snap: 'li', probeType: 3, mouseWheel: true});
		myScroll.on('scrollEnd', updatePosition);
		myScroll.on('scrollEnd', printPosition);
	}

	$(window).on("load",function(){
		console.log('hello world');
		$('.three').addClass('big');

		position = document.getElementById('position');

	});

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
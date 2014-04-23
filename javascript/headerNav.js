	
	var myScroll;

	function loaded () {
		myScroll = new IScroll('.image_wrapper', {scrollX: true, scrollY: false, preventDefault: false,snap: 'li', mouseWheel: true, click: true,});
		myScroll = new IScroll('#wrapper', {scrollX: true, scrollY: false, preventDefault: false, snap: 'li', probeType: 3, mouseWheel: true});
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


	function navScroll () {
				myScroll.on('scrollEnd', function () {
		console.log(this.x);
		if(this.x == 0){
			makeSmall();
			$('.three').addClass('big');
		}else if(this.x == -120){
			makeSmall();
			$('.four').addClass('big');
		} else if(this.x == -240){
			makeSmall();
			$('.five').addClass('big');
		}else if(this.x == -360){
			makeSmall();
			$('.six').addClass('big');
		}else if(this.x == -480){
			makeSmall();
			$('.seven').addClass('big');
		}else if(this.x == -600){
			makeSmall();
			$('.eight').addClass('big');
		}else if(this.x == -720){
			makeSmall();
			$('.nine').addClass('big');
		}else if(this.x == -840){
			makeSmall();
			$('.ten').addClass('big');
		}
	});
			}
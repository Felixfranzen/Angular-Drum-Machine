angular.module("main", ["soundsFactory", "numericalBinding"])

.controller("mainController", appController);

appController.$inject = ["$timeout", "sounds"]
function appController($timeout, sounds){
	var vm = this;

	vm.sounds = sounds.getSounds();
	vm.update = sounds.updatePattern;

	vm._playing = false;
	vm._currenttick = 0;
	vm._maxTick = vm.sounds[0].pattern.length;
	
	vm.timer = 125;
	vm.play = play;
	vm.pause = pause;
	vm.stop = stop;
	vm.rewind = rewind;
	vm.clearPattern = clearPattern;
	vm.clearSoundPattern = clearSoundPattern;
	vm.keypress = keypress;

	function play(){
		if (vm._playing === false){
			vm._playing = true;
			playaudio();
		}

		function playaudio(){
			if (!vm._playing){return}

			if (vm._currenttick >= vm._maxTick){
				vm._currenttick = 0;
			}

			for (s in vm.sounds){
				var soundobject = vm.sounds[s];
				if (soundobject.pattern[vm._currenttick] === 1){
					soundobject.sound.volume(0.6);
					soundobject.sound.play();
				} if (soundobject.pattern[vm._currenttick] === 2){
					soundobject.sound.volume(1);
					soundobject.sound.play();
				}
				
			}
			vm._currenttick++;
			$timeout(playaudio, 60000/vm.timer/4)
		}

	}

	function pause(){
		vm._playing = false;
	}

	function stop(){
		vm._playing = false;
		vm._currenttick = 0;
	}

	function rewind(){
		vm._currenttick = 0;
	}

	function clearPattern(){
		for (s in vm.sounds){
			var pattern = [];
			for (i = 0; i < vm._maxTick; i++){
				pattern.push(0);
			}
			
			vm.sounds[s].pattern = pattern;
		}
	}

	function clearSoundPattern(obj, $index){
		var pattern = [];
		for (i = 0; i < vm._maxTick; i++){
			pattern.push(0);
		}	
		obj.pattern = pattern;
	}

	function keypress(event){
		if (event.which === 49){
			play();
		} else if (event.which === 50){
			pause();
		} else if (event.which === 51){
			stop();
		} else if (event.which === 52){
			rewind();
		} else if (event.which === 53){
			clearPattern();
		} else if (event.which === 54){
			if (vm.timer > 50){
				vm.timer-= 1;
			}
		} else if (event.which === 55){
			if (vm.timer < 200){
				vm.timer+= 1;
			}
		}
	}
}




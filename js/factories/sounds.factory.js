angular.module("soundsFactory", [])
.factory("sounds",sounds)


function sounds(){

	var sounds = [
			{
				name: "Kick",
				sound: new Howl({urls:["assets/sounds/kick.wav"]}),
				pattern: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]
			},
			{
				name: "Clap",
				sound: new Howl({urls:["assets/sounds/clap.wav"]}),
				pattern: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]
			},
			{
				name: "Hi-Hat",
				sound: new Howl({urls:["assets/sounds/hihat.wav"]}),
				pattern: [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0]				
			},
			{
				name: "Tom Low",
				sound: new Howl({urls:["assets/sounds/tomlow.wav"]}),
				pattern: [0,0,1,0,0,2,0,0,0,0,0,1,0,0,2,0]				
			},
			{
				name: "Tom Mid",
				sound: new Howl({urls:["assets/sounds/tommid.wav"]}),
				pattern: [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]				
			},
			{
				name: "Tom high",
				sound: new Howl({urls:["assets/sounds/tomhigh.wav"]}),
				pattern: [0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0]				
			}];

	return {
		getSounds: getSounds,
		updatePattern: updatePattern
	}

	function getSounds(){
		return sounds;
	
	}
	function updatePattern(object, index){
		var value = object.pattern[index];	
		if (value === 0){
			object.pattern[index] = 1;
		} else if (value === 1) {
			object.pattern[index] = 2;			
		} else {
			object.pattern[index] = 0;
		}
	}
}
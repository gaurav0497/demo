// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
(function(window){
	var byeSpeaker = {};
	var speakWord = "Good Bye";


	byeSpeaker.speak=function (name) {
  	console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;


})(window);



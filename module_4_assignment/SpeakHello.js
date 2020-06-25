// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
(function(window){
 	var helloSpeaker = {};
 	var speakWord = "Hello";
 	helloSpeaker.speak= function (name) {
  		console.log(speakWord + " " + name); }

  	window.helloSpeaker= helloSpeaker;
  		
})(window);




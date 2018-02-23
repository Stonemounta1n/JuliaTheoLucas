annyang.start({
	autoRestart: true
});
    
    // WRITE COMMANDS BELLOW
    
if (annyang) {
  
 
    // COMMANDS ON INDEX PAGE
   var commands = { 
    
		'first page': function() {
			console.log('index');
			var utterance = new SpeechSynthesisUtterance('first page');
			window.speechSynthesis.speak(utterance);
			document.location.href = 'index.html';
		},
     
		'start *presentation': function() {
			console.log('start presentation');
			var utterance = new SpeechSynthesisUtterance('start presentation');
			window.speechSynthesis.speak(utterance);
			document.location.href = 'presentation1.html';
		},
	 
		  //AUDIO COMMAND
		  'introduce yourself *annyang': function() {
			console.log('audio start')
		   var audio = new Audio('https://cdn.glitch.com/39f0fd15-d133-4051-8325-fd3a4e25480e%2Fannyang-presentation-mp3-man.mp3?1519326621055');
		   audio.play();
		   }, 

		'demo': function() {
			console.log('page two');
			var utterance = new SpeechSynthesisUtterance('start demo');
			window.speechSynthesis.speak(utterance);
			window.location.href = 'https://lyrical-oak.glitch.me/';
			console.log('presentation start');
		},
  
		'page three': function() {
			console.log('page three');
			var utterance = new SpeechSynthesisUtterance('change to page three');
			window.speechSynthesis.speak(utterance);
			document.location.href = 'presentation3.html';
			console.log('presentation start');
		},
	};

	annyang.addCommands(commands);
	annyang.start();
}
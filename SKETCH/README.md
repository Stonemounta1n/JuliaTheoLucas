
<h1>USE ANNYANG, SPEECH RECOGNITION FOR PRESENTATIONS.</h1>


<h3>The idea of an alternative presentation method! </h3>


- Commands.js control the different commands. Only your imagination set the limits!

- Index, presentation1, presentation2, presentation3 are different pages of your presentation. 

- Change the CSS according to your demands.

<b>Example of a command</b>
    
		'first page': function() {
			console.log('index');
			var utterance = new SpeechSynthesisUtterance('first page');
			window.speechSynthesis.speak(utterance);
			document.location.href = 'index.html';
		},
     


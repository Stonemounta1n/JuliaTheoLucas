<h1>AnnYang voicecommand API</h1>

* <b>Commands.js controls the different commands.</b>

* <b>Index</b>

* <b>Different voice commands open different websites.</b>

<h2>Example of a command</h2>


'Standings': function() {
      console.log('Standings works');
      var utterance = new SpeechSynthesisUtterance('Here are the current NHL Standings, master');
window.speechSynthesis.speak(utterance);
      window.open("https://www.nhl.com/standings/2017/division");
  },

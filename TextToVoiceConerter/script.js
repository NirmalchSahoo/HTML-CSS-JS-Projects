/* let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector('select');
// to get all the voices available
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// chnage the language for voice change

voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value];
});

// click event for the click button to convert text to speech
document.querySelector('button').addEventListener('click', () => {
  speech.text = document.querySelector('textarea').value;
  window.speechSynthesis.speak(speech);
});
 */

/* let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');
let isPlaying = false; // Track if the speech is playing
let progressBar = document.querySelector('.progress-bar');

// to get all the voices available
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// change the language for voice change
voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value];
});

// click event for the button to convert text to speech
let playButton = document.querySelector('button');
let playIcon = 'images/playy.png';  // Play icon path
let pauseIcon = 'images/pausee.png'; // Pause icon path
let imgElement = playButton.querySelector('img');

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    // Start speech and change to pause icon
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
    imgElement.src = pauseIcon;
    isPlaying = true;
  } else {
    // Stop speech and change to play icon
    window.speechSynthesis.cancel();
    imgElement.src = playIcon;
    isPlaying = false;
  }
});

// In the JavaScript, update the `onend` event listener to hide the progress bar:
speech.onend = () => {
  imgElement.src = playIcon; // Revert back to play icon when speech ends
  isPlaying = false;
  progressBar.style.opacity = 0; // Hide the progress bar
}; */

/* let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');
let isPlaying = false; // Track if the speech is playing
let playButton = document.querySelector('button');
let progressBar = document.querySelector('.progress-bar');
let playIcon = 'images/playy.png';  // Play icon path
let pauseIcon = 'images/pausee.png'; // Pause icon path
let imgElement = playButton.querySelector('img');

// To get all the voices available
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// Change the language for voice change
voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value];
});

// Function to update progress bar
function updateProgressBar(duration) {
  progressBar.style.transition = `width ${duration}s linear`;
  progressBar.style.width = '100%'; // Fill the bar to 100% over the duration
}

// Click event for the button to convert text to speech
playButton.addEventListener('click', () => {
  if (!isPlaying) {
    // Start speech and change to pause icon
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);

    // Reset progress bar
    progressBar.style.width = '0%';
    
    // Approximate duration of the speech
    let textLength = speech.text.length;
    let duration = textLength / 10; // Approximation: adjust based on your needs

    // Start progress bar animation
    updateProgressBar(duration);

    imgElement.src = pauseIcon;
    isPlaying = true;
  } else {
    // Stop speech and reset progress bar
    window.speechSynthesis.cancel();
    progressBar.style.width = '0%';
    imgElement.src = playIcon;
    isPlaying = false;
  }
});

// Event listener when the speech ends
speech.onend = () => {
  progressBar.style.width = '0%';  // Reset the progress bar
  imgElement.src = playIcon;       // Revert back to play icon when speech ends
  isPlaying = false;
};
 */


let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');
let isPlaying = false; // Track if the speech is playing
let playButton = document.querySelector('button');
let progressBar = document.querySelector('.progress-bar');
let playIcon = 'images/playy.png';  // Play icon path
let pauseIcon = 'images/pausee.png'; // Pause icon path
let imgElement = playButton.querySelector('img');

// Get all available voices
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// Change the language/voice
voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value];
});

// Function to update progress bar
function updateProgressBar(duration) {
  progressBar.style.transition = `width ${duration}s linear`;
  progressBar.style.width = '100%'; // Progress the bar to 100% over the duration
}

// Click event to convert text to speech
playButton.addEventListener('click', () => {
  if (!isPlaying) {
    // Start speech and change to pause icon
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);

    // Reset progress bar before starting
    progressBar.style.transition = 'none'; // Disable transition for reset
    progressBar.style.width = '0%';

    // Calculate approximate duration of speech
    let textLength = speech.text.length;
    let duration = textLength / 10; // Approximation: adjust based on your needs

    // Start progress bar animation
    setTimeout(() => {
      progressBar.style.transition = `width ${duration}s linear`;
      progressBar.style.width = '100%';
    }, 50); // Small delay to ensure reset happens instantly

    imgElement.src = pauseIcon;
    isPlaying = true;
  } else {
    // Stop speech and reset progress bar
    window.speechSynthesis.cancel();
    progressBar.style.width = '0%';
    imgElement.src = playIcon;
    isPlaying = false;
  }
});

// Event listener when speech ends
speech.onend = () => {
  imgElement.src = playIcon; // Revert back to play icon when speech ends
  isPlaying = false;

  // Keep the progress bar at 100% to indicate completion
  progressBar.style.width = '100%';

  // After a small delay, reset the progress bar and button color
  setTimeout(() => {
    progressBar.style.transition = 'none';  // Stop the transition
    progressBar.style.width = '0%';         // Reset progress bar width
    playButton.style.background = '#ff2963'; // Reset button to original color
  }, 1000); // Adjust the delay if needed
};

// Program will read words from 10fastfingers.com and input them word by word, waiting for the user to input the word using the spacebar :P
// Yes, this can be used to cheat. Please use this script responsibly!

// Let's pretend to type at 150 WPM!
(async () => {
  const targetWPM = 1000; // 1000 makes the words appear almost instantly so you can spam the spacebar :0
  // Calculate delay between letters
  const delay = (60 / targetWPM) * 1000 / 5;

  // Wait for user to press spacebar
  async function waitForSpacebar() {
    return new Promise((resolve) => {
      function handleSpacebar(event) {
        if (event.code === 'Space') {
          document.removeEventListener('keyup', handleSpacebar);
          resolve();
        }
      }
      document.addEventListener('keyup', handleSpacebar);
    });
  }

  // Type a single letter with delay
  async function typeLetter(letter) {
    const inputElement = document.querySelector('#inputfield');
    return new Promise((resolve) => {
      setTimeout(() => {
        inputElement.value += letter;
        inputElement.dispatchEvent(new InputEvent('input'));
        resolve();
      }, delay);
    });
  }

  // Type an entire word
  async function typeWord(word) {
    const letters = word.textContent.split('');
    for (const letter of letters) {
      await typeLetter(letter);
    }
  }

  // Main typing test loop
  async function runTypingTest() {
    const words = document.querySelectorAll('#words span'); //Get all spans with classname words
    for (let i = 0; i < words.length - 1; i++) {
      await typeWord(words[i]);
      await waitForSpacebar();
    }
    await typeWord(words[words.length - 1]);
  }

  runTypingTest();
})();

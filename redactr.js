document.getElementById('redactButton').addEventListener('click', function() {
    // Get the original text and words to redact
    const originalText = document.getElementById('originalText').value;
    const wordsToRedact = document.getElementById('wordsToRedact').value.split(',');
    
    // Function to escape special characters in the replacement text

  
    // Variables for statistics
    let wordsScanned = 0;
    let wordsMatched = 0;
    let totalCharactersScrambled = 0;
  
    // Start the timer
    const startTime = performance.now();
  
    // Replace specified words with "REDACTED"
    let redactedText = originalText;
    wordsToRedact.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi'); // Create a regex to match whole words
      const matches = redactedText.match(regex);
      if (matches) {
        wordsMatched += matches.length;
        matches.forEach(match => {
          totalCharactersScrambled += match.length;
        });
      }
      redactedText = redactedText.replace(regex, "****");
    });
  
    // Calculate the time taken
    const endTime = performance.now();
    const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
  
    // Display redacted text and stats
    document.getElementById('redactedText').textContent = redactedText;
    document.getElementById('stats').innerHTML = `
      <p>Words Scanned: ${wordsScanned}</p>
      <p>Words Matched: ${wordsMatched}</p>
      <p>Total Characters Scrambled: ${totalCharactersScrambled}</p>
      <p>Time Taken (seconds): ${timeTaken}</p>
    `;
  });
  
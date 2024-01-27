	// Initialize variables to keep track of correct answers and total attempts
  var correctAnswers = 0;
  var totalAttempts = 0;
  var imgElement = document.querySelectorAll('img')[0];

  
  // Get all the buttons
  const buttons = document.querySelectorAll('button');
  
  // Add a click event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Generate a random number between 1 and 6
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      
      // Check if the button's value matches the random number
      // if (parseInt(button.textContent) === randomNumber) {
      //   document.getElementById('result').textContent = "Correct!";
      //   correctAnswers++;
      // } else {
      //   document.getElementById('result').textContent = "Incorrect!";
      // }
       if(parseInt(button.textContent) === randomNumber){
        document.getElementById('result').textContent = "Correct!";
        correctAnswers++;
        imgElement.src="./images/dice-1";
        
       }




      // Increment the total attempts counter
      totalAttempts++;
      
      // Update the statistics
      const percentage = Math.round(correctAnswers / totalAttempts * 100);
      document.getElementById('stats').textContent = `Correct answers: ${correctAnswers} / Total attempts: ${totalAttempts} (${percentage}%)`;
    });
  });
  
  
function checkAnswer(choice) {
    let resultText = "Correct! Madrid is the capital of Spain";
    if (choice === "Madrid") {
        
    } else {
        resultText = "Wrong answer. Try again.";
    }

    document.getElementById("result").textContent = resultText;
 }
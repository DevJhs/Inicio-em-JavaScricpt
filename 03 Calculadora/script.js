function displaynum(n1){
    calculator.text1.value=calculator.text1.value+n1;

}

document.addEventListener("keydown", function(event) {
    event.preventDefault();
    const key = event.key;
    switch (key) {
     case "Enter":
        console.log("enter");
        text1.value=eval(text1.value);
    }
  });
  
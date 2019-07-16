// function to render button 2 page 
// g is the type of result 
// n is the guessed number
// r is the random 

/*
function renderButton2AfterGuess(g, n, r) {

    const htmlFormElement = document.createElement('form');
    htmlFormElement.noValidate = false;
    htmlFormElement.name = 'btn1form';
    if (g = 1) {
        // guess too low     
        htmlFormElement.innerHTML = '<p> Your guess was too low  !<br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';
    }

    if (g = 2) {
        // guess too high 
        htmlFormElement.innerHTML = '<p> Your guess was too high !<br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';
    }


    //Now build the submit button if they get another turn
    if (g < 3) {
        /// rebuild the button if they need to keep guessing 
        const submitBtn = document.createElement('button');
        submitBtn.innerText = 'Submit';
        submitBtn.classList.add('btn', 'btn-primary');
        submitBtn.type = 'submit';
    }

    if (g = 3) {

        // too many guesses 
        htmlFormElement.innerHTML = '<p> Too many guesses. number I was thinking of was  !' + n + '<br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';
    }

    if (g = 4) {

        // win 
        htmlFormElement.innerHTML = '<p> You win  !' + '<br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';
    }
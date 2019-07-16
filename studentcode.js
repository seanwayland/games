"use strict";

function isInRange(a) {

    if (a < 1 || a > 20)
        alert("invalid")
    else
        alert("vaild")

}

function renderButton() {
    var g = 3;
}




addEventToButton(2, function(event) {
    var guesses = 0; // number of attempted guesses 
    var num = Math.floor(Math.random() * 20) + 1 // random number chosen 

    const htmlFormElement = document.createElement('form');
    htmlFormElement.noValidate = false;
    htmlFormElement.name = 'btn1form';
    htmlFormElement.innerHTML = '<p> Please enter a number (integer) between 1 and 20 !<br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';
    //Or the second:
    //Now build the submit button
    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Submit';
    submitBtn.classList.add('btn', 'btn-primary');
    submitBtn.type = 'submit';


    //And append the email address and submit button to the form
    //htmlFormElement.append(htmlFormGroupElement);
    htmlFormElement.append(submitBtn);
    //OK, now we need to do something when the form is submitted...
    htmlFormElement.addEventListener(
        'submit',
        function(event) {

            event.preventDefault();
            const formData = new FormData(event.target);
            console.debug('I have downloaded the form!', {
                event,
                formData
            });
            var n = formData.get('number');
            guesses++;
            if (n < 1 || n > 20) { alert("invalid input please enter a number between 1 and 20 ") } else {



                if (n < num) {

                    htmlFormElement.innerHTML = htmlFormElement.innerHTML = '<p> Too Low. Guess again  !<br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';
                    htmlFormElement.append(submitBtn);
                    // alert(num);
                } else if (n > num) {

                    htmlFormElement.innerHTML = htmlFormElement.innerHTML = '<p> Too High. Guess again  !<br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';
                    htmlFormElement.append(submitBtn);
                    // alert(num);
                } else if (n == num) {

                    htmlFormElement.innerHTML = htmlFormElement.innerHTML = '<p> You guessed it   !<br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';
                    htmlFormElement.append(submitBtn);
                    //  alert(guesses);
                }


                if (guesses == 5 && n == num) {
                    document
                        .getElementById('renderhere')
                        .innerHTML = '<p> You ran out of guesses.  I guessed ' + num + '</p>'
                }



            }
        }

    );

    document
        .getElementById('renderhere')
        .childNodes.forEach(value => value.remove());

    document
        .getElementById('renderhere')
        .append(htmlFormElement);


    //htmlFormElement.append(submitBtn);
});
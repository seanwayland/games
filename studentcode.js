"use strict";


/*
### Button 2: Number guessing game
Your code should:
 * Randomly select a number between 1 and 20
 * Prompt the user to enter a number (between 1 and 20).
    * reject input outside this range, but do not count that as a guess
 * If the user gets it right, display "You guessed correctly!"
 * If the user gets it wrong, prompt them to guess again
    * If they guess too high, you should say "too high"
    * If they guess too low, you should say "too low"
 * If the user gets it wrong five times, tell them they ran out of guesses and what the number was.
 
Cypress will be searching for:
 * An `input` with a `type` set to `number` where I can type my guess
 * A `button` to submit my guess
 * A `span` with a property `data-output` set to `guesses` (which should start at 0)
 * The text "too high" or "too low" being on the page (alongside the input button) if an incorrect guess is made
 * The text "number I was thinking of was X" being on the page (where X is not the number I guessed) if I lost
 * "You win!" being on the page if I win
 * */


addEventToButton(2, function (event) {
    var Guesses = 0; // number of attempted guesses 
    var num = Math.floor(Math.random() * 20) + 1 // random number chosen 

    const htmlFormElement = document.createElement('form');

    var gg = document.createElement("SPAN");
    gg.setAttribute("data-output", "guesses");
    htmlFormElement.appendChild(gg);

    htmlFormElement.noValidate = false;
    htmlFormElement.name = 'btn1form';

    //let guesses = document.createElement(HTMLSpanElement(data-output));

    //span[data-output="guesses"]',
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
        function (event) {

            event.preventDefault();
            const formData = new FormData(event.target);
            console.debug('I have downloaded the form!', {
                event,
                formData
            });
            var n = formData.get('number');
            if (n == "") {
                alert("invalid input please enter a number between 1 and 20 ")
            } else {


                /// validate input 
                if (n < 1 || n > 20) {
                    alert("invalid input please enter a number between 1 and 20 ")
                } else {


                    if (n < num) {
                        /// guessed number is less than number 
                        htmlFormElement.innerHTML = '<p> Too low! Guess again  ! <span data-output=”guesses”></span> <br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';


                        Guesses++
                        htmlFormElement.append(submitBtn);

                    } else if (n > num) {
                        /// guessed number is greater than number 
                        htmlFormElement.innerHTML = '<p> Too High! Guess again  ! <span data-output=”guesses”></span> <br /> </p><div class="form-group"><label for="btn1name">Number</label><input type="number" class="form-control" name="number" required="required" id="btn1name" placeholder="Number" /></div>';
                        //htmlFormElement.innerHTML = '<p> Too low! Guess again  !<span data-output=”guesses”></span> /p>'

                        Guesses++
                        htmlFormElement.append(submitBtn);

                    } else if (n == num) {
                        /// guessed correctly 
                        document
                            .getElementById('renderhere')
                            .innerHTML = '<p> You guessed it !!! </p>'

                    }

                    /// ran out of guesses 
                    if (Guesses == 5 && n != num) {
                        document
                            .getElementById('renderhere')
                            .innerHTML = '<p> You ran out of guesses.  I guessed ' + num + '</p>'
                    }


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


});



addEventToButton(3, function (event) {


    var cars = ["Assessment one", "Assesment two", "Boids"];
    document.getElementById('renderhere').childNodes.forEach(value => value.remove());
    document.getElementById('renderhere').innerHTML = "";

    //create title and delete button and add button on their own element

    var page3 = document.createElement('div');

    var title = document.createElement('div');
    title.textContent = "To do list. To add items fill out field and hit add button. To Delete check box below and hit delete ";
    title.setAttribute('class', 'note');
    page3.append(title);

    var deleteBtn3 = document.createElement('button');
    deleteBtn3.innerText = 'Delete';
    deleteBtn3.classList.add('btn', 'btn-primary');
    deleteBtn3.type = 'submit';
    page3.append(deleteBtn3);

    var addBtn3 = document.createElement('button');
    addBtn3.innerText = 'Add';
    addBtn3.classList.add('btn', 'btn-primary');
    addBtn3.type = 'submit';
    page3.append(addBtn3);

    var elements = document.createElement('div');


    for (var c in cars) {

        var newElement = document.createElement('div');
        newElement.id = 'item' + c;
        newElement.className = "car";
        newElement.innerHTML = cars[c];
        elements.appendChild(newElement);
        var x = document.createElement("INPUT");
        x.id = 'chkBut' + c;
        x.className = "car"
        x.setAttribute("type", "checkbox");
        elements.appendChild(x);

    }


    var entry = document.createElement("FORM");
    entry.setAttribute("id", "myForm");
    page3.append(entry);


    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("value", "New To do Item");
    entry.appendChild(y);


    document.getElementById('renderhere').append(page3);
    document.getElementById('renderhere').append(elements);


    deleteBtn3.addEventListener('click', function (event) {

        // alert("hi");

        let removeValFromIndex = []; // array to store values to be removed 

        for (var d in cars) {

            // check for checked buttons and add to array of indexes to be removed 
            var i = 'chkBut' + d;
            var x = document.getElementById(i).checked;
            if (x) {
                removeValFromIndex.push(d)
            }
        }

        // remove checked items from list 
        for (var i = removeValFromIndex.length - 1; i >= 0; i--) {
            cars.splice(removeValFromIndex[i], 1);
        }

        // alert(cars.toString());

        var els = document.getElementsByClassName("car");
        while (els.length > 0) {
            els[0].parentNode.removeChild(els[0]);
        }


        for (var c in cars) {

            var newElement = document.createElement('div');
            newElement.id = 'item' + c;
            newElement.className = "car";
            newElement.innerHTML = cars[c];
            elements.appendChild(newElement);
            var x = document.createElement("INPUT");
            x.id = 'chkBut' + c;
            x.className = "car"
            x.setAttribute("type", "checkbox");
            elements.appendChild(x);

        }


        // document.getElementById('elements').childNodes.forEach(value => value.remove());
        document.getElementById('renderhere').innerHTML = "";
        document.getElementById('renderhere').append(page3);
        document.getElementById('renderhere').append(elements);

    });


    addBtn3.addEventListener('click', function (event) {

        var txt = y.value;
        cars.push(txt);

        //alert(cars.toString());

        var els = document.getElementsByClassName("car");
        while (els.length > 0) {
            els[0].parentNode.removeChild(els[0]);
        }


        for (var c in cars) {

            var newElement = document.createElement('div');
            newElement.id = 'item' + c;
            newElement.className = "car";
            newElement.innerHTML = cars[c];
            elements.appendChild(newElement);
            var x = document.createElement("INPUT");
            x.id = 'chkBut' + c;
            x.className = "car"
            x.setAttribute("type", "checkbox");
            elements.appendChild(x);

        }


        // document.getElementById('elements').childNodes.forEach(value => value.remove());
        document.getElementById('renderhere').innerHTML = "";
        document.getElementById('renderhere').append(page3);
        document.getElementById('renderhere').append(elements);

    });


});
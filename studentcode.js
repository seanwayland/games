"use strict";


/**
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


/**
 * Button 3: To-do list

 Your code should:

 Allow users to add items to a to-do list by way of a text input field and an "Add" button
 Allow users to "check" items off on this list
 Allow users to delete checked items off the list by clicking "Delete"
 You are not required to build a delete button for each item on the list, only "checked" items.

 Cypress will be searching for:

 An input field of type text
 A button with text "Delete"
 A button with text "Add"
 A checkbox, followed by a label that matches what it entered.
 */



addEventToButton(3, function (event) {

    // initial to do list

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


    /// sort through array and generate title and button for each item in list
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

   // entry form for to do list
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

/**

 Button 4: Nought and crosses

 Your code should:

 Render a table on the page in a 3x3 grid
 Display whose turn it is by saying either "Noughts turn!" or "Crosses turn!"
 When the game is won, display "Noughts wins!" or "Crosses wins!"
 When the game is a draw, display "Draw!"
 Cypress will be searching for:

 A table
 The text as above
 The table should allow me to click on something in the cell or the cell itself
 The cells should contain 'X' for a played cross and 'O' (Capital o) for played Nought
 That I cannot play on an already played cell


 */

/**
 *
 *
 * .container {
    width: 223px;
    background: lightpink;
    padding: 10px;
    border-radius: 8px;
    margin: 30px auto;
    display: flex;
    flex-flow: row wrap;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}



 .box {
    min-width: 70px;
    min-height: 70px;
    display: inline-block;
    border: 2px solid lightpink;
    background: white;
    border-radius: 3px;
    margin: 0;
    padding: 0;
}


 */

addEventToButton(4, function (event) {


    var toggle = true;
    var numPlays = 0;






    let icon = 'X'

    document.getElementById('renderhere').childNodes.forEach(value => value.remove());
    document.getElementById('renderhere').innerHTML = "";

    /*
    <div class="messages">
        <h2>Crosses start</h2>
    </div>
    <div class="instructions">
        <p>Click in a box to play</p>
    </div>

     */
    var messages = document.createElement('div');
    messages.id = "mess";
    messages.classname = "messages";
    messages.innerHTML = "<h2>Crosses start</h2>";


    var instructions = document.createElement('div');
    instructions.id = "instructions";
    instructions.classname = "instructions";
    instructions.innerHTML = "<p>Click in a box to play</p>";

    var idArray = ['itile0', 'itile1', 'itile2', 'itile3', 'itile4', 'itile5', 'itile6', 'itile7', 'itile8'];
    var idtArray = ['ttile0', 'ttile1', 'ttile2', 'ttile3', 'ttile4', 'ttile5', 'ttile6', 'ttile7', 'ttile8'];
    var tilePlayed = [false,false,false,false,false,false,false,false];
    var XPlayed = [];
    var OPlayed = [];


    var box = document.createElement('div');

    box.id = 'box';
    box.className = "container";
    box.setAttribute("style", "    width: 230px;\n" +
        "    background: lightpink;\n" +
        "    padding: 10px;\n" +
        "    border-radius: 8px;\n" +
        "    margin: 30px auto;\n" +
        "    display: flex;\n" +
        "    flex-flow: row wrap;\n" +
        "    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);");

    //for ( let i = 0 ; i < 9 ; i ++){

    var tile0 = document.createElement('div');
    tile0.id = idArray[0];
    tile0.className = "box";
    box.appendChild(tile0);
    tile0.setAttribute("style", "    min-width: 70px;\n" +
            "    min-height: 70px;\n" +
            "    display: inline-block;\n" +
            "    border: 2px solid lightpink;\n" +
            "    background: white;\n" +
            "    border-radius: 3px;\n" +
            "    margin: 0;\n" +
            "    padding: 0;");
    var tileText0 = document.createElement('h1')
    tileText0.id = idtArray[0];
    tile0.appendChild(tileText0);
    tileText0.className = "tile";
    tileText0.setAttribute("style", "    line-height: 70px;\n" +
            "    margin: 0;")


    var tile1 = document.createElement('div');
    tile1.id = idArray[1];
    tile1.className = "box";
    box.appendChild(tile1);
    tile1.setAttribute("style", "    min-width: 70px;\n" +
        "    min-height: 70px;\n" +
        "    display: inline-block;\n" +
        "    border: 2px solid lightpink;\n" +
        "    background: white;\n" +
        "    border-radius: 3px;\n" +
        "    margin: 0;\n" +
        "    padding: 0;");
    var tileText1 = document.createElement('h1')
    tileText1.id = idtArray[1];
    tile1.appendChild(tileText1);
    tileText1.className = "tile";
    tileText1.setAttribute("style", "    line-height: 70px;\n" +
        "    margin: 0;")


    var tile2 = document.createElement('div');
    tile2.id = idArray[2];
    tile2.className = "box";
    box.appendChild(tile2);
    tile2.setAttribute("style", "    min-width: 70px;\n" +
        "    min-height: 70px;\n" +
        "    display: inline-block;\n" +
        "    border: 2px solid lightpink;\n" +
        "    background: white;\n" +
        "    border-radius: 3px;\n" +
        "    margin: 0;\n" +
        "    padding: 0;");
    var tileText2 = document.createElement('h1')
    tileText2.id = idtArray[2];
    tile2.appendChild(tileText2);
    tileText2.className = "tile";
    tileText2.setAttribute("style", "    line-height: 70px;\n" +
        "    margin: 0;")


    var tile3 = document.createElement('div');
    tile3.id = idArray[3];
    tile3.className = "box";
    box.appendChild(tile3);
    tile3.setAttribute("style", "    min-width: 70px;\n" +
        "    min-height: 70px;\n" +
        "    display: inline-block;\n" +
        "    border: 2px solid lightpink;\n" +
        "    background: white;\n" +
        "    border-radius: 3px;\n" +
        "    margin: 0;\n" +
        "    padding: 0;");
    var tileText3 = document.createElement('h1')
    tileText3.id = idtArray[3];
    tile3.appendChild(tileText3);
    tileText3.className = "tile";
    tileText3.setAttribute("style", "    line-height: 70px;\n" +
        "    margin: 0;")


    var tile4 = document.createElement('div');
    tile4.id = idArray[4];
    tile4.className = "box";
    box.appendChild(tile4);
    tile4.setAttribute("style", "    min-width: 70px;\n" +
        "    min-height: 70px;\n" +
        "    display: inline-block;\n" +
        "    border: 2px solid lightpink;\n" +
        "    background: white;\n" +
        "    border-radius: 3px;\n" +
        "    margin: 0;\n" +
        "    padding: 0;");
    var tileText4 = document.createElement('h1')
    tileText4.id = idtArray[4];
    tile4.appendChild(tileText4);
    tileText4.className = "tile";
    tileText4.setAttribute("style", "    line-height: 70px;\n" +
        "    margin: 0;")



    var tile5 = document.createElement('div');
    tile5.id = idArray[5];
    tile5.className = "box";
    box.appendChild(tile5);

    tile5.setAttribute("style", "    min-width: 70px;\n" +
        "    min-height: 70px;\n" +
        "    display: inline-block;\n" +
        "    border: 2px solid lightpink;\n" +
        "    background: white;\n" +
        "    border-radius: 3px;\n" +
        "    margin: 0;\n" +
        "    padding: 0;");
    var tileText5 = document.createElement('h1')
    tileText5.id = idtArray[5];
    tile5.appendChild(tileText5);
    tileText5.className = "tile";
    tileText5.setAttribute("style", "    line-height: 70px;\n" +
        "    margin: 0;");


    var tile6 = document.createElement('div');
    tile6.id = idArray[6];
    tile6.className = "box";
    box.appendChild(tile6);

    tile6.setAttribute("style", "    min-width: 70px;\n" +
        "    min-height: 70px;\n" +
        "    display: inline-block;\n" +
        "    border: 2px solid lightpink;\n" +
        "    background: white;\n" +
        "    border-radius: 3px;\n" +
        "    margin: 0;\n" +
        "    padding: 0;");
    var tileText6 = document.createElement('h1')
    tileText6.id = idtArray[6];
    tile6.appendChild(tileText6);



    tileText6.setAttribute("style", "    line-height: 70px;\n" +
        "    margin: 0;")


    var tile7 = document.createElement('div');
    tile7.id = idArray[7];
    tile7.className = "box";
    box.appendChild(tile7);
    tile7.setAttribute("style", "    min-width: 70px;\n" +
        "    min-height: 70px;\n" +
        "    display: inline-block;\n" +
        "    border: 2px solid lightpink;\n" +
        "    background: white;\n" +
        "    border-radius: 3px;\n" +
        "    margin: 0;\n" +
        "    padding: 0;");
    var tileText7 = document.createElement('h1')
    tileText7.id = idtArray[7];
    tile7.appendChild(tileText7);
    tileText7.className = "tile";
    tileText7.setAttribute("style", "    line-height: 70px;\n" +
        "    margin: 0;")



    var tile8 = document.createElement('div');
    tile8.id = idArray[8];
    tile8.className = "box";
    box.appendChild(tile8);
    tile8.setAttribute("style", "    min-width: 70px;\n" +
        "    min-height: 70px;\n" +
        "    display: inline-block;\n" +
        "    border: 2px solid lightpink;\n" +
        "    background: white;\n" +
        "    border-radius: 3px;\n" +
        "    margin: 0;\n" +
        "    padding: 0;");
    var tileText8 = document.createElement('h1')
    tileText8.id = idtArray[8];
    tile8.appendChild(tileText8);
    tileText8.className = "tile";
    tileText8.setAttribute("style", "    line-height: 70px;\n" +
        "    margin: 0;")



    var boxes = document.querySelectorAll('tile');



    tile0.addEventListener('click', function (event) {


        if (!(tilePlayed[0])) {
            tilePlayed[0] = true;

            toggle = !toggle;
            if (toggle) {
                tileText0.innerHTML = "0";
                OPlayed.push(0);
                alert("X turn");

            } else {
                tileText0.innerHTML = "X";
                XPlayed.push(0);
                alert("O turn");

            }

        }

        checkForWinner();


    });





    tile1.addEventListener('click', function (event) {


        if (!(tilePlayed[1])) {
            tilePlayed[1] = true;

            toggle = !toggle;
            if (toggle) {
                tileText1.innerHTML = "0";
                OPlayed.push(1);
                alert("X turn");

            } else {
                tileText1.innerHTML = "X";
                XPlayed.push(1);
                alert("O turn");

            }

        }

        checkForWinner();


        });





    tile2.addEventListener('click', function (event) {


        if (!(tilePlayed[2])) {
            tilePlayed[2] = true;
            toggle = !toggle;
            if (toggle) {
                tileText2.innerHTML = "0";
                OPlayed.push(2);
                alert("X turn");

            } else {
                tileText2.innerHTML = "X";
                XPlayed.push(2);
                alert("O turn");

            }
        }

        checkForWinner();


    });





    tile3.addEventListener('click', function (event) {


        if (!(tilePlayed[3])) {
            tilePlayed[3] = true;


            toggle = !toggle;
            if (toggle) {
                tileText3.innerHTML = "0";
                OPlayed.push(3);
                alert("X turn");

            } else {
                tileText3.innerHTML = "X";
                XPlayed.push(3);
                alert("O turn");

            }
        }
        checkForWinner();

    });







    tile4.addEventListener('click', function (event) {


        if ((!tilePlayed[4])) {
            tilePlayed[4] = true;


            toggle = !toggle;
            if (toggle) {
                tileText4.innerHTML = "0";
                OPlayed.push(4);
                alert("X turn");

            } else {
                tileText4.innerHTML = "X";
                XPlayed.push(4);
                alert("O turn");

            }
        }
        checkForWinner();

    });







    tile5.addEventListener('click', function (event) {


        if (!(tilePlayed[5])) {
            tilePlayed[5] = true;
            toggle = !toggle;
            if (toggle) {
                tileText5.innerHTML = "0";
                OPlayed.push(5);
                alert("X turn");

            } else {
                tileText5.innerHTML = "X";
                XPlayed.push(5);
                alert("O turn");

            }
        }
        checkForWinner();




    });


    tile6.addEventListener('click', function (event) {

        if (!(tilePlayed[6])) {
            tilePlayed[6] = true;
            toggle = !toggle;
            if (toggle) {
                tileText6.innerHTML = "0";
                OPlayed.push(6);
                alert("X turn");

            } else {
                tileText6.innerHTML = "X";
                XPlayed.push(6);
                alert("O turn");

            }

        }
        checkForWinner();

    });

    tile7.addEventListener('click', function (event) {


        if (!(tilePlayed[7])) {
            tilePlayed[0] = true;


            toggle = !toggle;
            if (toggle) {
                tileText7.innerHTML = "0";
                OPlayed.push(7);
                alert("X turn");

            } else {
                tileText7.innerHTML = "X";
                XPlayed.push(7);

                alert("O turn");

            }
        }
        checkForWinner();


    });

    tile8.addEventListener('click', function (event) {


        if (!(tilePlayed[8])) {
            tilePlayed[8] = true;
            toggle = !toggle;
            if (toggle) {
                tileText8.innerHTML = "0";
                OPlayed.push(8);
                alert("X turn");

            } else {
                tileText8.innerHTML = "X";
                XPlayed.push(8);
                alert("O turn");



            }
        }
        checkForWinner();



    });










    //}

    //document.getElementById('tile1').innerHTML = "X";




   /**

    //const message = document.querySelector('.messages');
    //const inst = document.querySelector('.instructions');
    const boxes = document.querySelectorAll('.box');


    boxes.forEach( (el) => { el.addEventListener('click',
        () => {
            if ( !el.innerHTML ) {
                el.innerHTML = "X";
                //toggle();
                //checkForWinner();
            }
        });
    });

    **/










// Creating noughts, crosses, and toggling between players

/*
    const toggle = () => {
        if ( icon === 'X' ) {
            icon = 'O';
            inst.innerHTML = "<p>Nought's turn<p/>";
        }
        else {
            icon = 'X';
            inst.innerHTML = "<p>Cross's turn<p/>";
        }
    }

*/

// Function to take a go
    // if box empty, write in nought or cross
    // once an icon written in, toggle icon to other player's
    // check for a winner

    /**

    boxes.forEach( (el) => { el.addEventListener('click',
        () => {
            if ( !el.innerHTML ) {
                el.innerHTML = `<h1>${icon}</h1>`;
                //toggle();
                //checkForWinner();
            }
        });
    });

     **/


// Function to reset board
    // clear boxes
    // clear highlighting
    // reset message and instruction text to originals


// Check board for a winning combo

    const checkForWinner = () => {



        numPlays ++;
        // if one player has 3 or more icons, and it matches a winning array, declare winner.
        if ( XPlayed.length >= 3 && compareToWinningArrays(XPlayed) ) {
            alert("X WON");
        } else if
        ( OPlayed.length >= 3 && compareToWinningArrays(OPlayed) ) {
            alert("O WON");
        }

        else if ( numPlays === 9) {
        alert("It's a tie ")
        }



        // add else if for game finished
    }

    let winCode = null;

// test the 8 winning combos against sample
    const compareToWinningArrays = (playerArray) => {
        let final = false;
        winningArrays.forEach(
            (combo) => {
                let outcome = true;
                for(let i = 0; i < 3; i++) {
                    if ( playerArray.indexOf(combo[i]) == -1 )
                        return outcome = false;
                }
                if ( outcome ) {
                    winCode = combo;
                    return final = true;
                }
            }
        )
        if ( final ) return true;
    }

    const winningArrays =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]]

// Function to display winner:
    // set message to wining player
    // set instructions to 'yay'
    // highlight winning boxes

    const declareWinner = (win) => {
        message.innerHTML = `<h2>${win} wins!<h2>`;
        inst.innerHTML = 'yay!';
        highlight();
    };

// highlight winning combo boxes:
    const highlight = () => {
        if (winCode) {
            for(let i = 0; i < 3; i++) {
                let id = `${winCode[i]}`;
                const el = document.getElementById(id);
                el.style.background = "lightcyan";
            }
        }
    }
// remove highlight
    const resetHighlight = () => {
        boxes.forEach(
            (box) => {
                box.style.background = "white";
            }
        );

    }





    document.getElementById('renderhere').append(box,messages,instructions);










});

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



addEventToButton(4, function (event) {


    var toggle = true;
    var numPlays = 0;


    let icon = 'X'

    document.getElementById('renderhere').childNodes.forEach(value => value.remove());
    document.getElementById('renderhere').innerHTML = "";


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
    var tilePlayed = [false, false, false, false, false, false, false, false];
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



// Check board for a win

    const checkForWinner = () => {


            numPlays++;
            // if one player has 3 or more icons, and it matches a winning array, declare winner.
            if (XPlayed.length >= 3 && compareToWinningArrays(XPlayed)) {
                alert("X WON");
            } else if
            (OPlayed.length >= 3 && compareToWinningArrays(OPlayed)) {
                alert("O WON");
            } else if (numPlays === 9) {
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
                for (let i = 0; i < 3; i++) {
                    if (playerArray.indexOf(combo[i]) == -1)
                        return outcome = false;
                }
                if (outcome) {
                    winCode = combo;
                    return final = true;
                }
            }
        )
        if (final) return true;
    }

    const winningArrays = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]]




    document.getElementById('renderhere').append(box, messages, instructions);


});

addEventToButton(5, function (event) {





    document.getElementById('renderhere').childNodes.forEach(value => value.remove());
    document.getElementById('renderhere').innerHTML = "";

    var clickX = [];
    var clickY = [];
    var clickDrag = [];
    var paint;
    var mouseX;
    var mouseY;




    var frame = document.createElement('div');

    frame.id = 'box';
    frame.className = "container";
    frame.setAttribute("style", "    width: 500px;\n" + " height: 220px;\n" +
        "    background: lightpink;\n" +
        "    padding: 10px;\n" +
        "    border-radius: 8px;\n" +
        "    margin: 30px auto;\n" +
        "    display: flex;\n" +
        "    flex-flow: row wrap;\n" +
        "    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);");






    var canvas = document.createElement('canvas');
    frame.appendChild(canvas);
    canvas.setAttribute('width', 490);
    canvas.setAttribute('height', 210);
    canvas.setAttribute('id', 'canvas');

    if(typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    var context = canvas.getContext("2d");


    canvas.addEventListener('mousedown', function(e){
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop;

        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    });


    canvas.addEventListener('mousemove', function(e){
        if(paint){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
        }
    });

    canvas.addEventListener('mouseup', function(e){
        paint = false;
    });



    function addClick(x, y, dragging)
    {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }

    function redraw(){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

        context.strokeStyle = "black";
        context.lineJoin = "round";
        context.lineWidth = 5;

        for(var i=0; i < clickX.length; i++) {
            context.beginPath();
            if(clickDrag[i] && i){
                context.moveTo(clickX[i-1], clickY[i-1]);
            }else{
                context.moveTo(clickX[i]-1, clickY[i]);
            }
            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.stroke();
        }
    }


    document.getElementById('renderhere').append(frame);




});



addEventToButton(6, function (event) {


    document.getElementById('renderhere').childNodes.forEach(value => value.remove());
    document.getElementById('renderhere').innerHTML = "";




    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '600');
    svg.setAttribute('height', '480');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");




    var p = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    p.setAttribute('d', 'M 548.75971,230.81265 L 548.76015,230.8083 M 59.458875,230.81371 L 64.358875,219.11371 L 69.358875,207.41371 L 74.258875,195.91371 L 79.258875,184.51371 L 84.158875,173.21371 L 89.158875,162.21371 L 94.058875,151.51371 L 98.958875,141.11371 L 103.95887,131.11371 L 108.85887,121.41371 L 113.85887,112.21371 L 118.75887,103.51371 L 123.75887,95.313708 L 128.65887,87.613708 L 133.55887,80.513708 L 138.55887,74.113708 L 143.45887,68.213708 L 148.45887,63.013708 L 153.35887,58.513708 L 158.25887,54.713708 L 163.25887,51.513708 L 168.15887,49.113708 L 173.15887,47.513708 L 178.05887,46.613708 L 183.05887,46.413708 L 187.95887,46.913708 L 192.85887,48.213708 L 197.85887,50.313708 L 202.75887,53.013708 L 207.75887,56.513708 L 212.65887,60.713708 L 217.65887,65.513708 L 222.55887,71.113708 L 227.45887,77.213708 L 232.45887,84.013708 L 237.35887,91.413708 L 242.35887,99.313708 L 247.25887,107.81371 L 252.25887,116.81371 L 257.15887,126.21371 L 262.05887,136.01371 L 267.05887,146.31371 L 271.95887,156.81371 L 276.95887,167.71371 L 281.85887,178.81371 L 286.85887,190.21371 L 291.75887,201.71371 L 296.65887,213.31371 L 301.65887,224.91371 L 306.55887,236.71371 L 311.55887,248.31371 L 316.45887,259.91371 L 321.35887,271.41371 L 326.35887,282.81371 L 331.25887,293.91371 L 336.25887,304.81371 L 341.15887,315.31371 L 346.15887,325.61371 L 351.05887,335.41371 L 355.95887,344.81371 L 360.95887,353.81371 L 365.85887,362.31371 L 370.85887,370.21371 L 375.75887,377.61371 L 380.75887,384.41371 L 385.65887,390.51371 L 390.55887,396.11371 L 395.55887,400.91371 L 400.45887,405.11371 L 405.45887,408.61371 L 410.35887,411.31371 L 415.35887,413.41371 L 420.25887,414.71371 L 425.15887,415.21371 L 430.15887,415.01371 L 435.05887,414.11371 L 440.05887,412.51371 L 444.95887,410.11371 L 449.95887,406.91371 L 454.85887,403.11371 L 459.75887,398.61371 L 464.75887,393.41371 L 469.65887,387.51371 L 474.65887,381.11371 L 479.55887,374.01371 L 484.45887,366.31371 L 489.45887,358.11371 L 494.35887,349.41371 L 499.35887,340.21371 L 504.25887,330.51371 L 509.25887,320.51371 L 514.15887,310.11371 L 519.05887,299.41371 L 524.05887,288.41371 L 528.95887,277.11371 L 533.95887,265.71371 L 538.85887,254.21371 L 543.85887,242.51371 L 548.75887,230.81371');

    p.setAttribute('stroke' , 'black');
    p.setAttribute('stroke-linecap', 'round');
    p.setAttribute('stroke-dasharray', '5,10,5');
    p.setAttribute('fill', 'none' );

    svg.appendChild(p);






    document.getElementById('renderhere').append(svg);




});


addEventToButton(7, function (event) {



/*
<input id="lineWidth" type="range" min="0" max="200" step="1" value="10" />

        <canvas id="mycanvas" width="800" height="600"></canvas>

 */
    var myDiv = document.createElement('div');
    var Kentry = document.createElement("FORM");
    Kentry.setAttribute("id", "myForm");

    myDiv.appendChild(Kentry);


    var kValueInput = document.createElement("INPUT");
    kValueInput.setAttribute("type", "number");
    kValueInput.setAttribute("value", "10");
    Kentry.appendChild(kValueInput);




    var myVar=setInterval(function(){animate()},30);




    document.getElementById('renderhere').childNodes.forEach(value => value.remove());
    document.getElementById('renderhere').innerHTML = "";

    var animatedSine = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //svg.setAttribute('style', 'border: 1px solid black');
    animatedSine.setAttribute('width', '600');
    animatedSine.setAttribute('height', '400');
    animatedSine.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");




    var p2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    p2.setAttribute('d', 'M10,10 L50,100 L90,50');

    p2.setAttribute('stroke' , 'black');
    p2.setAttribute('stroke-width', '10px');
    p2.setAttribute('stroke-linecap', '5,10,5');
    p2.setAttribute('fill', 'none' );

    animatedSine.appendChild(p2);


    let xs = []
    for (var i = 0; i <= 500; i++) {
        xs.push(i)
    }


    let t = (new Date()).getTime()/1000;




    function animate() {


        //var K = document.getElementById("kVal").value;
        var K = kValueInput.value;
        K = K/100;

        let points = xs.map(x => {


            let y = 200 + 50 * Math.sin((x + t) *K)

            return [x, y]
        })

        let path = "M" + points.map(p => {
            return p[0] + "," + p[1]
        }).join(" L")

        p2.setAttribute("d", path)

        t = ((new Date()).getTime())/10;


        requestAnimationFrame(animate)
    }

    animate()


    document.getElementById('renderhere').append(myDiv,animatedSine);




//init();




});


addEventToButton(8, function (event) {

    document.getElementById('renderhere').childNodes.forEach(value => value.remove());
    document.getElementById('renderhere').innerHTML = "";


    var page8 = document.createElement('div');


    var turnsLeft = 8;


    var challenge = [];

    for ( let i = 0; i < 4; i++){

    var nextColor = Math.floor(Math.random() * 6);

     challenge.push(nextColor);
    }


    //alert(challenge.join("\n"));






    var nextGuess = [];

    var nextScore = [0,0,0,0];
    var allGuesses = [];
    var allScores = [];
    var letterCountsInChallenge = [];
    var letterCountsInGuess = [];

    for ( let ll =0; ll <6 ; ll++ ){

        letterCountsInChallenge[ll] = 0;
        letterCountsInGuess[ll] = 0;

    }

    var randomComments = ["Still cant get it ?? You are stupid enough to become PM of Britain!!", "Is that all you have ? Compared to you TRUMP looks like Alan Turing ", "My 4 year old daughter could beat you at this !!! ", "Where did you brain go ? Did you leave it on the set of Xanadu ? ", "Am I playing against a human or a smarter than average chihuaha ", "I think I am going to change the name of this game into masterDumpkoff", "Your plays remind me of Dad's Army.", "Lucky you are not trying to escape from Alcatraz " , "Mr ED could destroy you at this game!!! ", "Kiss me bitch you got it wrong AGAIN "  ]

    var CheckWin = function(){

        var tot = 0;

        for ( let ff = 0; ff < 4 ; ff ++ )
        {
            if (nextScore[ff] == 2) { tot ++;

            }
        }

        if ( tot == 4 ) { page8.append(youWin);
            guessBtn.disabled = true;

            colors.disabled = true;
            colors2.disabled = true;
            colors3.disabled = true;
            colors4.disabled = true;}


    }



    var CountLettersinChallenge = function(){

        for ( let kk = 0; kk < 4; kk++)
        {
            if (challenge[kk] == 0) {letterCountsInChallenge[0] = letterCountsInChallenge[0] + 1;}
            if (challenge[kk] == 1) {letterCountsInChallenge[1] = letterCountsInChallenge[1] + 1;}
            if (challenge[kk] == 2) {letterCountsInChallenge[2] = letterCountsInChallenge[2] + 1;}
            if (challenge[kk] == 3) {letterCountsInChallenge[3] = letterCountsInChallenge[3] + 1;}
            if (challenge[kk] == 4) {letterCountsInChallenge[4] = letterCountsInChallenge[4] + 1;}
            if (challenge[kk] == 5) {letterCountsInChallenge[5] = letterCountsInChallenge[5] + 1;}


        }
    }


    var CountLettersinGuess = function(){

        for ( let kk = 0; kk < 4; kk++)
        {

            if (nextGuess[kk] == 0) {letterCountsInGuess[0] = letterCountsInGuess[0] + 1;}
            if (nextGuess[kk] == 1) {letterCountsInGuess[1] = letterCountsInGuess[1] + 1;}
            if (nextGuess[kk] == 2) {letterCountsInGuess[2] = letterCountsInGuess[2] + 1;}
            if (nextGuess[kk] == 3) {letterCountsInGuess[3] = letterCountsInGuess[3] + 1;}
            if (nextGuess[kk] == 4) {letterCountsInGuess[4] = letterCountsInGuess[4] + 1;}
            if (nextGuess[kk] == 5) {letterCountsInGuess[5] = letterCountsInGuess[5] + 1;}


        }
    }


    var checkGuess = function() {

        // 0 is X , 1 is W , 2 is B
        // check for correct scores
        //
        // make a copy of the number of letters in the code so it can be decremented

        letterCountcopy = letterCountsInChallenge.slice(0);

       // alert(letterCountcopy.toString());


        // check for perfectly correct answers

        for (let bb = 0; bb < 4; bb++) {
            if (nextGuess[bb] == challenge[bb]) {
                nextScore[bb] = 2;
                letterCountcopy[bb] = letterCountcopy[bb] - 1;

                //scoreChecked[bb] = 1;
            }
        }

        //letterCountStringCopy.innerHTML =  "letter count copy: " + letterCountcopy.toString();

        // check for partially correct answers
        for (let cc = 0; cc < 4; cc++) {

            let gg = nextGuess[cc];
            if ((nextScore[cc] < 1 ) && ((letterCountcopy[gg]) > 0)) {

                nextScore[cc] = 1;
                letterCountcopy[gg] = letterCountcopy[gg] - 1;
            }

        }



        CheckWin();

        if (turnsLeft == 1){
            page8.append(youLose);
            guessBtn.disabled = true;
            colors.disabled = true;
            colors2.disabled = true;
            colors3.disabled = true;
            colors4.disabled = true;

        }

        turnsLeft -- ;


        guessesLeft.innerHTML = "";
        guessesLeft.innerHTML = "Guesses left = " + turnsLeft;

        var comment = Math.floor(Math.random() * 9);

        retort.innerHTML = randomComments[comment];


        for ( let qq = 0; qq < 4; qq++)
        {
            allScores.push(nextScore[qq]);
            allGuesses.push(nextGuess[qq]);
        }




        /// populate the board ///

        /// add guess (nextguess) to and result (nextScore) to board

        /**
        You guessed A-N-N-A (Result: W-E-B-B)
        You guessed G-A-N-A (Result: E-B-B-B)
        You guessed A-A-N-A (Result: E-B-B-B)
        You guessed X-A-N-A (Result: B-B-B-B)

         */

        // for i < 3 add score then -
        // then add 4
        // then add comment

        nextGuess = [];

        nextScore = [0,0,0,0];



    }






    CountLettersinChallenge();

    var letterCountcopy = letterCountsInChallenge.slice(0);

    //alert(letterCountsInChallenge.join("\n"));





    var colors = document.createElement("SELECT");
    var option0 = document.createElement("option");
    option0.text = "Xanadu";
    colors.add(option0, colors[0]);
    var option1 = document.createElement("option");
    option1.text = "Arsenic";
    colors.add(option1, colors[1]);
    var option2 = document.createElement("option");
    option2.text = "Fallow";
    colors.add(option2, colors[2]);
    var option3 = document.createElement("option");
    option3.text = "Gamboge";
    colors.add(option3, colors[3]);
    var option4 = document.createElement("option");
    option4.text = "Niagara";
    colors.add(option4, colors[4]);
    var option5 = document.createElement("option");
    option5.text = "Cerise";
    colors.add(option5, colors[5]);


    var colors2 = document.createElement("SELECT");
    var option20 = document.createElement("option");
    option20.text = "Xanadu";
    colors2.add(option20, colors2[0]);
    var option21 = document.createElement("option");
    option21.text = "Arsenic";
    colors2.add(option21, colors2[1]);
    var option22 = document.createElement("option");
    option22.text = "Fallow";
    colors2.add(option22, colors2[2]);
    var option23 = document.createElement("option");
    option23.text = "Gamboge";
    colors2.add(option23, colors2[3]);
    var option24 = document.createElement("option");
    option24.text = "Niagara";
    colors2.add(option24, colors2[4]);
    var option25 = document.createElement("option");
    option25.text = "Cerise";
    colors2.add(option25, colors2[5]);


    var colors3 = document.createElement("SELECT");
    var option30 = document.createElement("option");
    option30.text = "Xanadu";
    colors3.add(option30, colors3[0]);
    var option31 = document.createElement("option");
    option31.text = "Arsenic";
    colors3.add(option31, colors3[1]);
    var option32 = document.createElement("option");
    option32.text = "Fallow";
    colors3.add(option32, colors3[2]);
    var option33 = document.createElement("option");
    option33.text = "Gamboge";
    colors3.add(option33, colors3[3]);
    var option34 = document.createElement("option");
    option34.text = "Niagara";
    colors3.add(option34, colors3[4]);
    var option35 = document.createElement("option");
    option35.text = "Cerise";
    colors3.add(option35, colors3[5]);


    var colors4 = document.createElement("SELECT");
    var option40 = document.createElement("option");
    option40.text = "Xanadu";
    colors4.add(option40, colors4[0]);
    var option41 = document.createElement("option");
    option41.text = "Arsenic";
    colors4.add(option41, colors4[1]);
    var option42 = document.createElement("option");
    option42.text = "Fallow";
    colors4.add(option42, colors4[2]);
    var option43 = document.createElement("option");
    option43.text = "Gamboge";
    colors4.add(option43, colors4[3]);
    var option44 = document.createElement("option");
    option44.text = "Niagara";
    colors4.add(option44, colors4[4]);
    var option45 = document.createElement("option");
    option45.text = "Cerise";
    colors4.add(option45, colors4[5]);



    var colorsArray = ["X", "A", "F", "G", "N", "C"];
    var scoresArray = ["X", "W" , "B" ];


    var returnSpace = document.createElement("BR");


    var resultList = document.createElement("OL");
    resultList.type = "i";

    var retort = document.createElement("div");
    retort.innerhtml = "";






    var guessBtn = document.createElement('button');
    guessBtn.innerText = 'Make a Guess';
    guessBtn.classList.add('btn', 'btn-primary');
    guessBtn.type = 'submit';
    page8.append(guessBtn);
    page8.append(returnSpace);
    page8.append(colors);
    page8.append(colors2);
    page8.append(colors3);
    page8.append(colors4);


    // populate result List




    page8.append(resultList);

    var guessesLeft = document.createElement("div");
    guessesLeft.innerHTML = "Turns remaining = " + turnsLeft;
    page8.append(guessesLeft);
    page8.append(retort);

   /**
    var letterCountString = document.createElement("div");
    letterCountString.innerHTML = " letter counts: " + letterCountsInChallenge.toString();
    page8.append(letterCountString);

    var letterCountStringCopy = document.createElement("div");
    letterCountStringCopy.innerHTML = "";
    page8.append(letterCountStringCopy);

    **/


   /**

    var secretCode = document.createElement("div");

    secretCode.innerHTML = "Secret Code is : " + colorsArray[challenge[0]] + "-" + colorsArray[challenge[1]] + "-" + colorsArray[challenge[2]] + "-" + colorsArray[challenge[3]] ;
   // page8.append(secretCode)

    **/

    var youWin = document.createElement("dir");
    youWin.innerHTML = "You Win";

    var youLose = document.createElement("dir");
    youLose.innerHTML = "You fool: my code was " + colorsArray[challenge[0]] + "-" + colorsArray[challenge[1]] + "-" + colorsArray[challenge[2]] + "-" + colorsArray[challenge[3]] ;












    guessBtn.addEventListener('click', function (event) {



        nextGuess.push([colors.selectedIndex]);
        nextGuess.push([colors2.selectedIndex]);
        nextGuess.push([colors3.selectedIndex]);
        nextGuess.push([colors4.selectedIndex]);





       // alert(nextGuess.join("\n"));
        //CountLettersinGuess();
        //alert(letterCountsInGuess.join("\n"));
        checkGuess();


        // populate result List

        resultList.innerHTML = "";

        var lineNumber = 0;


        for ( let rl = 0; rl <  8 - turnsLeft ; rl ++ ){



            var newResultLine = document.createElement("Li");
            newResultLine.innerHTML = "You Guessed " + colorsArray[allGuesses[lineNumber*4]] + "-" + colorsArray[allGuesses[1 + lineNumber*4]] + "-" + colorsArray[allGuesses[2 + lineNumber*4]] + "-" + colorsArray[allGuesses[3 + lineNumber*4]] + " (Result: " + scoresArray[allScores[0 + lineNumber*4]] + "-" + scoresArray[allScores[1 + lineNumber*4]] + "-" + scoresArray[allScores[2 + lineNumber*4]] + "-" + scoresArray[allScores[3 + lineNumber*4]] + ")";
            resultList.append(newResultLine);

            lineNumber++ ;




        }







    });




    document.getElementById('renderhere').append(page8);



});
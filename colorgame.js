var numsq = 6;
var colors = generaterandomcolors(numsq);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById('colordisplay');
var messagedisplay = document.querySelector('#message')
var h1 = document.querySelector('h1');
var resetbutton = document.querySelector("#reset");
var easy = document.querySelector('#easymode')
var hard = document.querySelector('#hardmode')
var modeButtons = document.querySelectorAll('.mode')

init();
function init() {
    setupmodeButtons();
    setupsquares();
    reset();
}


function setupmodeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            modeButtons[0].classList.remove('selected_mode')
            modeButtons[1].classList.remove('selected_mode')
            this.classList.add('selected_mode')
            this.textContent === "Easy" ? numsq = 3 : numsq = 6;
            reset();

        });
    }
}
    function setupsquares() {

        for (var i = 0; i < squares.length; i++) {
    
            squares[i].addEventListener("click", function () {
                var clickedcolor = this.style.background;
                if (clickedcolor === pickedcolor) {
                    messagedisplay.style.color = "green";
                    messagedisplay.innerText = "Correct!";
                    resetbutton.innerText = "Play Again?"
                    changecolors(clickedcolor);
                    h1.style.background = clickedcolor
                }
                else {
                    this.style.background = "#232323";
                    messagedisplay.innerText = "Try Again!"
                    messagedisplay.style.color = "red"
                    // resetbutton.innerText= "Play A?"
                }
            });
        }
    
    }


    function reset() {
        colors = generaterandomcolors(numsq);

        pickedcolor = pickcolor();
        colordisplay.innerText = pickedcolor;
        reset.textContent = 'New Colors'
        messagedisplay.textContent = "";
        for (var i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.display = "block"
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
            }

        }
        h1.style.background = "radial-gradient(pink, steelblue, lightsteelblue)"

    }




    resetbutton.addEventListener('click', function () {
        reset();

    })

    colordisplay.innerText = pickedcolor;


    function changecolors(color) {

        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = color;
        }
    }
    function pickcolor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }
    function generaterandomcolors(num) {
        var arr = []
        for (var i = 0; i < num; i++) {
            arr.push(randomcolor())
        }
        return arr;
    }
    function randomcolor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
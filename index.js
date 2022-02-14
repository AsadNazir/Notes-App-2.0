// All the GLobal Variable Over here
// let ArrowDown = [];
// let Para = [];
// let Check = [];
// let items = [];
let addButton = document.querySelector(`.add`);
let NotesList = document.querySelector(`.note_list`);
let NotesArr = [];

show();

function DropDown() {
    // Adding Event Listeners on DropDwon here
    let ArrowDown = document.getElementsByClassName(`fa-angle-down`);
    let Para = document.querySelectorAll(`.item p`);

    for (let index = 0; index < ArrowDown.length; index++) {
        console.log(ArrowDown[index]);
        ArrowDown[index].addEventListener("click", function() {


            if (Para[index].className == "close") {
                ArrowDown[index].style.transform = `rotate(180deg)`;
                Para[index].classList.replace("close", "open");;
            } else {
                ArrowDown[index].style.transform = `rotate(0deg)`;
                Para[index].classList.replace("open", "close");
            }

        });
    }
}

function Checked() {
    // Adding Event Listeners To Check and Uncheck Over Here
    {
        let Check = document.getElementsByClassName(`fa-square-check`);
        let items = document.getElementsByClassName("item");


        for (let index = 0; index < Check.length; index++) {
            Check[index].addEventListener("click", function() {

                if (items[index].className == "item") {
                    Check[index].style.color = "green";
                    items[index].classList.add("check");
                } else {
                    Check[index].style.color = "grey";
                    items[index].classList.remove("check");
                }

            });

        }
    }
}
// Getting The text from text Areas
addButton.addEventListener("click", function() {

    // Head Text Area
    let HeadTextArea = document.getElementById(`heading`);
    // Body Text Area
    let BodyTextArea = document.getElementById(`body`);

    NotesObj = {
        heading: HeadTextArea.value,
        body: BodyTextArea.value,
        tick: false
    }

    NotesArr.push(NotesObj);
    HeadTextArea.value = "";
    BodyTextArea.value = "";

    // Functions Over Here for Checked Drop Down and Delete and Show
    show();
    DropDown();
    Checked();
})

// Show Function Over here
function show() {
    NotesList.innerHTML = "";
    for (let index = 0; index < NotesArr.length; index++) {

        NotesList.innerHTML += `<div class="item">
        <div class="head_list">
            <h1>
            ${NotesArr[index].heading}
            </h1>
            <div class="icons">
                <span class="hover trash"><i class="fas fa-trash"></i></span>
                <span class="hover checkMark"><i class="fa-solid fa-square-check"></i></span>
                <span class="hover down"><i class="fas fa-angle-down"></i></span>
            </div>
        </div>
        <p class="close">
           ${NotesArr[index].body}
        </p>
        </div>`
        console.log(NotesArr[index].heading);
        console.log(NotesArr[index].body);
    }
}

// template of item over here 
/* <div class="item">
                <div class="head_list">
                    <h1>
                      
                    </h1>
                    <div class="icons">
                        <span class="hover trash"><i class="fas fa-trash"></i></span>
                        <span class="hover checkMark"><i class="fa-solid fa-square-check"></i></span>
                        <span class="hover down"><i class="fas fa-angle-down"></i></span>
                    </div>
                </div>
                <p class="close">
                   ${Notes.body}
                </p>
            </div> */
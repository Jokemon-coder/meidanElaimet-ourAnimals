/*Set footer text and it's year, which is the current year and should update every subsequent year
*/
asetaFooter();

//Get elements with class "listOsa", they're the nav-menu.
const listOsat = document.getElementsByClassName("listOsa");

//For loop for i and color is changed on mouseover and mouseout
for(const i of listOsat)
{
    i.addEventListener('mouseover', (event) => 
    {
        event.target.style.color = "#EEF1FF";
    });

    i.addEventListener('mouseout', (event) => 
    {
        event.target.style.color = "#232023";
    });
      
};


//Give every image it's own variable and at the end a variable for the whole class
const lubaOne = document.getElementById("luba1");
const lubaTwo = document.getElementById("luba2");
const lubaThree = document.getElementById("luba3");
const lubat = document.getElementsByClassName("luba");

const kanaOne = document.getElementById("kana1");
const kanaTwo = document.getElementById("kana2");
const kanaThree = document.getElementById("kana3");
const kanat = document.getElementsByClassName("kana");

const kiljiOne = document.getElementById("kilji1");
const kiljiTwo = document.getElementById("kilji2");
const kiljiThree = document.getElementById("kilji3");
const kiljit = document.getElementsByClassName("kilji");

const popoOne = document.getElementById("popo1");
const popoTwo = document.getElementById("popo2");
const popoThree = document.getElementById("popo3");
const popot = document.getElementsByClassName("popo");

const juroOne = document.getElementById("juro1");
const juroTwo = document.getElementById("juro2");
const juroThree = document.getElementById("juro3");
const jurot = document.getElementsByClassName("juro");

const hiroOne = document.getElementById("hiro1");
const hiroTwo = document.getElementById("hiro2");
const hiroThree = document.getElementById("hiro3");
const hirot = document.getElementsByClassName("hiro");

const kutvisOne = document.getElementById("kutvis1");
const kutvisTwo = document.getElementById("kutvis2");
const kutvisThree = document.getElementById("kutvis3");
const kutvikset = document.getElementsByClassName("kutvis");

const okraOne = document.getElementById("okra1");
const okraTwo = document.getElementById("okra2");
const okraThree = document.getElementById("okra3");
const okrait = document.getElementsByClassName("okra");

const pesoOne = document.getElementById("peso1");
const pesoTwo = document.getElementById("peso2");
const pesoThree = document.getElementById("peso3");
const peso = document.getElementsByClassName("peso");





/*Check if element has been clicked on click, if it has not been,
*make elementClicked true and show the counterparts of the image clicked on the row based
*on if the class is something specific
*/
//
var elementClicked = false;
var intervalID;

function imgClickHandler(){
    var cls = event.target.className;
    if(elementClicked == false && cls == "luba")
    {
    elementClicked = true;
    showOrRemoveFirstOnClick(columnOne, lubaTwo, lubaThree, kanaOne, kiljiOne);
    showNappi();
    };
    if (elementClicked == false && cls == "kana")
    {
    elementClicked = true;
    showOrRemoveMiddleOnClick(columnOne, kanaTwo, kanaThree, lubaOne, kiljiOne);
    showNappi();
    };
    if(elementClicked == false && cls == "kilji")
    {
    elementClicked = true;
    showOrRemoveLastOnClick(columnOne, kiljiTwo, kiljiThree, lubaOne, kanaOne); 
    showNappi();
    };
    if(elementClicked == false && cls == "popo")
    {
    elementClicked = true;
    showOrRemoveFirstOnClick(columnTwo, popoTwo, popoThree, juroOne, hiroOne);
    showNappi();
    };
    if(elementClicked == false && cls == "juro")
    {
    elementClicked = true;
    showOrRemoveMiddleOnClick(columnTwo, juroTwo, juroThree, popoOne, hiroOne);
    showNappi();
    };
    if(elementClicked == false && cls == "hiro")
    {
    elementClicked = true;
    showOrRemoveLastOnClick(columnTwo, hiroTwo, hiroThree, popoOne, juroOne);
    showNappi();
    };
    if(elementClicked == false && cls == "kutvis")
    {
    elementClicked = true;
    showOrRemoveFirstOnClick(columnThree, kutvisTwo, kutvisThree, okraOne, pesoOne);
    showNappi();
    };
    if(elementClicked == false && cls == "okra")
    {
    elementClicked = true;
    showOrRemoveMiddleOnClick(columnThree, okraTwo, okraThree, kutvisOne, pesoOne);
    showNappi();
    };
    if(elementClicked == false && cls == "peso")
    {
    elementClicked = true;
    showOrRemoveLastOnClick(columnThree, pesoTwo, pesoThree, kutvisOne, okraOne);
    showNappi();
    };


};

//Create clickhandler for all images based on their class
[document.querySelector(".luba"), document.querySelector(".kana"), document.querySelector(".kilji"), 
 document.querySelector(".popo"), document.querySelector(".juro"), document.querySelector(".hiro"), document.querySelector(".kutvis"), document.querySelector(".okra")
 , document.querySelector(".peso")].forEach(item => {
    item.addEventListener("click", imgClickHandler);
});

//Check if elementClicked used in development
/*function checkElementClicked()
};*/

/*Variables for the different sections the images are in, kind of mixed up column and row
during development
*/
const columnOne = document.getElementById("row1");
const columnTwo = document.getElementById("row2");
const columnThree = document.getElementById("row3");
const columnStorage = document.getElementById("rowStorage");

/*Functions that show and remove images based on their variables based on IDs. "Removed" images
are moved out of the current storage section into an invisible one. When elementClicked
becomes false, the images are put back into their original storage sections
*/
function showOrRemoveFirstOnClick(location, mainImg1, mainImg2, sideImg1, sideImg2) {
    //For images in the firt column
    if (elementClicked == true && location == columnOne)
    {
    location.append(mainImg1, mainImg2);
    columnStorage.append(sideImg1, sideImg2);
    }else if(elementClicked != true)
    {
    columnStorage.append(mainImg1, mainImg2);
    location.append(sideImg1, sideImg2);
    }
    //For images in the second column
    if (elementClicked == true && location == columnTwo)
    {
    location.append(mainImg1, mainImg2);
    columnStorage.append(sideImg1, sideImg2);
    }else if(elementClicked != true)
    {
    columnStorage.append(mainImg1, mainImg2);
    location.append(sideImg1, sideImg2);
    }
    //For images in the third column
    if (elementClicked == true && location == columnThree)
    {
    location.append(mainImg1, mainImg2);
    columnStorage.append(sideImg1, sideImg2);
    }else if(elementClicked != true)
    {
    columnStorage.append(mainImg1, mainImg2);
    location.append(sideImg1, sideImg2);
    }

}

function showOrRemoveMiddleOnClick(location, mainImg1, mainImg2, sideImg1, sideImg2) {
    //For images in the firt column    
    if(elementClicked == true && location == columnOne)
    {
    location.prepend(mainImg1);
    location.append(mainImg2);
    columnStorage.append(sideImg1, sideImg2);
    }else if(elementClicked != true)
    {
    columnStorage.append(mainImg1, mainImg2);
    location.prepend(sideImg1);
    location.append(sideImg2);
    }
    
    //For images in the second column    
    if(elementClicked == true && location == columnTwo)
    {
    location.prepend(mainImg1);
    location.append(mainImg2);
    columnStorage.append(sideImg1, sideImg2);
    }else if(elementClicked != true)
    {
    columnStorage.append(mainImg1, mainImg2);
    location.prepend(sideImg1);
    location.append(sideImg2);
    }
    
    //For images in the third column    
    if(elementClicked == true && location == columnThree)
    {
    location.prepend(mainImg1);
    location.append(mainImg2);
    columnStorage.append(sideImg1, sideImg2);
    }else if(elementClicked != true)
    {
    columnStorage.append(mainImg1, mainImg2);
    location.prepend(sideImg1);
    location.append(sideImg2);
    }
    
};

function showOrRemoveLastOnClick(location, mainImg1, mainImg2, sideImg1, sideImg2) {
    //For images in the firt column
    if(elementClicked == true && location == columnOne)
    {
    location.prepend(mainImg1, mainImg2);
    columnStorage.append(sideImg1, sideImg2);
    }else if(elementClicked != true)
    {
    columnStorage.append(mainImg1, mainImg2);
    location.prepend(sideImg1, sideImg2);
    }
    
    //For images in the second column
    if(elementClicked == true && location == columnTwo)
    {
    location.prepend(mainImg1, mainImg2);
    columnStorage.append(sideImg1, sideImg2);
    }else if(elementClicked != true)
    {
    columnStorage.append(mainImg1, mainImg2);
    location.prepend(sideImg1, sideImg2);
    }
    
    //For images in the third column
    if(elementClicked == true && location == columnThree)
    {
    location.prepend(mainImg1, mainImg2);
    columnStorage.append(sideImg1, sideImg2);
    }else if(elementClicked != true)
    {
    columnStorage.append(mainImg1, mainImg2);
    location.prepend(sideImg1, sideImg2);
    }
    
};

//Create button(s) and their click handler
const napit = document.querySelectorAll(".suljeNappi")[0];
napit.addEventListener("click", nappiClickHandler);

//When mouse is over or out of the button, change it's color to indicate that
napit.addEventListener("mouseover", (event) => 
    {
        event.target.style.color = "#A64452";
    });

napit.addEventListener("mouseout", (event) => 
    {
        event.target.style.color = "#232023";
    });


/*When button is pressed, elementClicked turns into false and the button 
clears out the images using their ShowOrRemove functions and itself by turning off
its display.

*/
function nappiClickHandler(){
    if (elementClicked == true)
    {
        elementClicked = false;
        showOrRemoveFirstOnClick(columnOne, lubaTwo, lubaThree, kanaOne, kiljiOne);
        showOrRemoveMiddleOnClick(columnOne, kanaTwo, kanaThree, lubaOne, kiljiOne);
        showOrRemoveLastOnClick(columnOne, kiljiTwo, kiljiThree, lubaOne, kanaOne);
        showOrRemoveFirstOnClick(columnTwo, popoTwo, popoThree, juroOne, hiroOne);
        showOrRemoveMiddleOnClick(columnTwo, juroTwo, juroThree, popoOne, hiroOne);
        showOrRemoveLastOnClick(columnTwo, hiroTwo, hiroThree, popoOne, juroOne);
        showOrRemoveFirstOnClick(columnThree, kutvisTwo, kutvisThree, okraOne, pesoOne);
        showOrRemoveMiddleOnClick(columnThree, okraTwo, okraThree, kutvisOne, pesoOne);
        showOrRemoveLastOnClick(columnThree, pesoTwo, pesoThree, kutvisOne, okraOne);
        napit.style.display = "none";
        aloitaJaLopetaIntervaali();


    }
    else
    console.log("error");
};

//Function that shows the button, used when elementClicked == true
function showNappi(){
    napit.style.display = "block";
    removeEventListener("click", imgClickHandler);
    aloitaJaLopetaIntervaali();
};

/* Function for checking the coordinates of elements to determine where the buttons is and
 * that it stays on screen when scrolling or otherwise adjusting the screen
 */
var intervaali = null;
function aloitaJaLopetaIntervaali()
{

    if(napit.style.display == "block")
    {

    intervaali = setInterval(function checkKoordinaatit()
    {
        var meidanTiedotKoordinaatit;
        meidanTiedotKoordinaatit = document.getElementById("meidanTiedot").getBoundingClientRect();
        var headerKoordinaatit;
        headerKoordinaatit = document.getElementById("mainHeader").getBoundingClientRect();
        if(meidanTiedotKoordinaatit.bottom <= headerKoordinaatit.bottom)
        {
            napit.style.position = "fixed";
            napit.style.top = "6vw";
            napit.style.right = "1vw";
        }else if(meidanTiedotKoordinaatit.bottom >= headerKoordinaatit.bottom)
        {
            napit.style.position = "absolute";
            napit.style.top = "0";
            napit.style.right = "0";
        }
    }, 1);
    }else
    {
    clearInterval(intervaali);
    };

};

//set the footer text and more importantly the current year in it
function asetaFooter()
{
    var footerText = document.getElementById("footerText");
    let currentYear = new Date().getFullYear();
    footerText.textContent = currentYear + " © Joel Mantere";
};











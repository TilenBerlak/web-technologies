let diceId = 0;
let diceArray = [];
let diceImageArray = [];

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    
    const diceHtmlObject = createDice(data);
    diceImageArray.push(diceHtmlObject);
    ev.target.appendChild(diceHtmlObject);
}

function createDice(data) {

    let x = document.createElement("IMG");
    let n = Math.floor(Math.random()* 6) + 1;
    let c = null;

    x.setAttribute("id", diceId);
    x.setAttribute("draggable", "false");
    switch(data) {
        case "drag1":
            x.setAttribute("src", "images/white_" + n + ".png");        
            c = "white";
            break;
        case "drag2":
            x.setAttribute("src", "images/red_" + n + ".png");
            c = "red";
            break;
        case "drag3":
            x.setAttribute("src", "images/blue_" + n + ".png");
            c = "blue";
            break;
        case "drag4":
            x.setAttribute("src", "images/green_" + n + ".png");
            c = "green";
            break;
    } 
    
    const diceObject = {
        id: diceId++,
        color: c,
        value: n
    };

    diceArray.push(diceObject);
    domAddDice(diceObject);
    return x;  
}

function domAddDice(dice) {

    const table = document.querySelector("#dice-table");
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (const key in dice) {
        const td = document.createElement("td");
        td.innerText = dice[key];
        tr.appendChild(td);
    }
}

function rollAllDice() {

    if(diceArray.length > 0) {

        let table = document.getElementById("dice-table");

        for(let i = 0; i < diceArray.length; i++) {
            let n = Math.floor(Math.random()* 6) + 1;
            diceArray[i].value;
            let imgSrc = diceImageArray[i].getAttribute("src");
            let newString = imgSrc.substring(0, imgSrc.length - 5);
            diceImageArray[i].setAttribute("src", newString + n + ".png");

            table.rows[i+1].cells[2].innerText = n;
        }

    } else {
        alert("Please drag dice to the platform first.");
    }

}

function sortByIdAsc() {


    if(diceArray.length > 0) {

        let arr = [];
        for(let i = 0; i < diceArray.length; i++) {
            arr.push(diceArray[i].id);           
        }

        arr.sort();

        let newArray = [];
        for(let i = 0; i < diceArray.length; i++) {

            for(let j = 0; j < arr.length; j++) {
                if(arr[i] == diceArray[j].id) {
                    newArray.push(diceArray[j]);
                    break;
                }
            }

        }

        diceArray = newArray;

        let table = document.getElementById("dice-table");

        for(let i = table.rows.length - 1; i > 0; i--)
        {
            table.deleteRow(i);
        }

        for(let i = 0; i < diceArray.length; i++) {
            
            const tr = document.createElement("tr");
            table.appendChild(tr);

            for (const key in diceArray[i]) {
                const td = document.createElement("td");
                td.innerText = diceArray[i][key];
                tr.appendChild(td);
            }

        }

    }

}

function sortByIdDesc() {


    if(diceArray.length > 0) {

        let arr = [];
        for(let i = 0; i < diceArray.length; i++) {
            arr.push(diceArray[i].id);           
        }

        arr.sort();
        arr.reverse();

        let newArray = [];
        for(let i = 0; i < diceArray.length; i++) {

            for(let j = 0; j < arr.length; j++) {
                if(arr[i] == diceArray[j].id) {
                    newArray.push(diceArray[j]);
                    break;
                }
            }
        }

        diceArray = newArray;
        let table = document.getElementById("dice-table");

        for(let i = table.rows.length - 1; i > 0; i--)
        {
            table.deleteRow(i);
        }

        for(let i = 0; i < diceArray.length; i++) {
            
            const tr = document.createElement("tr");
            table.appendChild(tr);

            for (const key in diceArray[i]) {
                const td = document.createElement("td");
                td.innerText = diceArray[i][key];
                tr.appendChild(td);
            }

        }
    }

}

function sortByValueAsc() {

    if(diceArray.length > 0) {

        let arr = [];
        for(let i = 0; i < diceArray.length; i++) {
            arr.push(diceArray[i].value);           
        }

        arr.sort();

        let newArray = [];
        for(let i = 0; i < diceArray.length; i++) {

            for(let j = 0; j < arr.length; j++) {
                if(arr[i] == diceArray[j].value) {
                    newArray.push(diceArray[j]);
                    break;
                }
            }

        }

        diceArray = newArray;

        let table = document.getElementById("dice-table");

        for(let i = table.rows.length - 1; i > 0; i--)
        {
            table.deleteRow(i);
        }

        console.log(diceArray);

        for(let i = 0; i < diceArray.length; i++) {
            
            const tr = document.createElement("tr");
            table.appendChild(tr);

            for (const key in diceArray[i]) {
                const td = document.createElement("td");
                td.innerText = diceArray[i][key];
                tr.appendChild(td);
            }

        }

    }
}

function sortByValueDesc() {

    if(diceArray.length > 0) {

        let arr = [];
        for(let i = 0; i < diceArray.length; i++) {
            arr.push(diceArray[i].value);           
        }

        arr.sort();
        arr.reverse();

        let newArray = [];
        for(let i = 0; i < diceArray.length; i++) {

            for(let j = 0; j < arr.length; j++) {
                if(arr[i] == diceArray[j].value) {
                    newArray.push(diceArray[j]);
                    break;
                }
            }

        }

        diceArray = newArray;

        let table = document.getElementById("dice-table");

        for(let i = table.rows.length - 1; i > 0; i--)
        {
            table.deleteRow(i);
        }

        console.log(diceArray);

        for(let i = 0; i < diceArray.length; i++) {
            
            const tr = document.createElement("tr");
            table.appendChild(tr);

            for (const key in diceArray[i]) {
                const td = document.createElement("td");
                td.innerText = diceArray[i][key];
                tr.appendChild(td);
            }

        }

    }
}

function domRemoveDice(event) {

    const table = document.getElementById("dice-table");

    for(let i = 0; i < table.rows.length; i++) {
        if( i != 0 && confirm("Are you sure you want to delete dice id " + table.rows[i].cells[0].innerHTML + "?")) {
            table.deleteRow(i);
            diceImageArray[i].parentNode.removeChild(diceImageArray[i]);
        }  
    }

}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnRollAll").onclick = rollAllDice;
    document.getElementById("btnSortIdAsc").onclick = sortByIdAsc;
    document.getElementById("btnSortIdDesc").onclick = sortByIdDesc;
   /* document.getElementById("btnSortValueAsc").onclick = sortByValueAsc;
    document.getElementById("btnSortValueDesc").onclick = sortByValueDesc;*/

    const table = document.getElementById("dice-table");
    table.ondblclick = domRemoveDice;
});



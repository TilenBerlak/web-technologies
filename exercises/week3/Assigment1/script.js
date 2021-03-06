"use strict";

let participantId = 0;
let participantArray = [];

function domRemoveParticipant(event) {
    // TODO
    const table = document.querySelector("#participant-table");

    let j = 0;
    for(let i = 0; i < table.rows.length; i++) {
        if(i != 0 && confirm("Are you sure you want to delete " + table.rows[i].cells[0].innerHTML + "?")) {            
            table.deleteRow(i);
            let dataJSON = JSON.parse(localStorage.getItem("data"));
            delete dataJSON[j++];
            console.log(dataJSON);
            let arrayJSON = JSON.stringify(dataJSON);
            localStorage.setItem("data", arrayJSON);
        }
    }
}

function domAddParticipant(participant) {
    // TODO

    const table = document.querySelector("#participant-table");
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (const key in participant) {
        if(key != "id") {
            const td = document.createElement("td");
            td.innerText = participant[key];
            tr.appendChild(td);
        }
    }
}

function addParticipant(event) {
    // TODO: Get values
    const first = document.querySelector("#first").value;
    const last = document.querySelector("#last").value;
    const role = document.querySelector("#role").value;
    
    // TODO: Set input fields to empty values
    document.querySelector("#first").value = "";
    document.querySelector("#last").value = "";

    // Create participant object
    const participant = {
        id: participantId++,
        first: first,
        last: last,
        role: role
    };

    // Local Storage
    participantArray.push(participant);
    let arrayJSON = JSON.stringify(participantArray);
    localStorage.setItem("data", arrayJSON);

    // Add participant to the HTML
    domAddParticipant(participant);

    // Move cursor to the first name input field
    document.getElementById("first").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    // This function is run after the page contents have been loaded
    // Put your initialization code here
    const table = document.getElementById("participant-table");
    let dataJSON = JSON.parse(localStorage.getItem("data"));
    
    if (dataJSON != null && dataJSON[0] != null) {
        for(let i = 0; i < dataJSON.length; i++) {
            const participant = {
                id: dataJSON[i]["id"],
                first: dataJSON[i]["first"],
                last: dataJSON[i]["last"],
                role: dataJSON[i]["role"]
            };
    
            domAddParticipant(participant);
                 
        }
    }

    document.getElementById("addButton").onclick = addParticipant;
    table.ondblclick = domRemoveParticipant;
})

"use strict";

function domRemoveParticipant(event) {
    // TODO
    const table = document.querySelector("#participant-table");

    for(let i = 0; i < table.rows.length; i++) {
        if(i != 0)             
            table.deleteRow(i);
    }
}

function domAddParticipant(participant) {
    // TODO

    const table = document.querySelector("#participant-table");
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (const key in participant) {
        const td = document.createElement("td");
        td.innerText = participant[key];
        tr.appendChild(td);
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
        first: first,
        last: last,
        role: role
    };

    // Add participant to the HTML
    domAddParticipant(participant);

    // Move cursor to the first name input field
    document.getElementById("first").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    // This function is run after the page contents have been loaded
    // Put your initialization code here
    document.getElementById("addButton").onclick = addParticipant;
    document.getElementById("participant-table").onclick = domRemoveParticipant;
})

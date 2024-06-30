// This code file heavily references the code that was provided in lab on 9/6/2023.

function toggleStyleSheet(){
    // Get style element by ID (hint: getElementById)
    element = document.getElementById("mainStyleSheet");

    // Check the current stylesheet file name. (hint: element.getAttribute)
    currName = element.getAttribute("href");

    // Determine new stylesheet file name
    // replace stylesheet with new stylesheet (hint: element.setAttribute)
    if(currName == "style1.css"){
        element.setAttribute("href", "style2.css");
        currName = "style2.css";
    }
    else{
        element.setAttribute("href", "style1.css");
        currName = "style1.css";
    }

    // For persistence when page is refreshed. save new stylesheet name to localStorage
    localStorage.setItem("xyz", currName);
}


window.onload = function(){
    // Make the last div color persist even when someone refreshes the page.
    // get stylesheet name from local storage hint: localStorage.getItem(name)
    curr = localStorage.getItem("xyz");

    // get html style element by ID
    element = document.getElementById("mainStyleSheet");

    // If there is no local storage for the current sheet, 
    // default to style1.
    if(curr == null){
        curr = "style1.css";
    }

    // replace href attribute of html element.
    element.setAttribute("href", curr);
}



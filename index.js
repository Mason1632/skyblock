
const objectPath = require("object-path");
const nbt = require('prismarine-nbt');

class FunctionStructure {
    constructor() {
    }

        processBackpack(backpack) {
            const promise = new Promise((resolve, reject) => {
            const buffer = Buffer.from(backpack);
      
            nbt.parse(buffer, (e, d) => {
                resolve(d.value.i.value.value);
                });
            });
      
            return promise;
        }

        showAlert(document, titletext, descriptiontext, titleColor, titleDesc) {
            titleColor = titleColor ? titleColor : "#fc524c";
            titleDesc = titleDesc ? titleDesc : "WHITE";
        
            let alertbox = document.getElementById("alert-box");
            let title = document.getElementById("alert-box").getElementsByClassName("alert-box-title")[0];
            let description = document.getElementById("alert-box").getElementsByClassName("alert-box-description")[0];
        
            title.innerHTML = titletext.toUpperCase().replace("\n", "<br>");
            description.innerHTML = descriptiontext.toUpperCase().replace("\n", "<br>");
        
            title.style.color = titleColor;
            description.style.color = titleDesc;
            alertbox.style.visibility = "visible";
            let container_div = document.getElementById("container-submission");
            container_div.style.visibility = "hidden";
        }
        
        submitted(document) {
            let username = document.getElementById("player_username").value;
            if (username.length < 3) return func.showAlert(document, "ERROR", "The username cannot be less than 3 characters", "#eb4034");
            if (username.length > 16) return func.showAlert(document, "ERROR", "The username cannot be more than 16 characters\nstop inspect elementing..", "#eb4034");
        }
        
        okButton() {
            let alertbox = document.getElementById("alert-box");
            if (!alertbox) return alert("An error occured, please try again.");
        
            alertbox.style.visibility = "hidden";
            let container_div = document.getElementById("container-submission");
            container_div.style.visibility = "visible";
        }
}
global.functions = FunctionStructure;

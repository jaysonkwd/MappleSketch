let strokeColor = "black";
let userStrokeWeight = 2;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "changeColor" && message.color) {
    strokeColor = message.color;
  }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "changeSize" && message.size) {
    userStrokeWeight = message.size;
  }
})

window.onload = () => {

	//Définition des variables.
	let ongletCouleur = document.querySelector(".ongletCouleur");
	let inputCouleur = 	document.querySelector("#inputCouleur");
	let ongletTitre = document.querySelector(".ongletTitre");
	let ongletTaille = document.querySelector(".ongletTaille");
	let inputSize = document.querySelector(".inputSize");
	let sizeValue = document.querySelector(".sizeValue");
	let ongletAbout = document.querySelector(".ongletAbout");
	let about = document.querySelector(".about");
	

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		inputCouleur.value = localStorage.getItem('couleurActuelle');
		inputSize.value = localStorage.getItem('tailleActuelle');

	  // Affiche l'onglet "Couleurs"
	  ongletCouleur.addEventListener("click", () => {

			if (inputCouleur.style.display == "") { // Si l'onglet n'est pas affiché, alors on le fait.
				inputCouleur.style.display = "flex";
				
				} else { 
						inputCouleur.style.display = "";

				}

		}); // Fin addEventListener

   	inputCouleur.addEventListener("input", function () {
  		let nouvelleCouleur = this.value;
  		localStorage.setItem("couleurActuelle", nouvelleCouleur);

		  // On envoie la couleur au content script de l'onglet actif
		  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		    chrome.tabs.sendMessage(tabs[0].id, {
		      type: "changeColor",
		      color: nouvelleCouleur

		    });

		  });

		});

   	inputSize.addEventListener("mousemove", function () {
  		let nouvelleTaille = inputSize.value;
  		localStorage.setItem("tailleActuelle", nouvelleTaille);
			sizeValue.textContent = this.value;

		  // On envoie la couleur au content script de l'onglet actif
		   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		     chrome.tabs.sendMessage(tabs[0].id, {
		       type: "changeSize",
		       size: nouvelleTaille

		     });

		  });
   		
		});

		// Affiche l'onglet "Taille du pinceau"
		ongletTitre.addEventListener("click", ()=>{ // Si l'onglet n'est pas affiché, on le fait.

			if (ongletTaille.style.display == ""){
					ongletTaille.style.display = "flex";
					sizeValue.textContent = inputSize.value;


			} else {
				ongletTaille.style.display = "";

			}

		});
	});
   	
  	// Affiche l'onglet "A propos"
	  ongletAbout.addEventListener("click", () => {

			if (about.style.display == "") { // Si l'onglet n'est pas affiché, alors on le fait.
				about.style.display = "flex";
				
				} else { 
						about.style.display = "";

				}

		}); // Fin addEventListener
}; // Fin window.onload



let p5run = (sketch) => {
	sketch.setup = () => {
				let c = sketch.createCanvas(document.body.clientWidth, document.body.clientHeight);
				c.position(0,0);
				c.style("pointer-events", "none");
				c.clear();
		};

	sketch.draw = () => {
				sketch.stroke(strokeColor);
				sketch.strokeWeight(userStrokeWeight);
				if (sketch.mouseIsPressed) {
	    			sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.mouseY);
				}
		};
};

let p5e = new p5(p5run);
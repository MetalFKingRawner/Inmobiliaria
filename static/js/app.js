window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

function search() {
    var input = document.getElementById('search-bar').value.toLowerCase();
    var items = document.getElementsByClassName('info-product');

    for (var i = 0; i < items.length; i++) {
        var itemName = items[i].getElementsByTagName('h2')[0].innerText.toLowerCase();

        if (itemName.includes(input)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}

class Automaton {
    constructor() {
      this.currentState = 'q0';
      this.finalState = 'q2';
      this.transitions = {
        q0: { '[A-Z]': 'q1' },
        q1: { '[a-z]': 'q2' },
        q2: { '[a-z]': 'q2' },
        q2: { ' ': 'q3' },
        q3: { '[A-Z]': 'q4' },
        q4: { '[a-z]': 'q1' },
        q3: { '[a-z]': 'q5' },
        q5: { '[a-z]': 'q2' },
      };
    }
    processInput(input) {
      for (const symbol of input) {
        this.transition(symbol);
      }
    }
  
    transition(symbol) {
      const nextState = this.transitions[this.currentState] && this.findNextState(symbol);
    
      if (nextState) {
        this.currentState = nextState;
      } else {
        return null;
      }
    }
  
    findNextState(symbol) {
      // Buscar el próximo estado que coincida con el símbolo
      for (const transition in this.transitions[this.currentState]) {
        if (symbol.match(new RegExp(transition))) {
          return this.transitions[this.currentState][transition];
        }
      }
      return null;
    }
  
    reset() {
      this.currentState = 'q0';
    }
  
    isInputValid(input) {
      this.reset();
  
      // Verificar si la entrada es válida según el autómata
      for (const symbol of input) {
        this.transition(symbol);
      }
  
      // Verificar si el estado final es válido
      return this.currentState === this.finalState;
    }
  }
  
  class precio {
    constructor() {
      this.currentState = 'q0';
      this.finalState = 'q4';
      this.transitions = {
        q0: { '[1-9]': 'q1' },
        q1: { '[0-9]': 'q2' },
        q2: { '[0-9]': 'q3' },
        q3: { '[0-9]': 'q4' },
        q4: { '[0-9]': 'q4' },
        
      };
    } 
  
    processInput(input) {
      for (const symbol of input) {
        this.transition(symbol);
      }
    }
  
    transition(symbol) {
      const nextState = this.transitions[this.currentState] && this.findNextState(symbol);
    
      if (nextState) {
        this.currentState = nextState;
      } else {
        return null;
      }
    }
  
    findNextState(symbol) {
      // Buscar el próximo estado que coincida con el símbolo
      for (const transition in this.transitions[this.currentState]) {
        if (symbol.match(new RegExp(transition))) {
          return this.transitions[this.currentState][transition];
        }
      }
      return null;
    }
  
    reset() {
      this.currentState = 'q0';
    }
  
    isInputValid(input) {
      this.reset();
  
      // Verificar si la entrada es válida según el autómata
      for (const symbol of input) {
        this.transition(symbol);
      }
  
      // Verificar si el estado final es válido
      return this.currentState === this.finalState;
    }
  }

  class metros {
    constructor() {
      this.currentState = 'q0';
      this.finalState = 'q2';
      this.transitions = {
        q0: { '[1-9]': 'q1' },
        q1: { '[0-9]': 'q2' },
        q2: { '[0-9]': 'q2' },
      };
    } 
  
    processInput(input) {
      for (const symbol of input) {
        this.transition(symbol);
      }
    }
  
    transition(symbol) {
      const nextState = this.transitions[this.currentState] && this.findNextState(symbol);
    
      if (nextState) {
        this.currentState = nextState;
      } else {
        return null;
      }
    }
  
    findNextState(symbol) {
      // Buscar el próximo estado que coincida con el símbolo
      for (const transition in this.transitions[this.currentState]) {
        if (symbol.match(new RegExp(transition))) {
          return this.transitions[this.currentState][transition];
        }
      }
      return null;
    }
  
    reset() {
      this.currentState = 'q0';
    }
  
    isInputValid(input) {
      this.reset();
  
      // Verificar si la entrada es válida según el autómata
      for (const symbol of input) {
        this.transition(symbol);
      }
  
      // Verificar si el estado final es válido
      return this.currentState === this.finalState;
    }
  }
  
  class direccion {
    constructor() {
      this.currentState = 'q0';
      this.finalState = 'q1';
      this.transitions = {
        q0: { '[a-zA-Z]' : 'q1'},
        q1: { '[a-zA-Z0-9]': 'q1', ' ':'q1' },
        
      };
    }
  
    processInput(input) {
      for (const symbol of input) {
        this.transition(symbol);
      }
    }
  
    transition(symbol) {
      const nextState = this.transitions[this.currentState] && this.findNextState(symbol);
    
      if (nextState) {
        this.currentState = nextState;
      } else {
        return null;
      }
    }
  
    findNextState(symbol) {
      // Buscar el próximo estado que coincida con el símbolo
      for (const transition in this.transitions[this.currentState]) {
        if (symbol.match(new RegExp(transition))) {
          return this.transitions[this.currentState][transition];
        }
      }
      return null;
    }
  
    reset() {
      this.currentState = 'q0';
    }
  
    isInputValid(input) {
      this.reset();
  
      // Verificar si la entrada es válida según el autómata
      for (const symbol of input) {
        this.transition(symbol);
      }
  
      // Verificar si el estado final es válido
      return this.currentState === this.finalState;
    }
  }

  class pais {
    constructor() {
      this.currentState = 'q0';
      this.finalState = 'q1';
      this.transitions = {
        q0: { '^[a-zA-Z]$' : 'q1'},
        q1: { '^[a-zA-Z ]$': 'q1' },
      };
    }
  
    processInput(input) {
      for (const symbol of input) {
        this.transition(symbol);
      }
    }
  
    transition(symbol) {
      const nextState = this.transitions[this.currentState] && this.findNextState(symbol);
    
      if (nextState) {
        this.currentState = nextState;
      } else {
        this.currentState = null;
      }
    }
  
    findNextState(symbol) {
      // Buscar el próximo estado que coincida con el símbolo
      for (const transition in this.transitions[this.currentState]) {
        if (symbol.match(new RegExp(transition))) {
          return this.transitions[this.currentState][transition];
        }
      }
      return null;
    }
  
    reset() {
      this.currentState = 'q0';
    }
  
    isInputValid(input) {
      this.reset();
  
      // Verificar si la entrada es válida según el autómata
      for (const symbol of input) {
        this.transition(symbol);
        if (this.currentState === null) {
          return false;
        }
      }
  
      // Verificar si el estado final es válido
      return this.currentState === this.finalState;
    }
  }

  class correo  {
    constructor() {
      this.currentState = 'q0';
      this.finalState = 'q7';
      this.transitions = {
        q0: { '[a-zA-Z0-9_-]': 'q1' },
        q1: { '[a-zA-Z0-9_-]': 'q1', '@': 'q2' },
        q2: { '[a-z]': 'q3' },
        q3: { '[a-z]': 'q3', '.': 'q4' },
        q4: { '[a-z]': 'q5' },
        q5: { '[a-z]': 'q6' },
        q6: { '[a-z]': 'q7' },
        q7: { '[a-z]': 'q7' },
        
      };
    } 
  
    processInput(input) {
      for (const symbol of input) {
        this.transition(symbol);
      }
    }
  
    transition(symbol) {
      const nextState = this.transitions[this.currentState] && this.findNextState(symbol);
    
      if (nextState) {
        this.currentState = nextState;
      } else {
        return null;
      }
    }
  
    findNextState(symbol) {
      // Buscar el próximo estado que coincida con el símbolo
      for (const transition in this.transitions[this.currentState]) {
        if (symbol.match(new RegExp(transition))) {
          return this.transitions[this.currentState][transition];
        }
      }
      return null;
    }
  
    reset() {
      this.currentState = 'q0';
    }
  
    isInputValid(input) {
      this.reset();
  
      // Verificar si la entrada es válida según el autómata
      for (const symbol of input) {
        this.transition(symbol);
      }
  
      // Verificar si el estado final es válido
      return this.currentState === this.finalState;
    }
  }

      function filterProperties() {
		// Retrieve input values
    //const direcion = new direccion();
    const colonia = new direccion();
    //const estado = new pais();
    const ciudad = new pais();
		//const automaton = new pais();
    const precioAutomaton = new precio();

    const chkUbicacion = document.getElementById('chkUbicacion');
    const chkPrecio = document.getElementById('chkPrecio');

    let isValidLocation, isValidPrice, isValidColonia, isValidEstado, isValidCiudad;
    //const direcInput = document.getElementById('direccion').value;
    const coloInput = document.getElementById('colonia').value;
    //const estadoInput = document.getElementById('estado').value;
    const ciudadInput = document.getElementById('ciudad').value;
    //const locationInput = document.getElementById('pais').value;
    let priceInput = document.getElementById('precio').value;
    priceInput = priceInput.replace('$', ''); 
    priceInput = priceInput.replace(',', '');
    priceInput = priceInput.replace(',', '');
	  
		// Validate input using automata
    if(chkPrecio && chkUbicacion || chkUbicacion || chkPrecio ){
      //isValidDirection = direcion.isInputValid(document.getElementById('direccion').value);
      isValidColonia = colonia.isInputValid(document.getElementById('colonia').value);
      //isValidEstado = estado.isInputValid(document.getElementById('estado').value);
      isValidCiudad = ciudad.isInputValid(document.getElementById('ciudad').value);
      //isValidLocation = automaton.isInputValid(document.getElementById('pais').value);
      isValidPrice = precioAutomaton.isInputValid(document.getElementById('precio').value);
    }
		
		// Filter properties based on validation results
		let filteredProperties = [];
		if(isValidLocation && isValidPrice){
      const filtro = [];
      const properties = document.querySelectorAll('.item');
      for (const property of properties) {
        //Check if property meets search criteria
        if (meetsSearchCriteria(property, locationInput,4)) {
          filtro.push(property);
        }
      }
      const numero  = Number(priceInput);
      const filteredProperties2 = [];
      const propie = filtro;
      // Filter by price
      for (const property of propie) {
        const priceElement = property.querySelector('.info-product p.price');
        if (meetsPriceCriteria(priceElement, numero)) {
          filteredProperties2.push(property);
        }
      }
      filteredProperties = filteredProperties2;
    }

    //else if (isValidLocation) {
		  // Retrieve properties from HTML
		  //const properties = document.querySelectorAll('.item');
	  
		  // Filter properties
		  //for (const property of properties) {
			 //Check if property meets search criteria
			//if (meetsSearchCriteria(property, locationInput,4)) {
			  //filteredProperties.push(property);
			//}
		  //}
		//}
    else if(isValidCiudad){
      const properties = document.querySelectorAll('.item');
		  // Filter properties
		  for (const property of properties) {
			 //Check if property meets search criteria
			if (meetsSearchCriteria(property, ciudadInput,3)) {
			  filteredProperties.push(property);
			}
		  }
    }
    //else if(isValidEstado){
      //const properties = document.querySelectorAll('.item');
		  // Filter properties
		  //for (const property of properties) {
			 //Check if property meets search criteria
			//if (meetsSearchCriteria(property, estadoInput,3)) {
			  //filteredProperties.push(property);
			//}
		  //}
    //}
    else if(isValidColonia){
      const properties = document.querySelectorAll('.item');
		  // Filter properties
		  for (const property of properties) {
			 //Check if property meets search criteria
			if (meetsSearchCriteria(property, coloInput,2)) {
			  filteredProperties.push(property);
			}
		  }
    }
    //else if(isValidDirection){
      //const properties = document.querySelectorAll('.item');
		  // Filter properties
		  //for (const property of properties) {
			 //Check if property meets search criteria
			//if (meetsSearchCriteria(property, direcInput,1)) {
			  //filteredProperties.push(property);
			//}
		  //}
    //}
    else if(isValidPrice){
      const numero  = Number(priceInput);
      const filteredProperties2 = [];
      const properties = document.querySelectorAll('.item');
      // Filter by price
      for (const property of properties) {
        const priceElement = property.querySelector('.info-product p.price');
        if (meetsPriceCriteria(priceElement, numero)) {
          filteredProperties2.push(property);
        }
      }
      filteredProperties = filteredProperties2;
    }
    
	  
		// Update filtered properties element
		const filteredPropertiesElement = document.getElementById('filteredProperties');
    if (filteredPropertiesElement) {
      // Clear existing content
      filteredPropertiesElement.innerHTML = '';
  
      // Check if any properties were found
      if (filteredProperties.length) {
        // Loop through filtered properties
        for (const property of filteredProperties) {
          // Clone the original property element
          const propertyElement = property.cloneNode(true);
  
          // Add cloned property to the filtered properties element
          filteredPropertiesElement.appendChild(propertyElement);
        }
      } else {
        // No properties found, display a message
        filteredPropertiesElement.innerHTML = 'No se encontraron propiedades que coincidan con tu búsqueda.';
      }
    } else {
      console.error('Element with ID "filteredProperties" not found.');
    }
	  } 
	  
	  function meetsSearchCriteria(property, locationInput, det) {
  // Extract property data
  let propertyInfoElements;

  //if(det==1){
    //propertyInfoElements = property.querySelectorAll('.info-product h2');
  //}
  if(det==2){
    propertyInfoElements = property.querySelectorAll('.info-product h3');
  }
  else if(det==3){
    propertyInfoElements = property.querySelectorAll('.info-product h4');
  }
  //else if (det==5){
    //propertyInfoElements = property.querySelectorAll('.info-product h4');
  //}
  else{
    propertyInfoElements = property.querySelectorAll('.info-product h5');
  }
  // Convert user input and property location to lowercase for case-insensitive matching
  const lowerCaseLocationInput = locationInput.toLowerCase();

  for (const infoElement of propertyInfoElements) {
    const propertyInfo = infoElement.textContent;
    const infoParts = propertyInfo.split(': ');
    
    if (infoParts.length === 2) {
      const lowerCasePropertyInfo = infoParts[1].toLowerCase();

      // Compare property data to user input
      if (lowerCasePropertyInfo.includes(lowerCaseLocationInput)) {
        return true; // Return true if any of the info matches
      }
    }
  }

  return false; // Return false if no match is found
}

	  
    function meetsPriceCriteria(property, priceInput) {
  
      // Extract and normalize property price
      let propertyPriceString = property.textContent.trim();
    
    // Use regular expression to extract numeric part of the price string
    const matches = propertyPriceString.match(/\d+(\.\d+)?/);
    if (!matches) {
        // If no numeric part found, return false
        return false;
    }
    
    // Convert the matched string to a number
    const propertyPriceNumber = parseFloat(matches[0]);
    
    // Compare location and price
    const isPriceMatch = propertyPriceNumber >= parseFloat(priceInput);
  
    // Return true only if both location and price match
    return isPriceMatch;
    }

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
          delay: 5000, // Tiempo en milisegundos entre cada transición de cada imagen
          disableOnInteraction: false, // permite que el autoplay continúe incluso si el usuario interactúa con el carrusel
        },
      navigation:{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints : {
          991: {
              slidesPerView: 3
          }
      },
      
  });
  
  function openNewWindow(url) {
      window.open(url, '_blank');
  }
     
    function validarFormulario() {
      // Obtenemos los valores de los campos del formulario
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;
      const correo = new correo();
    
      // Verificamos que los campos no estén vacíos
      if (nombre === "") {
        return {
          nombre: "El campo nombre no debe estar vacío.",
        };
      }
    
      if (email === "") {
        return {
          email: "El campo correo electrónico no debe estar vacío.",
        };
      }
    
      // Verificamos que el correo electrónico sea válido
      if (correo.isInputValid(email)) {
        return {
          email: "El correo electrónico no es válido.",
        };
      }
    
      // Verificamos que el mensaje tenga al menos un carácter
      if (mensaje === "") {
        return {
          mensaje: "El campo mensaje no debe estar vacío.",
        };
      }
    
      // Si todos los campos son correctos, devolvemos un objeto vacío
      return {};
    }

    document.addEventListener('DOMContentLoaded', () => {
      const forms = document.querySelectorAll('.form-validate');
  
      forms.forEach(form => {
          form.addEventListener('submit', function(event) {
              event.preventDefault();
  
              let direccionAutomata = new direccion();
              let paisAutomata = new pais();
              let precioAutomata = new precio();
  
              let calle = document.getElementById('calle').value;
              let colonia = document.getElementById('colonia').value;
              let ciudad = document.getElementById('ciudad').value;
              let estado = document.getElementById('estado').value;
              let paisvalue = document.getElementById('pais').value;
              let preciovalue = document.getElementById('precio').value;
              let metrosCuadrados = document.getElementById('metros_cuadrados').value;
  
              let errores = [];
  
              if (!direccionAutomata.isInputValid(calle)) {
                  errores.push('Calle');
              }
              if (!direccionAutomata.isInputValid(colonia)) {
                  errores.push('Colonia');
              }
              if (!paisAutomata.isInputValid(ciudad)) {
                  errores.push('Ciudad');
              }
              if (!paisAutomata.isInputValid(estado)) {
                  errores.push('Estado');
              }
              if (!paisAutomata.isInputValid(paisvalue)) {
                  errores.push('País');
              }
              if (!precioAutomata.isInputValid(preciovalue)) {
                  errores.push('Precio');
              }
              if (!precioAutomata.isInputValid(metrosCuadrados)) {
                  errores.push('Metros Cuadrados');
              }
  
              if (errores.length > 0) {
                  alert('Dato erróneo en ' + errores.join(', ') + '. Verifica la escritura.');
              } else {
                  this.submit();
              }
          });
      });
  });
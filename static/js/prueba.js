const readline = require('readline');

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
      q3: { '[0-9]': 'q4', '[0-9]' : 'q5' },
      q4: { '[0-9]': 'q4' },
      q5: { '.': 'q6' },
      q6: { '[0-9]': 'q4' },
      
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
class habitacion {
  constructor() {
    this.currentState = 'q0';
    this.finalState = 'q1';
    this.transitions = {
      q0: { '[1-9]' : 'q1'},
      q1: { '[0-9]': 'q1' },
      
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
function procesarEntradas(entradas) {
    const automaton = new Automaton();
    const precioAutomaton = new precio();
    const habitacionAutomaton = new habitacion();
  
    for (const entrada of entradas) {
      const esValidaAutomaton = automaton.isInputValid(entrada);
      const esValidaPrecio = precioAutomaton.isInputValid(entrada);
      const esValidaHabitacion = habitacionAutomaton.isInputValid(entrada);
  
      if (esValidaAutomaton) {

      }
  
      if (esValidaPrecio) {
        console.log("Valido");
      }
      else{
        console.log("No valido");
      }
  
      if (esValidaHabitacion) {
      }
  
    }
  }
  const entradasEjemplo = ["123.5"];
  const entradasEjemplo2 = ["Bonita casa", "1257"];
  const entradasEjemplo3 = ["Bonita casa", "1257", "<1444"];

  // Procesar las entradas
  procesarEntradas(entradasEjemplo);

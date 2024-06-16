const readline = require('readline');

class Automaton {
  constructor() {
    this.currentState = 'q0';
    this.finalState = 'q4';
    this.transitions = {
      q0: { '<': 'q1' , '>' : 'q1'},
      q1: { '[1-9]': 'q2' },
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

// Crear una instancia del autómata
const automaton = new Automaton();

// Crear una interfaz de lectura desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir al usuario que ingrese una palabra
rl.question('Ingrese una palabra: ', (answer) => {
  // Verificar si la entrada es válida según el autómata
  const esValida = automaton.isInputValid(answer);

  // Mostrar el resultado
  if (esValida) {
    console.log(`Entrada válida para ${automaton.finalState}.`);
  } else {
    console.log('Entrada no válida para ninguna categoría.');
  }

  // Cerrar la interfaz de lectura
  rl.close();
});

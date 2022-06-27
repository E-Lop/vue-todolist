/* Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

// --------------------------------------------------
// ANALYSIS
// --------------------------------------------------
// creation of an array of objects, each object is a todo item and is made by 2 elements: a text and a boolean for 'done'
// cretion of a DOM template in HTML for the list of the objects in the array
// v-for in the HTML li element to print each element of the array
// v-bind of a CSS class linked to the boolean in each array object for handle strikethrough text decoration
// 'x' icon with @click linked to a function managing the removal of an object in the array through splice(index,1)
// cretion of a DOM template in HTML for user input and a button
// variable to capture user input by v-model, then at the click on the button --> function to push the content of v-model into the array
// BONUS
// @keyup.enter in the input field in HTML to capture the return key and trigger the push function
// creation of a toggle to manage the strikethrough text decoration
// --------------------------------------------------

var app = new Vue({
  el: '#root',
  data: {
    userNewTodo: '',
    todos: [
      {
        text: 'Fare i compiti',
        done: false,
      },
      {
        text: 'Fare la spesa',
        done: true,
      },
      {
        text: 'Fare il bucato',
        done: false,
      },
    ],
  },
  methods: {
    // removes a todo item from the todo array, based on index
    removeTodoItem(itemindex) {
      this.todos.splice(itemindex, 1);
    },
    // if input text is not empty adds text input as a new object to the array and resets the input text area
    addNewTodoToArray() {
      if (this.userNewTodo.length > 0) {
        this.todos.push({
          text: this.userNewTodo,
          done: false,
        }),
          (this.userNewTodo = '');
      }
    },
    /* toggles the todo item as done (line through) or not done */
    doneUndone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
  },
});

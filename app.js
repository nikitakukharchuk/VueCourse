const App = {
  data() {
    return {
        inputValue: '',
        placeholderString: 'Введите название заметки',
        title: 'Список заметок',
        notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      this.notes.push(this.inputValue)
      this.inputValue = ''
    }
  }  
}

Vue.createApp(App).mount('#app')
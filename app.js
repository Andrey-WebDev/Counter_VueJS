const App = {
  data() {
    return {
      placeholderString: 'Введите название книги',
      title: 'Список книг',
      inputValue: '',
      books: ['Книга 1', 'Книга 2']
    }
  },
  methods: {
    // inputChangeHandler(event) {     удаляем прослушиватель, т.к. будем использовать v-model
    //   this.inputValue = event.target.value
    // },
    addNewBook() {
      if (this.inputValue !== '') {
        this.books.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    doubleCount() {
      return this.books.length * 2
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 20) {
        this.inputValue = ''
      }
    }
  }
}

Vue.createApp(App).mount('#app')

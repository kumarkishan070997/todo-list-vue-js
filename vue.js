new Vue({
    el: '#app',
    data: {
        title: 'Your daily TO - DO List',
        data: '',
        final: '',
        all: [],
    },
    methods: {
        addTodo() {
            this.all.push({
                names: this.data
            });
        },
        deleteData(out) {
            console.log(this.all.indexOf(out));
            this.all.splice(this.all.indexOf(out), 1);
        }
    }
});
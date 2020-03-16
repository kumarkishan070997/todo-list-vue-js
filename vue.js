new Vue({
    el: '#app',
    data: {
        title: 'Your daily TO - DO List',
        data: '',
        final: '',
        all: [],
        count: 0,
    },
    methods: {
        addTodo() {
            this.count = this.count + 1;
            this.all.push({
                names: this.data
            });
            this.data = '';
        },
        deleteData(out) {

            console.log(this.all.indexOf(out));
            this.all.splice(this.all.indexOf(out), 1);
        },
        hello(counter) {
            return this.all.indexOf(counter) + 1;
        },
        deleteAll() {
            this.all = [];
        }
    }
});
const app = Vue.createApp({
    data() {
        return {
            showmenu: true,
            part1: 'project1',
            part2: 'project2',
            part3: 'project3',
            part4: 'project4',
            part5: 'project5',
            part6: 'project6'
        }
    },
    methods: {
        project1(link) {
            this.project1 = link
        },
        Showmenu() {
            this.showmenu = !this.showmenu
        }
    }

})
app.mount("#app")
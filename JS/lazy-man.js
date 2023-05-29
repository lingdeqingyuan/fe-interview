class LazyMan {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        setTimeout(() => {
            this.next()
        })
    }

    next() {
        const task = this.tasks.shift()
        if (task) {
            task()
        }
    }



    eat(food) {
        const task = () => {
            console.log(`${this.name} eat ${food}`)
            this.next()
        }

        this.tasks.push(task)

        return this
    }

    sleep(time) {
        const task = () => {
            console.log(`${this.name} start sleep`)
            setTimeout(() => {
                console.log(`${this.name} has sleep ${time}s`)
                this.next()
            }, time * 1000)
        }

        this.tasks.push(task)

        return this;

    }
}

const man = new LazyMan('lyj')
man.sleep(10).eat('grape').eat('melon').sleep(5).eat('orange')
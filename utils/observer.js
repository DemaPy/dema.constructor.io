





function createObserver() {
    const observer = {
        subscribers: {},
    
        subscribe(name, args) {
            if (typeof args === "object") {
                this.subscribers = {
                    ...this.subscribers,
                    [name]: args
                }
            } else {
                this.subscribers = {
                    ...this.subscribers,
                    [name]: args
                }
            }
        },
    
        unsubscribe(fn) {
            this.subscribers = this.subscribers.filter(func => func !== fn)
        },
    
        notify(name, data) {
            if (name in this.subscribers) {
                typeof this.subscribers[name] === "object" ? this.subscribers[name].forEach(fn => fn(data)) : this.subscribers[name](data)
            } else {
                console.warn("There is no subscriber with such name: " + name)
            }
        }
    }

    return observer
}

export { createObserver }
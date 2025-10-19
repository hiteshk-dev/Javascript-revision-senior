class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push({ callback, once: false })
        }
        else {
            this.events[eventName] = [{ callback, once: false }]
        }
    }

    once(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName] = this.events[eventName].filter(t => t.callback !== callback)
        this.events[eventName].push({ callback, once: true })
    }

    off(eventName, callback) {
        if (!this.events[eventName]) return
        this.events[eventName] = this.events[eventName].filter(t => t.callback !== callback)
    }

    emit(eventName, ...args) {
        if (!this.events[eventName] || this.events[eventName].length === 0) return
      
        const listeners = [...this.events[eventName]]
        for (const listener of listeners) {
            listener.callback(...args)
            if (listener.once) {
                this.off(eventName, listener.callback)
            }
        }
    }
}

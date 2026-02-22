// class

class Activity {
    constructor (duration) {
        this.id = crypto.randomUUID()
        this.duration = duration;
        this.date = new Date().toLocaleDateString();
        this.isFinished = false;
        this.isNotCompleted = false;
    }

    getSummary() {
        const distance = this.dist ? this.dist : '';
        return `${this.type} - ${this.date} - (${this.duration}) mins ${distance} `
    }

}

class Running extends Activity {
    constructor(dist, duration){
        super(duration)
        this.getSummary();
        this.dist = dist;
        this.type = 'Running'
    }
}

class Cycling extends Activity {
    constructor(dist, duration){
        super(duration)
        this.getSummary();
        this.dist = dist;
        this.type = 'Cycling'
    }
}

class Gym extends Activity {
    constructor(duration){
        super(duration)
        this.getSummary();
        this.type = 'Gym';
        this.dist = 0;
    }
}

export { Activity, Running, Cycling, Gym};
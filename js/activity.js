// class

class Activity {
    constructor (duration, id, date, isFinished, isNotCompleted) {
        this.id = id || crypto.randomUUID()
        this.duration = duration;
        this.date = date || new Date().toLocaleDateString();
        this.isFinished = isFinished || false;
        this.isNotCompleted = isNotCompleted || false;
    }

    getSummary() {
        const distance = this.dist ? this.dist : '';
        return `${this.type} - ${this.date} - (${this.duration}) mins ${distance} `
    }

}

class Running extends Activity {
    constructor(dist, duration, id, date, isFinished, isNotCompleted){
        super(duration, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.dist = dist;
        this.type = 'Running'
    }
}

class Cycling extends Activity {
    constructor(dist, duration, id, date, isFinished, isNotCompleted){
        super(duration, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.dist = dist;
        this.type = 'Cycling'
    }
}

class Gym extends Activity {
    constructor(duration, id, date, isFinished, isNotCompleted){
        super(duration, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = 'Gym';
        this.dist = 0;
    }
}

class Swimming extends Activity {
    constructor(duration, id, date, isFinished, isNotCompleted){
        super(duration, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = 'Swimming';
        this.dist = 0;
    }
}

class JumpingRope extends Activity {
    constructor(duration, id, date, isFinished, isNotCompleted) {
        super(duration, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = 'Jumping-rope';
    }
}

class CustomActivity extends Activity {
    constructor(duration, type, id, date, isFinished, isNotCompleted) {
        super(duration, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = type;
    }
}

export { Activity, Running, Cycling, Gym, Swimming, JumpingRope, CustomActivity};
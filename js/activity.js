// class

class Activity {
    constructor (duration, day, id, date, isFinished, isNotCompleted) {
        this.id = id || crypto.randomUUID()
        this.duration = duration;
        this.day = day;
        this.date = date || new Date().toLocaleDateString();
        this.isFinished = isFinished || false;
        this.isNotCompleted = isNotCompleted || false;
    }

    getSummary() {
        return `${this.type} on ${this.date} - (${this.duration}) mins`
    }

}

class Running extends Activity {
    constructor(duration, day, id, date, isFinished, isNotCompleted){
        super(duration, day, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = 'Running'
    }
}

class Cycling extends Activity {
    constructor(duration, day, id, date, isFinished, isNotCompleted){
        super(duration, day, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = 'Cycling'
    }
}

class Gym extends Activity {
    constructor(duration, day, id, date, isFinished, isNotCompleted){
        super(duration, day, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = 'Gym';
    }
}

class Swimming extends Activity {
    constructor(duration, day, id, date, isFinished, isNotCompleted){
        super(duration, day, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = 'Swimming';
    }
}

class JumpingRope extends Activity {
    constructor(duration, day, id, date, isFinished, isNotCompleted) {
        super(duration, day, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = 'Jumping-rope';
    }
}

class CustomActivity extends Activity {
    constructor(duration, day, type, id, date, isFinished, isNotCompleted) {
        super(duration, day, id, date, isFinished, isNotCompleted)
        this.getSummary();
        this.type = type;
    }
}

export { Activity, Running, Cycling, Gym, Swimming, JumpingRope, CustomActivity};
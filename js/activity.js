// class

class Activity {
    constructor (duration) {
        this.id = crypto.randomUUID()
        this.duration = duration;
        this.date = new Date().toLocaleDateString();
        this.isFinished = false;
        this.isNotCompleted = false;
    }

}

class Running extends Activity {
    constructor(dist, duration){
        super(duration)
        this.dist = dist;
        this.type = 'Running'
    }
}

class Cycling extends Activity {
    constructor(dist, duration){
        super(duration)
        this.dist = dist;
        this.type = 'Cycling'
    }
}

class Gym extends Activity {
    constructor(duration){
        super(duration)
        this.type = 'Gym';
        this.dist = 0;
    }
}

export { Activity, Running, Cycling, Gym};
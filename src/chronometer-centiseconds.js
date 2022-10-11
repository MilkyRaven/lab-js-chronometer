class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=> {
      this.currentTime ++
      if (printTimeCallback) {
        printTimeCallback()
      }
      console.log(this.currentTime)
    },10)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let formattedNumber = ("0" + value).slice(-2);
    return formattedNumber;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}

let clock = new Chronometer;

let test = setInterval(() => {
  console.log(clock.getMinutes())
  console.log(clock.getSeconds())
  console.log(clock.getCentiseconds())
}, 1000)


 clock.start()


let test3 = setTimeout(() => {
  console.log(clock.getMinutes())
  console.log(clock.getSeconds())
  console.log(clock.getCentiseconds())
  clock.stop()
 }, 10000)

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    (this.days = document.querySelector('[data-value="days"]')),
      (this.hours = document.querySelector('[data-value="hours"]')),
      (this.mins = document.querySelector('[data-value="mins"]')),
      (this.secs = document.querySelector('[data-value="secs"]'));
    this.start();
  }

  start() {
    setTimeout(() => {
      this.computedTime();

      this.timerId = setInterval(() => {
        this.computedTime();
      }, 1000);
    }, 0);
  }
  computedTime() {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    if (time <= 0) {
      clearInterval(this.timerId);
      this.nullifyCountdown();
    }
    this.counting(time);
  }

  counting(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.updateCountdown(days, hours, mins, secs);
  }

  updateCountdown(days, hours, mins, secs) {
    this.days.textContent = days;
    this.hours.textContent = String(hours).padStart(2, '0');
    this.mins.textContent = String(mins).padStart(2, '0');
    this.secs.textContent = String(secs).padStart(2, '0');
  }

  nullifyCountdown() {
    this.days.textContent = 0;
    this.hours.textContent = String(0).padStart(2, '0');
    this.mins.textContent = String(0).padStart(2, '0');
    this.secs.textContent = String(0).padStart(2, '0');
  }
}

const myCountdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021').getTime(),
});

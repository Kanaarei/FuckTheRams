// 2026 NFL Draft (Round 1 start): April 23, 2026 at 8:00 PM Eastern, 5:00 PM Pacific
// Using a fixed Pacific offset for the displayed target time.
const TARGET_KICKOFF = new Date("2026-04-23T17:00:00-07:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const statusEl = document.getElementById("status");

function pad(n) {
  return n.toString().padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diffMs = TARGET_KICKOFF.getTime() - now.getTime();

  if (diffMs <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    statusEl.textContent = "Draft time!";
    return;
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = days.toString();
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
  statusEl.textContent = "";
}

updateCountdown();
setInterval(updateCountdown, 1000);

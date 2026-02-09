/*
2026 NFL Draft Round 1 start:
Thursday, April 23, 2026 at 8:00 PM Eastern.

During April, Eastern is typically UTC-4, so that is:
Friday, April 24, 2026 at 00:00:00 UTC.

Using UTC avoids browser date string parsing issues.
*/
const targetUtcMs = Date.UTC(2026, 3, 24, 0, 0, 0);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const statusEl = document.getElementById("status");

function pad2(n) {
  return String(n).padStart(2, "0");
}

function setAllZeros(message) {
  daysEl.textContent = "0";
  hoursEl.textContent = "00";
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  statusEl.textContent = message;
}

function updateCountdown() {
  const nowMs = Date.now();
  const diffMs = targetUtcMs - nowMs;

  if (Number.isNaN(targetUtcMs)) {
    setAllZeros("Countdown date is invalid.");
    return;
  }

  if (diffMs <= 0) {
    setAllZeros("Draft time!");
    return;
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days);
  hoursEl.textContent = pad2(hours);
  minutesEl.textContent = pad2(minutes);
  secondsEl.textContent = pad2(seconds);

  statusEl.textContent = "";
}

if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !statusEl) {
  // This usually means countdown.js loaded on a page without the expected IDs,
  // or the script is being loaded before the DOM exists.
  // In your file layout, this should not happen.
  console.error("Countdown elements not found in the DOM.");
} else {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

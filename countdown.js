(() => {
  // Countdown ends at: Jan 25, 2026 3:30 PM PST
  // PST is UTC-8, so that's Jan 25, 2026 23:30:00 UTC
  const targetUtcMs = Date.UTC(2026, 0, 25, 23, 30, 0);

  const elDays = document.getElementById("days");
  const elHours = document.getElementById("hours");
  const elMinutes = document.getElementById("minutes");
  const elSeconds = document.getElementById("seconds");
  const elStatus = document.getElementById("status");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function setValues(d, h, m, s) {
    elDays.textContent = String(d);
    elHours.textContent = pad(h);
    elMinutes.textContent = pad(m);
    elSeconds.textContent = pad(s);
  }

  function tick() {
    const now = Date.now();
    const diff = targetUtcMs - now;

    if (diff <= 0) {
      setValues(0, 0, 0, 0);
      elStatus.textContent = "Time’s up.";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setValues(days, hours, minutes, seconds);
    elStatus.textContent = "Counting down to kickoff.";
  }

  tick();
  setInterval(tick, 250);
})();

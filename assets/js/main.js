// funct toggle newslet

const SHOW_NEWSLETTER = document.getElementsByClassName("show__newsletter");
console.log(SHOW_NEWSLETTER);

for (const show of SHOW_NEWSLETTER) {
  show.addEventListener("click", () => {
    const newsletter = document.querySelector(".newsletter");
    newsletter.classList.toggle("active");
    console.log(newsletter);
  });
}

// décl des élém du compt à rebours

const countdown_ELEMENTS = {
  days: document.getElementById("day"),
  hours: document.getElementById("hour"),
  minutes: document.getElementById("minute"),
  seconds: document.getElementById("second"),
};

// fonc pour calculer le compte à rebours

function calculatecountdown(targetDate) {
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  if (timeDifference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  // calcul des jours, h, m, s restantes
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(timeDifference / 60);
  const days = Math.floor(timeDifference / 24);

  return {
    days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
}

// fonction pour mettre à jour le compte à rebours affiché dans la page
function updatecountdown(countdown) {
  countdown_ELEMENTS.days.textContent = countdown.days;
  countdown_ELEMENTS.hours.textContent = countdown.hours;
  countdown_ELEMENTS.minutes.textContent = countdown.minutes;
  countdown_ELEMENTS.seconds.textContent = countdown.seconds;
}

// Date de lancement
const LAUNCH_DATE = new Date("May 28, 2025 12:00:00");

// Interval pour mettre à jour le compte

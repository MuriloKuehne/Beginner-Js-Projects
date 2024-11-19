const monthNameElem = document.getElementById("month-name");
const dayNameElem = document.getElementById("day-name");
const dayNumberElem = document.getElementById("day-number");
const yearElem = document.getElementById("year");
const timeElem = document.getElementById("time");

function updateTime() {
  const date = new Date();

  monthNameElem.innerText = date.toLocaleString("en", {
    month: "long",
  });

  dayNameElem.innerText = date.toLocaleString("en", {
    weekday: "long",
  });

  dayNumberElem.innerText = date.toLocaleString("en", {
    day: "numeric",
  });

  yearElem.innerText = date.toLocaleString("en", {
    year: "numeric",
  });

  timeElem.innerText = date.toLocaleString("en", {
    timeStyle: "medium",
  });
}

updateTime();

setInterval(updateTime, 1000);

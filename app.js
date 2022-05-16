// function for digital clock

const clock = () => {
  const d = new Date();
  let hr = d.getHours();
  let mins = d.getMinutes();
  let sec = d.getSeconds();
  let midday = " AM ";

  //   Add "0" to Time (if less 10)
  if (hr < 10) {
    hr = "0" + hr;
  } else if (mins < 10) {
    mins = "0" + mins;
  } else if (sec < 10) {
    sec = "0" + sec;
  }

  // CHECK IF MIDDAY
  midday = hr >= 12 ? " PM" : " AM";

  // Select element
  let h = (document.querySelector(".hours").innerHTML = hr);
  let m = (document.querySelector(".minutes").innerHTML = mins);
  let s = (document.querySelector(".seconds").innerHTML = sec);
  let mid = (document.querySelector(".midday").innerHTML = midday);
};
setInterval(clock, 1000);

//  Function Get the current Date
const fullDate = () => {
  const d = new Date();
  let weekday = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
  ][d.getDay()];

  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ][d.getMonth()];

  let today = ` ${weekday}, ${month} ${d.getDate()} ${d.getFullYear()}`;

  let currentDate = (document.querySelector(".todayDate").innerHTML = today);
};
fullDate();

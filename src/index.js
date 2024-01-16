function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("dddd Do MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
updateTime();

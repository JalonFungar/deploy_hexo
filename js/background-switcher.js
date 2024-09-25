document.addEventListener("DOMContentLoaded", function() {
    var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var today = new Date().getDay();
    var body = document.body;
  
    body.style.backgroundImage = "url('/images/backgrounds/" + days[today] + ".jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
  });
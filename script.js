let form = document.querySelector("form");
let R;
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let H = parseInt(document.querySelector("#Hght").value);
  let W = parseInt(document.querySelector("#Wght").value);

  if (H == " " || H <= 0 || isNaN(H)) {
    a.innerHTML = `Enter the Height Properly ${H}`;
  } else if (W == " " || W <= 0 || isNaN(W)) {
    a.innerHTML = `Enter the Height Properly ${W}`;
  } else {
    R = (W / (H * H) * 10000).toFixed(2);
    a.innerHTML = R;
    if (R < 18.6) {
      a.style.color = "Red";
      d.innerHTML = "Under Weight";
      d.style.color = "Red";
    } else if (R > 24.9) {
      a.style.color = "Red";
      d.innerHTML = "Over Weight";
      d.style.color = "Red";
    } else {
      a.style.color = "Green";
      d.innerHTML = "Normal Weight";
      d.style.color = "Green";
    }
  }

 
});

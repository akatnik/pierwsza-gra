window.ctx = null;
rysujProstokat = false;
rysujLinie = false;
pocztekLinii = {
  x: 500,
  y: 0
}
kierunek = 1;

function rozpocznijRysowanie() {
  var canvas = document.getElementById("plotno");
  window.ctx = canvas.getContext("2d");

  document.addEventListener("keyup", obslugaKlawiatury);

  setInterval(rysuj, 50);
}

function rysuj() {
  wyczysc();

  if (rysujLinie) {
    pocztekLinii.y = pocztekLinii.y + kierunek * 10;
    if (pocztekLinii.y >= 500) {
      kierunek = -1;
    }
    if (pocztekLinii.y <= 0) {
      kierunek = 1;
    }

    narysujLinie(pocztekLinii);
  }

  if (rysujProstokat) {
    narysujCzerwonyKwadrat()
  }
}

function wyczysc() {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,500,500);
}

function narysujCzerwonyKwadrat() {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,50,50);
}

function narysujLinie(pocztekLinii) {
  ctx.beginPath(); //początek ścieżki
  ctx.moveTo(pocztekLinii.x, pocztekLinii.y); //przenieś pisak do pozycji x = 500 i y =0
  ctx.lineTo(0, 500); //rysuj linię do pozycji x = 0 i y = 500
  ctx.strokeStyle = '#00ff00'; //R=red(czerwony) g = green (zielony) b = blue (niebieski)
  ctx.lineWidth = 1;
  ctx.stroke();
}

function obslugaKlawiatury(event) {
  console.log(event);

  if (event.code === "Space") {
    rysujProstokat = !rysujProstokat;
  }

  if (event.code === "Enter") {
    rysujLinie = !rysujLinie;
  }
}

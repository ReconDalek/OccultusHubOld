const quoteElement = document.getElementById("rotatingQuote");

let quoteIndex = 0;

function rotateQuotes() {

  quoteIndex++;

  if (quoteIndex >= OCCULTUS_CONFIG.quotes.length) {
    quoteIndex = 0;
  }

  quoteElement.style.opacity = 0;

  setTimeout(() => {

    quoteElement.textContent =
      OCCULTUS_CONFIG.quotes[quoteIndex];

    quoteElement.style.opacity = 1;

  }, 300);
}

setInterval(rotateQuotes, 5000);
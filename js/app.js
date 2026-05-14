window.addEventListener("DOMContentLoaded", () => {

  const quoteElement =
    document.getElementById("rotatingQuote");

  if (!quoteElement) return;

  const quotes = OCCULTUS_CONFIG.quotes;

  let currentIndex =
    Math.floor(Math.random() * quotes.length);

  function setQuote(index) {

    quoteElement.style.opacity = "0";

    setTimeout(() => {

      quoteElement.textContent =
        `“${quotes[index]}”`;

      quoteElement.style.opacity = "1";

    }, 300);

  }

  setQuote(currentIndex);

  setInterval(() => {

    let nextIndex;

    do {

      nextIndex =
        Math.floor(Math.random() * quotes.length);

    } while (
      quotes.length > 1 &&
      nextIndex === currentIndex
    );

    currentIndex = nextIndex;

    setQuote(currentIndex);

  }, 10000);

});
const priceEl = document.getElementById('price');
const changeEl = document.getElementById('change');
const metaEl = document.getElementById('meta');

async function fetchQuote() {
  try {
    const res = await fetch('/api/quote/AAPL');
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    priceEl.textContent = `$${data.price.toFixed(2)}`;

    const diff = data.price - data.previousClose;
    const pct = (diff / data.previousClose) * 100;
    const sign = diff >= 0 ? '+' : '';
    changeEl.textContent = `${sign}${diff.toFixed(2)} (${sign}${pct.toFixed(2)}%)`;
    changeEl.className = `change ${diff >= 0 ? 'up' : 'down'}`;

    metaEl.textContent = `Market: ${data.marketState} · Updated ${new Date(data.time).toLocaleTimeString()}`;
  } catch (err) {
    metaEl.textContent = `Error: ${err.message}`;
  }
}

fetchQuote();
setInterval(fetchQuote, 10000);

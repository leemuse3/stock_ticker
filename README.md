# Stock Ticker

A minimal web app that shows the real-time price of AAPL, refreshing every 10 seconds.

## Run

```bash
npm install
npm start
```

Then open http://localhost:3000

## How it works

- `server.js` is an Express server that proxies quote requests to Yahoo Finance's
  chart API (`/api/quote/:symbol`), so the browser doesn't hit CORS issues.
- `public/` is a static frontend that polls `/api/quote/AAPL` and renders the
  price, change, and market state.

To track a different symbol, edit the `/api/quote/AAPL` call in `public/app.js`.

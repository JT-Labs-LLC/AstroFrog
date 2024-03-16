/**
 * Constants for the application:
 *
 * Addresses, URLs, etc.
 */
export const addresses = {
  token: "7DFxbvFxRdga7FrqhkehpXeeaR6yCZF9oJnZhpxCXHfx",
};

export const urls = {
  birdeye: `https://birdeye.so/token/${addresses.token}?chain=solana`,
  dexscreener: `https://dexscreener.com/solana/${addresses.token}`,
  raydiumlp: `https://raydium.io/liquidity/add/?coin0=${addresses.token}&coin1=sol&fixed=coin0&ammId=AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA`,
  raydiumbuy: `https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${addresses.token}&outputSymbol=AF&fixed=in`,
  githuborg: "https://github.com/orgs/JT-Labs-LLC",
  telegram: "https://t.me/+YLRmwGGZMBYyNzEx",
  twitter: "https://twitter.com/AstroFrog_AF",
  jupiter: `https://t0.jup.ag/swap/AF_${addresses.token}-SOL`,
  explorer: `https://solana.fm/address/${addresses.token}`,
};

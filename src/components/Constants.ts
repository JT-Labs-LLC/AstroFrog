/**
 * Constants for the application:
 *
 * Addresses, URLs, etc.
 */
export const addresses = {
  token: "EWiW8S1th53MPHAJUF3cYyjV6rmMTqhzbJs2ts6xdjbT",
};

export const urls = {
  birdeye: `https://birdeye.so/token/${addresses.token}?chain=solana`,
  raydium: `https://raydium.io/liquidity/add/?coin0=sol&coin1=${addresses.token}&fixed=coin0&ammId=AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA`,
  githuborg: "https://github.com/orgs/JT-Labs-LLC",
  telegram: "https://t.me/+YLRmwGGZMBYyNzEx",
  twitter: "https://twitter.com/AstroFrog_AF",
  jupiter: `https://jup.ag/swap/SOL-AF_${addresses.token}`,
  explorer: `https://solana.fm/address/${addresses.token}}`,
};

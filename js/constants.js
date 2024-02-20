export const SPL_TOKEN = {
  SOL: {
    mint: "So11111111111111111111111111111111111111112",
    decimals: 9,
    url: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
  },
  VICE: {
    mint: "AWeL8nCXxJm3GZkEVRqxeeT5KWT2KwDa1shgQFeBogkC",
    decimals: 9,
    url: "https://dd.dexscreener.com/ds-data/tokens/solana/AWeL8nCXxJm3GZkEVRqxeeT5KWT2KwDa1shgQFeBogkC.png",
  },
  USDC: {
    mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    url: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
  },
  GH0ST: {
    mint: "HbxiDXQxBKMNJqDsTavQE7LVwrTR36wjV2EaYEqUw6qH",
    decimals: 9,
    url: "https://gh0stc0in.xyz/images/logo.png",
  },
  WOO: {
    mint: "JEFMBtu3rqAeJ21XDzqL9UHr7pswMvm8ogAeTkezpktM",
    decimals: 9,
    url: "https://i.ibb.co/mNtxvyX/image.jpg",
  },
  BOZO: {
    mint: "EJPtJEDogxzDbvM8qvAsqYbLmPj5n1vQeqoAzj9Yfv3q",
    decimals: 9,
    url: "https://i.ibb.co/7j2tZYq/image-2.jpg",
  },
  SOLS: {
    mint: "2wme8EVkw8qsfSk2B3QeX4S64ac6wxHPXb3GrdckEkio",
    decimals: 9,
    url: "https://i.ibb.co/wQ5g1Ym/image.png",
  },
  ONLYFINS: {
    mint: "BeMR5AT5yhk3DSjyLNKumgjbuuyDBNTUo4LsGWHLdbSn",
    decimals: 9,
    url: "https://dd.dexscreener.com/ds-data/tokens/solana/BeMR5AT5yhk3DSjyLNKumgjbuuyDBNTUo4LsGWHLdbSn.png",
  },
  j00ce: {
    mint: "Bjc5RNFVRyn4zkBmPuZBEJJSeYGLj9GuD5X2qqi2oDCa",
    decimals: 9,
    url: "https://i.ibb.co/MPTs6js/image-1.jpg",
  },
  GEM: {
    mint: "BHnyR5iCR8kBZhF97EJ6mi8K8JCFDNg19j5zaU35RLoJ",
    decimals: 9,
    url: "https://dd.dexscreener.com/ds-data/tokens/solana/BHnyR5iCR8kBZhF97EJ6mi8K8JCFDNg19j5zaU35RLoJ.png",
  },
  LAMP: {
    mint: "GivcfFcEry199qpjScB7h2sqmCDwAc5dWnqEpLfrEueU",
    decimals: 9,
    url: "https://i.ibb.co/1nSXPbS/image-1.png",
  },
  LUDES: {
    mint: "Bcayk4y8YB4xRamFZesunDQ13RSDaitxR4QjF1h6aVSN",
    decimals: 9,
    url: "https://cryptologos.cc/logos/poocoin-poocoin-logo.png",
  },
}; // Add & Remove tokens to your liking while abiding by this format.
// Please note that DEFAULT_INPUT_TOKEN_SYMBOL, DEFAULT_OUTPUT_TOKEN_SYMBOL, DOLLAR_CURRENCY_SYMBOL and REFERRAL_ACCOUNT_OUT_TOKENS must be included in SPL_TOKEN

export const ASSHOLE_FEE = 50; // 0.5%, set to 0 to disable platform fees. Charging platform fees only when not trading DEFAULT_OUTPUT_TOKEN_SYMBOL and the output token is a normal SPL
export const COMMITMENT = "confirmed"; // options: processed / confirmed / finalized -> wait untill swap tx is confirmed.
export const DEFAULT_INPUT_TOKEN_SYMBOL = "SOL"; // token displayed at top -> usually SOL / USDC
export const DEFAULT_OUTPUT_TOKEN_SYMBOL = "VICE"; // token displayed at bottom -> usually your project token
export const DEFAULT_SLIPPAGE = 10; // 10%
export const DOLLAR_CURRENCY_SYMBOL = "USDC"; // token to get a $ quote against from jup
export const GET_QUOTE_DELAY = 1000; // 1 second -> how long after user finishes typing should we fetch a quote from JUP API
export const JUPITER_FEES_IN_SOL = 0.003; // When you hit max buy in SOL, tx will fail, so we deduct some SOL to have enough for tx
export const MAX_RETRY_TIME = 20000; // 20 seconds -> if tx still hasn't reached COMMITMENT state after 30 seconds (Default waiting time for phantom) -> wait an extra MAX_RETRY_TIME miliseconds and keep rechecking untill we can assume the tx is failed
export const MAX_SLIPPAGE_ALLOWED = 99.99; // 99.99%
export const REFERRAL_ACCOUNT_OUT_TOKENS = ["SOL", "USDC"]; // tokens registered on refferal program
export const REFERRAL_ACCOUNT_PUBKEY =
  "Dmqi47Z5SZkDBdDcbEAdHMPY1RfS7bgELQ3GWjg9QSQ"; // Jup Referal, leave empty string if no platform fees
export const REFETCH_TX_INTERVAL_MS = 2000; // 2 seconds -> if tx still hasn't reached COMMITMENT state after 30 seconds (Default waiting time for phantom) -> refetch tx state every REFETCH_TX_INTERVAL_MS miliseconds untill MAX_RETRY_TIME has passed or the tx has reached the COMMITMENT state
export const RPC_URL_SOLANA =
  "https://chris-zzb53r-fast-mainnet.helius-rpc.com/"; // endpoint to use for SWAP & Balances
export const SWAP_LOGO_URL = "/images/logo.png"; // what mini logo to display on top left of swap
export const SWAP_NAME = "gh0sw0p"; // what name to display on top left of swap
export const UPDATE_QUOTE_INTERVAL = 20000; // 20 seconds -> every UPDATE_QUOTE_INTERVAL miliseconds get a new jup quote for current trade
export const WALLET_ADDRESS_LETTER_COUNT = 4; // abcd...efgh -> how many letter should it display at start and end of wallet address

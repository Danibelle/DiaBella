const envVars = {
  API_URL: String(process.env.NEXT_PUBLIC_APIURL),
  NEXT_PUBLIC_CONTRACT_ADDRESS: String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
  NEXT_PUBLIC_ALCHEMY_ID: String(process.env.NEXT_PUBLIC_ALCHEMY_ID),
  NEXT_PUBLIC_INFURA_ID: String(process.env.NEXT_PUBLIC_INFURA_ID),
  NEXT_PUBLIC_ETHERSCAN_API_KEY: String(process.env.ETHERSCAN_API_KEY),
  CONTRACT_ADDRESS: String(process.env.CONTRACT_ADDRESS),
  IPFS_GATEWAYS: String(process.env.IPFS_GATEWAYS),
  ETHERSCAN_URL: String(process.env.ETHERSCAN_URL),


}

export default envVars

/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    GNOSIS_RPC_URL: process.env.GNOSIS_RPC_URL,
    IPFS_GATEWAY: process.env.IPFS_GATEWAY,
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/token',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}

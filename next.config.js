module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/personal',
        permanent: true,
      }
    ]
  },
}

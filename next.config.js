module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/personal/home',
        permanent: true,
      }
    ]
  },
}

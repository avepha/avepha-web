export type AvephaWebConfiguration = {
  baseUrl: string
}

const config: AvephaWebConfiguration = {
  baseUrl: `http://${window.location.hostname}:3000`
}

export default config

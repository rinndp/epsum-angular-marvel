import * as CryptoJS from 'crypto-js'

export function  marvelAuthParams() {
  const ts = new Date().getTime().toString();
  const pubKey = '55fdea5bb02f9e3d5e97a747b8e07ffa'
  const privKey = '9bc7cb7e63d7d1c31cab830a15f0dbf5e11a0a04'

  const hash = CryptoJS.MD5((ts + privKey + pubKey).toString())

  return {
    ts,
    apikey: pubKey,
    hash: hash
  }
}

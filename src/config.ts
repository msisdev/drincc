export const $PATH = {
  about: "/a",
  code: (code: string) => `/${code}`,
  error: "/e",
  home: "/",
  notFound: "/n",
  submit: "/s",
}

export const $POLICY = {
  kvTTL: 15_552_000,  // 180d
  minKeyLen: {
    short: 4,
    micro: 3,
    words: 2,
  },
  maxKeyTry: 10,
}
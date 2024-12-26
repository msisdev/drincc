# drincc
An Online URL Shortener Tool

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## What is this?
Example about how to use
- [AstroJS](https://astro.build/)
- [React](https://react.dev/)
- on [Cloudflare Pages](https://pages.cloudflare.com/).

I used VanillaCSS and [BEM](https://getbem.com/) method. So the code will be simple and easy to read.

## Folder structure?
```
/src
├── assets
├── client
├── components
├── layouts
├── pages
|   ├── a.astro``````````/a  (info page)
|   ├── index.astro``````.   (home page)
|   ├── [key].astro``````/*  (wildcard for everything else)
|   └── s
|       └── index.ts`````/s  (API POST: create new key-url pair)
├── server
├── store
└── styles
    ├── blocks
    └── layout
```

## 이 프로젝트에 대해

AstroJS의 DX를 탐구하는 간단한 프로젝트입니다.
VanillaCSS, BEM을 사용하여 코드를 읽기 쉽습니다.

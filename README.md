<p align="center">
    <img src="./slynite-logo.png">
</p>

![Next.js](https://img.shields.io/badge/Next.js-131313?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwindcss-131313?style=for-the-badge&logo=Tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-131313?style=for-the-badge&logo=Docker&logoColor=white)
![License](https://img.shields.io/github/license/Slynite/website?style=for-the-badge&color=131313&logo=license&logoColor=white)
![Release](https://img.shields.io/github/v/release/Slynite/website?style=for-the-badge&color=131313&logo=license&logoColor=white)

# [Slynite.com](https://slynite.com)
In this repository is the source code of the Slynite website. This project is build with [Next.js](https://nextjs.org/).

## Developer Environment
- Run in terminal `git clone https://github.com/Slynite/website/`
- Rename `.env.example` to `.env` and change environment variables
- Run `npm install` in terminal
- Run `npm run dev` in termianl to start the dev server.
- Access site on `[IP]:3000`

## Production

### Using NPM
- Run `npm install` in terminal
- Run `npm run build && npm run start` in terminal
- Access site on `[IP]:3000`

### Using Docker
[Install Docker]() on your machine.
Build your container: `docker build -t slynite-web .`.

Run your container: `docker run -p 3000:3000 slynite-web`.

- Access site on `[IP]:3000`


## Understand Versions
You would wonder how a version is construct for this project, but actually it is very easy and simple to understand.

For example the version 2022.04.1 has three parts.
- 2022: Year when the version was released.
- 04: Month when the version was released (in this example: April)
- 1: The number of release in this month and year.

## Contributer
<a href = "https://github.com/slynite/website/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=slynite/website"/>
</a>

## License
This project is licensed under [MIT](./LICENSE) and proudly created by the [Slynite Team](https://slynite.com/team).

The Open soure Licenses we use can be found [here](https://slynite.com/licenses).
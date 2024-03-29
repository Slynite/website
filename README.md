<p align="center">
    <img src="./slynite-new-look.jpg">
</p>

[![Next.js](https://img.shields.io/badge/Next.js-131313?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwindcss-131313?style=for-the-badge&logo=Tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-131313?style=for-the-badge&logo=Docker&logoColor=white)](https://docker.com)
[![License](https://img.shields.io/badge/Slynite%20modified%20MIT%20License-131313?style=for-the-badge&logo=Open%20Source%20Initiative&logoColor=white)](./LICENSE)
![Release](https://img.shields.io/github/v/release/Slynite/website?style=for-the-badge&color=131313&logo=license&logoColor=white)

# [Slynite.com](https://slynite.com)
In this repository is the source code of the current Slynite website. This project is build using [Next.js](https://nextjs.org/) and [Tailwindcss](https://tailwindcss.com).

## Developer Environment
- Run in terminal `git clone https://github.com/Slynite/website/`
- Rename `.env.example` to `.env` and change environment variables
- Run `npm ci` in terminal
- Run `npm run dev` in termianl to start the dev server.
- Access site on `[IP]:3000`

## Production

### Using NPM
- Run `npm ci` in terminal
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

## Development diagramm

<details><summary>Click to reveal diagramm</summary>
  <img src = "./development-circle.drawio.png"/>

  If there is a new version of this project, please change the version in `package.json` to the new one (Milestone) before merge.
</details>


## Contributer
<a href = "https://github.com/slynite/website/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=slynite/website"/>
</a>

## License
This project is licensed under [Slynite modified MIT](./LICENSE) and proudly created by the [Slynite Team](https://slynite.com/team).

The Open soure Licenses we use can be found [here](https://slynite.com/legal/licenses).

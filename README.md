# Laravel Inertia

**Typescript** and **React** on the front-end, a feature-rich back-end,
and components as responses.

## Demo

![OpenLayers Map](storage/app/public/demo/screen-ol-tz-map.png)

This includes some articles, and a TimeZone map. In addition to
TSX components and pages, `resources/` also contains MDX snippets like these:

- [About Me](resources/js/Pages/AboutMe.mdx)
- [About my last project](resources/js/Pages/LastProject.mdx)
- [Linux Tips](resources/js/Pages/LinuxMintSetup.mdx)

## Local Dev

<details><summary>How to run locally</summary>

Install `npm` either by getting it
[here](https://nodejs.org/en)
or by using `nvm` [like this](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

Then, install composer [like this](https://laravel.com/docs/11.x#installing-php)
(Specifically, look for a command that fetches from "https://php.new").

Then, install dependencies:

    composer install
    npm ci

Finally, run the app:

    composer run dev

</details>

<details><summary>Dev setup</summary>

- See `.vscode/extensions.json` for recommended extensions.

Check if ESLint is working. Check that autoformatting works, too.
Prettier should sort tailwind classes, and that sorting can prevent issues.

### Sail / Docker

This project does not yet use Sail,
but these `artisan` commands are already available
to help containerize the app and add services.

- `sail:install`
- `sail:publish`
- `sail:add`, which allows easy installation of
  - redis
  - mariadb
  - pgsql
  - and more, see `./vendor/laravel/sail/stubs/`

</details>

<!--note: See if ValKey is a good alternative to Redis-->

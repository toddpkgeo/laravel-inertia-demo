# Laravel Inertia

![TypeScript](https://img.shields.io/badge/TypeScript-gray?logo=typescript)
![React](https://img.shields.io/badge/React-gray?logo=react)
![MDX](https://img.shields.io/badge/MDX-gray?logo=mdx)
![Laravel](https://img.shields.io/badge/Laravel-gray?logo=laravel)

In this demo, I try server-rendered components, a timezone map with OpenLayers,
and MDX snippets like these:

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
    php artisan migrate
    php artisan db:seed

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

# Hello from GoDaddy

[![Deploy to GoDaddy Node.js Hosting](https://host.godaddy.com/nodejs/deploy-button.svg)](https://host.godaddy.com/nodejs/deploy?repository-url=https%3A%2F%2Fgithub.com%2Fjwatson2-godaddy%2Fgodaddy-hello-world)

A minimal Node.js and Express app. It serves a page that says "Hello from GoDaddy" plus a small JSON API.

## Deploy with one click

Select the button above to create your own copy on GoDaddy Node.js Hosting. It creates a new app and uploads this repository's code; the app isn't linked to the repository afterwards.

The button only works once this repository is public. It is private until it clears GoDaddy's open source release review.

## Run it

```sh
npm install
npm start
```

Open http://localhost:3000. Set `PORT` to use a different port.

## Routes

| Route | Returns |
|---|---|
| `/` | The "Hello from GoDaddy" page |
| `/api/hello` | `{ "message": "Hello from GoDaddy" }` |
| `/health` | `{ "status": "ok", "uptime": <seconds> }` |

## Test

```sh
npm test
```

Uses Node's built-in test runner, so there are no test dependencies.

## Dependencies

Express is the only dependency. `.npmrc` pins the public npm registry, so installs and the lockfile never use a private mirror.

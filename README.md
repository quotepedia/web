# Quotepedia front-end

## 📃 Prerequisites

To run the frontend at your local machine, install the following:

- [pnPm](https://pnpm.io/installation): Fast, disk space efficient package manager.

## 📦 Building from source

To start, open a command prompt and follow these instructions:

### Step 1 — Install dependencies

```sh
pnpm i
```

### Step 2 — Configure the environment

Create `.env` file in the root directory with the following contents:

```properties
VITE_APP_NAME=$npm_package_name
VITE_APP_VERSION=$npm_package_version

VITE_API_URL="http://127.0.0.1:8000/"

VITE_SESSION_SECRET="9aCbXMa1%pJcCMubS^HuprJ5YjS&#xY5"
VITE_SECURE_COOKIES=
```

These settings are suitable for the most who want to run the app **locally**. Here's a more detailed and advanced explanation of each configuration option:

| Option                | Description                                                                                                                                                                                                                         | Type      | Default | Required |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- | -------- |
| `VITE_APP_NAME`       | The web app name.                                                                                                                                                                                                                   | `string`  |         | ✓        |
| `VITE_APP_VERSION`    | The web app version.                                                                                                                                                                                                                | `string`  |         | ✓        |
| `VITE_API_URL`        | URL of the API server that the web app will interact with. You may also want to [setup back-end](../backend/README) to get it first.                                                                                                | `string`  |         | ✓        |
| `VITE_SESSION_SECRET` | Private key used to encrypt sessions. **Must be at least 32 characters long**.                                                                                                                                                      | `string`  |         | ✓        |
| `VITE_SECURE_COOKIES` | Determines whether the cookies sent to browser should be marked as [secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#block_access_to_your_cookies). Make sure to enable this when have an SSL (HTTPS) certificate. | `boolean` | `false` | ✗        |

> [!NOTE]
> You can also browse all available configuration options [here](./src/global.d.ts).

### Step 3 — Run the app

To build and start the app, just execute the following command:

```sh
pnpm serve
```

The setup is done. Enjoy using this! 🎉

## 🛟 FAQ

### Error | Uncaught Client Exception

Make sure `VITE_SECURE_COOKIES` is not set to `true` or you have a valid SSL (HTTPS) certificate.

### Error: Empty password

`VITE_SESSION_SECRET` Configuration option is not set. Make sure to re-read the [step 2](#step-2--configure-the-environment) and clear browser cookies.

> [!NOTE]
> You may also need to **re-build** the web app using `pnpm serve` or `pnpm build` to include newly configured options in `.env`.

### Seroval issue

```
Error
Seroval caught an error during the parsing process.

TypeError
Response.clone: Body has already been consumed.
```

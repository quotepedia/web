# @quotepedia/web

## 📦 Building

To start, open a command prompt and follow these instructions:

### Prerequisites

To run this web app on your local machine, install the following:

- [pnPm](https://pnpm.io/installation): Fast, disk space efficient package manager.

### Step 1 — Install dependencies

```sh
pnpm i
```

### Step 2 — Configure the environment

Create `.env` file in the root directory with the following contents:

```properties
# Must be at least 32 characters long
# Generate with `head -c32 /dev/urandom | base64`
SESSION_SECRET="9aCbXMa1%pJcCMubS^HuprJ5YjS&#xY5"

VITE_API_URL="http://127.0.0.1:8000/"

# Make sure to enable this when have an SSL (HTTPS) certificate
VITE_SECURE_COOKIES=
```

These settings are suitable for the most who want to run the app **locally**. Here's a more detailed and advanced explanation of each configuration option:

| Option                | Description                                                                                                                                                                                                                         | Type      | Default | Required |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- | -------- |
| `SESSION_SECRET` | Private key used to encrypt sessions. **Must be at least 32 characters long**.                                                                                                                                                      | `string`  |         | ✓        |
| `VITE_API_URL`        | URL of the API server that the web app will interact with.                                                                                                                                                                          | `string`  |         | ✓        |
| `VITE_SECURE_COOKIES` | Determines whether the cookies sent to browser should be marked as [secure](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#block_access_to_your_cookies). Make sure to enable this when have an SSL (HTTPS) certificate. | `boolean` | `false` | ✗        |

To run in production, you should export the `SESSION_SECRET` variable with your value:

```sh
EXPORT SESSION_SECRET=""
```

> [!NOTE]
> You can also browse all available configuration options [here](./src/global.d.ts).

### Step 3 — Run the app

To build and start the app, just execute the following command:

```sh
pnpm serve
```

The setup is done. Enjoy using this! 🎉

### FAQ

#### Error | Uncaught Client Exception

Make sure `VITE_SECURE_COOKIES` is not set to `true` or you have a valid SSL (HTTPS) certificate.

#### Error: Empty password

`SESSION_SECRET` Configuration option is not set. Make sure to re-read the [step 2](#step-2--configure-the-environment) and clear browser cookies.

> [!NOTE]
> You may also need to **re-build** the web app using `pnpm serve` or `pnpm build` to include newly configured options in `.env`.

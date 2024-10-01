<p align="center">
  <img width="96" src="https://github.com/user-attachments/assets/a7ca904e-0cd4-42cf-9b05-368b5ac250ad" alt="App icon" />
</p>

<h1 align="center">
  Quotepedia
</h1>

<p align="center">
  A library of inspiration that you create yourself.
</p>

<p align="center">
  <img src="https://img.shields.io/librariesio/github/quotepedia/web" alt="Dependencies" />
  <img src="https://img.shields.io/github/actions/workflow/status/quotepedia/web/pnpm.yaml" alt="Status" />
  <img src="https://img.shields.io/github/repo-size/quotepedia/web" alt="Size" />
</p>

## 🗝️ Features

* Comming soon…

## 🗺️ Roadmap

To see the current and future tasks for this project, please navigate to the [projects](https://github.com/quotepedia/web/projects) tab.

## 📦 Building from source

### Prerequisites

To run this web app on your local machine, install the following:

- [pnPm](https://pnpm.io/installation): Fast, disk space efficient package manager.

To start, open a command prompt and follow these instructions:

### Step 1 — Install dependencies

```sh
pnpm i
```

### Step 2 — Configure the environment

Create `.env` file in the root directory with the following contents:

```properties
VITE_API_URL="http://127.0.0.1:8000/"

# Must be at least 32 characters long
# Generate with `head -c32 /dev/urandom | base64`
VITE_SESSION_SECRET="9aCbXMa1%pJcCMubS^HuprJ5YjS&#xY5"

# Make sure to enable this when have an SSL (HTTPS) certificate
VITE_SECURE_COOKIES=
```

These settings are suitable for the most who want to run the app **locally**. Here's a more detailed and advanced explanation of each configuration option:

| Option                | Description                                                                                                                                                                                                                         | Type      | Default | Required |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- | -------- |
| `VITE_API_URL`        | URL of the API server that the web app will interact with.                                                                                                                                                                          | `string`  |         | ✓        |
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

### FAQ

#### Error | Uncaught Client Exception

Make sure `VITE_SECURE_COOKIES` is not set to `true` or you have a valid SSL (HTTPS) certificate.

#### Error: Empty password

`VITE_SESSION_SECRET` Configuration option is not set. Make sure to re-read the [step 2](#step-2--configure-the-environment) and clear browser cookies.

> [!NOTE]
> You may also need to **re-build** the web app using `pnpm serve` or `pnpm build` to include newly configured options in `.env`.

## ❤️ Acknowledgments

See the [contributors](https://github.com/quotepedia/web/contributors) who participated in this project and the [dependencies](https://github.com/quotepedia/web/network/dependencies) used.

## 📜 License

This project is licensed under the **MIT** — see the [`LICENSE.md`](LICENSE.md) file for details.

# Stan Coding Challenge

## The technology used

This project was set up using [Vite](https://vitejs.dev/) with the React + TS starter. In the persuit of completing as much of this challenge within the time period specified, I made the choice to use [styled-components](https://styled-components.com/).

I would normally have used [@tanstack/react-query](https://tanstack.com/query/latest) for caching fetch queries, but in an attempt to use as little third party libraries as possible, I instead chose to try and implement caching with the [useCustomQuery hook](./src/hooks/useCustomQuery.tsx)

## Technical and architectural decisions

- `Vite` was to set up the project, as Create React App is depreciated and, as it is no longer being maintained, it has outstanding security vulnerabilities
- I chose `TypeScript` as, even on smaller projects, I find that I am able to write code faster due to the type safety.
- `styled-components` was picked as I find that it allows me to write CSS faster, while still maintaining full control over the styles.
- While `tanstack-router` appears to be better in certain areas, it is still new, and I ultimately decided to use `react-router` as it seems to have more support at the moment, and I am more familiar with it.

## What improvements could be made?

As I tried to showcase my ability, while remaining within the allocated time limit, there were several tradeoffs that I made. These include:

- Automated integration tests. At the moment I have added unit tests to cover most of the core functionality, but did not have time to add integration testing. As this data is coming from an external source, integration testing is essential to ensure that there are alerting processes in place if that data were to ever change.
- I would have preferred to use `@tanstack/react-query` for caching network responses. It could be combined with `react-router v6`'s `data api routers` so that a route begins fetching data associated with it before the route navigation occurs, as specified in the `loader` parameter. This proved to take too long to try and implement manually in the given time constraint.
- CSS. Overall, I think there could be some improvements to the way the CSS was written. In attempting to do it quickly, there were some magic numbers used in places, and I believe there is room for improvement in terms of mobile responsiveness.

## What would I do differently if I were allocated more time?

If given more time, I would have focused on adding integration tests, as well as to clean up the CSS more. After those, I would have focused on improving my caching mechanism, and attempt to get it working with the `data api routers`.

## Set up

### Local

To set up the repo, I recommend using the latest version of node. Alternatively if you use [nvm](https://github.com/nvm-sh/nvm), you can use the following shell command to use the lts version:

```console
nvm use
```

Once you have the correct version installed, you can install dependencies with the following:

```console
npm install
```

After the dependencies have installed, you should be able to run the website with the following:

```console
npm run dev
```

This will expose the website on [localhost:5173](http://localhost:5173)

### Docker

Alternatively, if you have the latest version of [docker](https://www.docker.com/) installed on your system, you can run the following:

```console
docker compose up
```

This will also expose the website on [localhost:5173](http://localhost:5173)

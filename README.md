# ndc-sendgrid-deno

Sendgrid connector using `ndc-typescript-deno`

This repository provides a example Typescript function that can be used with the [`ndc-typescript-deno`](https://github.com/hasura/ndc-typescript-deno/) connector.

To deploy from the Hasura CLI do

```bash
hasura3 connector create sendgrid:deno:v1 \
  --github-repo-url https://github.com/hasura/ndc-typescript-deno/tree/main \
  --config-file <(echo '{}') \
  --volume ./functions:/functions \
  --env SENDGRID_API_KEY='YOUR_SENDGRID_API_KEY' \
  --env SERVICE_TOKEN_SECRET='MY-PRESHARED-HASURA-TOKEN'
```

Note that you will need the `connector` plugin installed into Hasura CLI to do the above.

```bash
hasura3 plugin install connector
```

## Deploying to Hasura Cloud

First, create a Hasura DDN project if you don't have one already:

```bash
hasura3 project create
```

Take the project name returned by that command (or use your existing project name) and set it in the `hasura.yaml` file.

Then, update your `subgraphs/default/sendgrid.hml` using the [Hasura VSCode LSP](https://marketplace.visualstudio.com/items?itemName=HasuraHQ.hasura)

Add your deployed connector's URL to the `DataSource` section.

Run the code actions:

```
> Hasura: Refresh data source
> Hasura: Track all collections...
```

Then use your metadata referencing your connector to create a build:

```bash
hasura3 build create
```

## Using as a Stand-Alone Connector

While you can deploy using the above command referencing the typescript connector
you can also use this pattern as a connector in its own right by leveraging the
Dockerfile.

This means that you don't need to specify any functions, etc.

This can be a pattern you can use to quickly provide connectors that can be shared
by the Hasura community and on the [Connector Hub](https://hasura.io/connectors)

```bash
hasura3 connector create sendgrid:deno:standalone:v1 \
  --github-repo-url https://github.com/hasura/ndc-sendgrid-deno/tree/main \
  --config-file <(echo '{}') \
  --env SENDGRID_API_KEY='YOUR_SENDGRID_API_KEY' \
  --env SERVICE_TOKEN_SECRET='MY-PRESHARED-HASURA-TOKEN'
```

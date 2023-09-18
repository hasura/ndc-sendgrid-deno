# ndc-sendgrid-deno

Sendgrid connector using `ndc-typescript-deno`

This repository provides a example Typescript function that can be used with the [`ndc-typescript-deno`](https://github.com/hasura/ndc-typescript-deno/) connector.

To deploy from the Hasura CLI do

```
hasura3 connector create sendgrid:deno:v1 \
  --github-repo-url https://github.com/hasura/ndc-typescript-deno/tree/main \
  --config-file config.json \
  --volume ./functions:/functions \
  --env SENDGRID_API_KEY='YOUR_SENDGRID_API_KEY' \
  --env SERVICE_TOKEN_SECRET='MY-PRESHARED-HASURA-TOKEN'
```

## Using as a Stand-Alone Connector

While you can deploy using the above command referencing the typescript connector
you can also use this pattern as a connector in its own right by leveraging the
Dockerfile.

This means that you don't need to specify any functions, etc.

This can be a pattern you can use to quickly provide connectors that can be shared
by the Hasura community and on the [Connector Hub](https://hasura.io/connectors)

```
hasura3 connector create sendgrid:deno:standalone:v1 \
  --github-repo-url https://github.com/hasura/ndc-sendgrid-deno/tree/main \
  --config-file config.json \
  --env SENDGRID_API_KEY='YOUR_SENDGRID_API_KEY' \
  --env SERVICE_TOKEN_SECRET='MY-PRESHARED-HASURA-TOKEN'
```

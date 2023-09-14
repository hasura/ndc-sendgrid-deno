# ndc-sendgrid-deno
Sendgrid connector using `ndc-typescript-deno`

This repository provides a example Typescript function that can be used with the [`ndc-typescript-deno`](https://github.com/hasura/ndc-typescript-deno/) connector.

To deploy from the Hasura CLI do

```bash
> hasura3 connector create sendgrid:deno:v1 --github-repo-url https://github.com/hasura/ndc-typescript-deno/tree/main --config-file config.json --volume ./functions:/functions --env SENDGRID_API_KEY='YOUR_SENDGRID_API_KEY'
```
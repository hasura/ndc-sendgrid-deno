
# See https://github.com/hasura/ndc-typescript-deno/tags for the latest tag to use via FROM
# It is recommended that you pin a release tag rather than using `main`

FROM ghcr.io/hasura/ndc-typescript-deno:main

COPY ./functions:/functions
RUN EARLY_ENTRYPOINT_EXIT=true ./entrypoint.sh /app/ndc-typescript-deno --configuration /placeholder-config.json

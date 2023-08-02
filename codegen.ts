import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://faustexample.wpengine.com/graphql",
  documents: ["src/**/*.{tsx,ts}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [

      ],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;

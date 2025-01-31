export default ({ env }) => ({
    graphql: {
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: true, // Enables GraphQL Playground in production
        depthLimit: 10,
        amountLimit: 100,
      },
    },
  });
  
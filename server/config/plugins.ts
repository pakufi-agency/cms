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
    'content-manager': {
    config: {
      editor: {
        // allow <br> in RichText
        allowedContent: true,
      },
    },
  },
  'sanitize': {
    config: {
      allowedTags: ['br', 'a', 'button', 'strong', 'em', 'u', 'span', 'data-url', 'src', 'href'],
    },
  },
  });
  
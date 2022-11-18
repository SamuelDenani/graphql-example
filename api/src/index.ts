import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import type { Context } from "./typings/global";
import { PlaceholderService } from "./services";
import schema from "./schema";
import resolvers from "./resolvers";

const server = new ApolloServer<Context>({
  typeDefs: [schema],
  resolvers,
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
      const { cache } = server;

      return {
        services: {
          placeholder: new PlaceholderService({ cache }),
        },
      };
    },
  });

  console.log(`server listening on ${url}...`);
})();

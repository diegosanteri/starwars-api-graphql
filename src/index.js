
const express = require('express');
var cors = require('cors');

const apolloServer = require('./apolloServer');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const app = express();

app.use(cors(corsOptions));
apolloServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
)
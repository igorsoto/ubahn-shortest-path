const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Joi = require('@hapi/joi');
const UBahnService = require('./domain/ubahn-service');

const ubahnService = new UBahnService();

const init = async () => {

  const server = Hapi.server({
      port: 3000,
      host: 'localhost'
  });

  const swaggerOptions = {
    info: {
        title: 'Munich UBahn Shortest Path API',
        version: '1.0.0',
    },
  };

  await server.register([
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
  ]);


  server.route({
    method: 'GET',
    path: '/munich/ubahn/from/{from}/to/{to}',
    options: {
      handler: (request, h) => {
        const { from, to } = request.params;
        const path = ubahnService.shortestPath(from, to);
        return h.response({
          shortestPath: path
        });
      },
      description: 'GET shortest path between two stations',
      tags: ['api'], // ADD THIS TAG
      validate: {
        params: {
          from: Joi.string().allow(ubahnService.listStations()).required().description('Name of the origin station'),
          to: Joi.string().allow(ubahnService.listStations()).required().description('Name of the destination station'),
        }
      }
    },
      
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
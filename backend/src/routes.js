const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
// Rotas
// Rotas e recursos/parâmetros
//
const routes = express.Router();
/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo de "?" e Servem para filtros, paginação
 * - Acessado através do request.query
 * Route Params: Parâmetros utilizados para identificar recursos
 * - Acessado através do request.params
 * Request Body: Corpo da requisitação utilizado para criar ou alterar recursos
 * - Acessado através do request.body
 */

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);
module.exports = routes;

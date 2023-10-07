import express from 'express';
const router = express.Router();
import todoRoute from './todo.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/todo',todoRoute);
  return router;
};

export default routes;




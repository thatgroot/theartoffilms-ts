import express from 'express';
import SeedController from '../../@app/controllers/SeedController';
import { makeRouteV1 } from '../../@helpers/utils';

const seed_router = express.Router();
const controller = new SeedController()
const { products, taxonomies, media, seed } = controller


seed_router
 .get(makeRouteV1("seed/products"), products)
 .get(makeRouteV1("seed/taxanomies"), taxonomies)
 .get(makeRouteV1("seed/media"), media).all('/', seed);

export default seed_router;

import ProductController from '../../@app/controllers/ProductController';
import { makeRouter } from '../../@helpers/utils';

const product_controller = new ProductController()
const product_router = makeRouter(product_controller);

export default product_router;

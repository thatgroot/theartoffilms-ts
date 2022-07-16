import { Media, Product, Taxanomy } from '../@types/index';
import { randomBytes, randomUUID } from 'crypto';
import { Schema, ObjectId } from 'mongoose';
const { ObjectId } = Schema.Types
const media: Media = {
  name: "logo",
  link: "https://shrimps.dev/logo.png",
  type: "image",
  caption: "shrimps.dev",
}

const taxanomy: Taxanomy = {
  name: "men",
  type: "category",
}

const product: Product = {
  sku: randomUUID(),
  name: randomBytes(24).toString(),
  price: 100,
  description: "lorem ",
  visiblity: "public",
  status: "published",
  meta: [{
    color: "red",
    billable: true,
    amount: 100,
  }],
  createdAt: "2022-06-19T22:12:36.297Z",
  updatedAt: "2022-06-19T22:12:36.297Z",
  media: {
    featured: "",
    images: []
  }
};

export default { product, taxanomy, media };

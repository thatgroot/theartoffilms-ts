import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

export interface Model {
  _id?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

interface Entity { [x: string]: any;[x: number]: any;[x: symbol]: any };

export interface Taxanomy extends Model {
  name: string;
  type: "category" | "tag" | "brand";
}

export interface Meta extends Model {
  [key: string]: any;
  billable: boolean;
  amount: number;
}

export interface Media extends Model {
  type: "video" | "image" | "audio" | "document";
  name: string;
  link: string;
  caption: string;
}



export interface Address extends Model {
  street: string,
  city: string,
  postalCode: string,
  country: string,
}

export interface Payment {
  session: String,
  method: String,
  checkout_url: String,
  status: String,
}

export interface Order extends Model {
  items: {
    item: ObjectId,
    quantity: number,
  }[],
  cost: {
    amount: number,
    tax: number,
    shipping: number,
  }
  shipping: {
    cost: number,
    address: Address,
  },
  payment: Payment,
  buyer: ObjectId,
  seller: ObjectId,
  paid: boolean,
  paidAt: Date,
  delivered: boolean,
  deliveredAt: Date,
  meta: {
    [key: string]: any
  }[];
}

export interface Product extends Model {
  sku: string;
  name: string;
  description: string;
  price: number;
  brand?: ObjectId[];
  categories?: ObjectId[];
  tags?: ObjectId[]
  media: {
    featured: ObjectId | String,
    images: ObjectId[],
  },
  visiblity: "public" | "private" | "protected" | "unlisted";
  status: "published" | "unpublished" | "draft" | "archived";
  meta: Meta[];
};


export interface Subscription extends Model {
  title: string,
  image: ObjectId,
  limit: number,
  price: {
    [key: string]: number,
    validity: number,
  }[],
  perks: {
    [key: string]: string
  }[]
}

export interface User extends Model {
  name: string,
  email: string,
  password: string,
  role: string
  address: Address,
  meta: {
    [key: string]: any
  }
}


export interface Settings extends Model {
  [key: string]: any,
  site: {
    name: string,
    logo: string,
    favicon: string,
    keywords: string[]
  },
}


export interface Message extends Model {
  text: string,
  by: ObjectId,
  to: ObjectId,
  attachment: ObjectId,
  team: "support" | "dev" | "sales" | "legal",
}



// LOGIC MODELS

export interface Service {

  model: mongoose.Model<any, {}, {}, {}> | undefined;
  all: () => Promise<Entity[] | Object>;
  show: (id: string) => Promise<Entity>;
  create: (data: any) => Promise<Entity>;
  update: (id: string, data: any) => Promise<Entity>;
  delete: (id: string) => Promise<any>;
};

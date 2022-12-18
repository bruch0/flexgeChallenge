import mongoose, { Model, Schema } from 'mongoose';

interface Products {
  name: string;
  amount: number;
  unitPrice: number;
  installments: number;
  paidInstallments: number;
  termBegin: Date;
}

interface Contracts {
  country: string;
  state: string;
  city: string;
  documentId: string;
  socialReason: string;
  address: string;
  district: string;
  number: number;
  zipcode: string;
  email: string;
  phone: string;
  startDate: Date;
  endDate: Date;
  dueDay: Date;
  contractUrl: string;
  companyName: string;
  products: [Products];
}

const productSchema = new Schema<Products>({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  installments: {
    type: Number,
    required: true,
  },
  paidInstallments: {
    type: Number,
    required: true,
  },
  termBegin: {
    type: Date,
    required: true,
  },
});

const contractSchema = new Schema<Contracts>({
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  documentId: {
    type: String,
    required: true,
  },
  socialReason: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  dueDay: {
    type: Date,
    required: true,
  },
  contractUrl: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  products: [productSchema],
});

const Contract: Model<Contracts> = mongoose.model('Contracts', contractSchema);
const Product: Model<Products> = mongoose.model('Products', productSchema);

export { Contract, Product };

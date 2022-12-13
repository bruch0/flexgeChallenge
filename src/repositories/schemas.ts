import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
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

const contractSchema = new mongoose.Schema({
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
  products: [productSchema],
});

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  contracts: [contractSchema],
});

const Company = mongoose.model('Company', companySchema);

export { Company };

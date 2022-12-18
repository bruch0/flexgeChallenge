export interface ProductInterface {
  name: string;
  amount: Number;
  unitPrice: Number;
  installments: Number;
  paidInstallments: Number;
  termBegin: Date;
}
export interface Contracts {
  country: string;
  state: string;
  city: string;
  documentId: string;
  socialReason: string;
  address: string;
  district: string;
  number: Number;
  zipcode: string;
  email: string;
  phone: string;
  startDate: Date;
  endDate: Date;
  dueDay: Date;
  contractUrl: string;
  companyName: string;
  products: [ProductInterface];
}

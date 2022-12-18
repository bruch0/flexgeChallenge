import joi from 'joi';

const createContract = joi.object({
  country: joi.string().required(),
  state: joi.string().required(),
  city: joi.string().required(),
  documentId: joi.string().required(),
  socialReason: joi.string().required(),
  address: joi.string().required(),
  district: joi.string().required(),
  number: joi.number().required().min(1).required(),
  zipcode: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
  startDate: joi.date().required(),
  endDate: joi.date().required(),
  dueDay: joi.date().required(),
  contractUrl: joi.string().required(),
  companyName: joi.string().required(),
  products: joi
    .array()
    .items(
      joi.object().keys({
        name: joi.string().required().min(1),
        amount: joi.number().required().min(1),
        unitPrice: joi.number().required().min(1),
        installments: joi.number().required().min(1),
        paidInstallments: joi.number().required().min(1),
        termBegin: joi.date().required(),
      })
    )
    .required(),
});
export { createContract };

import faker from 'faker';

import { Contract, Product } from './schemas';

interface ProductInterface {
  name: string;
  amount: number;
  unitPrice: number;
  installments: number;
  paidInstallments: number;
  termBegin: Date;
}

const getRandomProduct = async (): Promise<ProductInterface> => {
  const randomNumber = Math.ceil(Math.random() * 20);

  const products = [
    {
      name: 'Produto 1',
      amount: 1,
      unitPrice: 1,
      installments: 1,
      paidInstallments: 1,
      termBegin: new Date('2022-12-01'),
    },
    {
      name: 'Produto 2',
      amount: 2,
      unitPrice: 2,
      installments: 2,
      paidInstallments: 1,
      termBegin: new Date('2022-12-02'),
    },
    {
      name: 'Produto 3',
      amount: 3,
      unitPrice: 3,
      installments: 3,
      paidInstallments: 1,
      termBegin: new Date('2022-12-03'),
    },
    {
      name: 'Produto 4',
      amount: 4,
      unitPrice: 4,
      installments: 4,
      paidInstallments: 1,
      termBegin: new Date('2022-12-04'),
    },
    {
      name: 'Produto 5',
      amount: 5,
      unitPrice: 5,
      installments: 5,
      paidInstallments: 1,
      termBegin: new Date('2022-12-05'),
    },
    {
      name: 'Produto 6',
      amount: 6,
      unitPrice: 6,
      installments: 6,
      paidInstallments: 1,
      termBegin: new Date('2022-12-06'),
    },
    {
      name: 'Produto 7',
      amount: 7,
      unitPrice: 7,
      installments: 7,
      paidInstallments: 1,
      termBegin: new Date('2022-12-07'),
    },
    {
      name: 'Produto 8',
      amount: 8,
      unitPrice: 8,
      installments: 8,
      paidInstallments: 1,
      termBegin: new Date('2022-12-08'),
    },
    {
      name: 'Produto 9',
      amount: 9,
      unitPrice: 9,
      installments: 9,
      paidInstallments: 1,
      termBegin: new Date('2022-12-09'),
    },
    {
      name: 'Produto 10',
      amount: 10,
      unitPrice: 10,
      installments: 10,
      paidInstallments: 1,
      termBegin: new Date('2022-12-10'),
    },
    {
      name: 'Produto 11',
      amount: 11,
      unitPrice: 11,
      installments: 11,
      paidInstallments: 1,
      termBegin: new Date('2022-12-11'),
    },
    {
      name: 'Produto 12',
      amount: 12,
      unitPrice: 12,
      installments: 12,
      paidInstallments: 1,
      termBegin: new Date('2022-12-12'),
    },
    {
      name: 'Produto 13',
      amount: 13,
      unitPrice: 13,
      installments: 13,
      paidInstallments: 1,
      termBegin: new Date('2022-12-13'),
    },
    {
      name: 'Produto 13',
      amount: 13,
      unitPrice: 13,
      installments: 13,
      paidInstallments: 1,
      termBegin: new Date('2022-12-13'),
    },
    {
      name: 'Produto 14',
      amount: 14,
      unitPrice: 14,
      installments: 14,
      paidInstallments: 1,
      termBegin: new Date('2022-12-14'),
    },
    {
      name: 'Produto 15',
      amount: 15,
      unitPrice: 15,
      installments: 15,
      paidInstallments: 1,
      termBegin: new Date('2022-12-15'),
    },
    {
      name: 'Produto 16',
      amount: 16,
      unitPrice: 16,
      installments: 16,
      paidInstallments: 1,
      termBegin: new Date('2022-12-16'),
    },
    {
      name: 'Produto 17',
      amount: 17,
      unitPrice: 17,
      installments: 17,
      paidInstallments: 1,
      termBegin: new Date('2022-12-17'),
    },
    {
      name: 'Produto 18',
      amount: 18,
      unitPrice: 18,
      installments: 18,
      paidInstallments: 1,
      termBegin: new Date('2022-12-18'),
    },
    {
      name: 'Produto 19',
      amount: 19,
      unitPrice: 19,
      installments: 19,
      paidInstallments: 1,
      termBegin: new Date('2022-12-19'),
    },
    {
      name: 'Produto 20',
      amount: 20,
      unitPrice: 20,
      installments: 20,
      paidInstallments: 1,
      termBegin: new Date('2022-12-20'),
    },
  ];

  const product = new Product(products[randomNumber]);
  await product.save();

  return product;
};

const generageTaxId = (): string => {
  const getModule = (dividend: number, divider: number): number => {
    return Math.round(dividend - Math.floor(dividend / divider) * divider);
  };

  const getRandomNumberBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getRandomNumbers = (total: number): number[] => {
    const numbers = [];
    for (let i = 0; i < total; i++) {
      numbers[i] = getRandomNumberBetween(1, 9);
    }
    return numbers;
  };

  const getTaxIdVerifiedDigit = (numbers: number[]): number => {
    let digit = 0;
    const arraySize = numbers.length + 1;

    numbers.forEach((number, index) => {
      digit += number * (arraySize - index);
    });

    digit = 11 - getModule(digit, 11);
    return digit >= 10 ? 0 : digit;
  };

  const generateFakeTaxId = (): string => {
    const numbers = getRandomNumbers(9);
    numbers.push(getTaxIdVerifiedDigit(numbers));
    numbers.push(getTaxIdVerifiedDigit(numbers));

    return numbers.join('');
  };

  return generateFakeTaxId();
};

const generateRandomContract = async (companyNumber: number): Promise<void> => {
  const contract = new Contract({
    country: faker.address.country(),
    state: faker.address.state(),
    city: faker.address.city(),
    documentId: generageTaxId(),
    socialReason: faker.company.companyName(),
    address: faker.address.streetAddress(),
    district: faker.random.word(),
    number: faker.datatype.number(1000),
    zipcode: faker.address.zipCode(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    startDate: new Date('2022-12-01'),
    endDate: new Date('2024-01-01'),
    dueDay: new Date('2024-01-01'),
    contractUrl: 'randomUrl',
    companyName: `Empresa ${companyNumber}`,
    products: [await getRandomProduct(), await getRandomProduct()],
  });
  await contract.save();
};

export const seedDabatase = async (): Promise<void> => {
  for (let index = 1; index <= 25; index++) {
    await generateRandomContract(index);
  }

  console.log('Seed complete!');
};

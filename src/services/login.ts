import jwt from 'jsonwebtoken';

import GenericError from '@errors/genericError';

const login = ({ email, password }: { email: string; password: string }): string => {
  if (!/^[A-Za-z0-9._%+-]+@flexge\.com$/.test(email) || password !== 'Senha123!') {
    throw new GenericError('Unauthorized', 'Invalid credentials', 401);
  }

  const authString = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });

  return authString;
};

export { login };

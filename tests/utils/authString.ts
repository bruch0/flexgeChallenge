import jwt from 'jsonwebtoken';

const getAuthString = (): string => {
  const authString = jwt.sign({ email: 'random@flexge.com' }, process.env.JWT_SECRET, { expiresIn: '1d' });

  return authString;
};

export { getAuthString };

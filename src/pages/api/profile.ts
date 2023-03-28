import { verify } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default function profileHandler(req: NextApiRequest, res: NextApiResponse) {
  const { myTokenName } = req.cookies;

  try {
    const user = verify(myTokenName || '', 'secret');
    console.log('🚀 ~ user:', user);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(401).json({ error: 'invalid token' });
  }
}

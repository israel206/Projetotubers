// Outras aplicações podem consumir estes dados
import { ObjectId } from 'mongodb';
import nc from 'next-connect';

import connectToDatabase from 'src/utils/mongodb';
import upload from 'src/utils/upload';

import jwt from 'next-auth/jwt';

const secret = process.env.JWT_SECRET;

const handler = nc()
  .use(upload.single('file'))
  .post(async (req, res) => {
    // Get  data from your database
    // Receber nossa imagem e outros pelo EndPoint
    // inserir no banco de dados MONGODB_DB
    const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;

    const token = await jwt.getToken({ req, secret });

    if (token) {
      // pegando as informações
      const { db } = await connectToDatabase();
      const collection = db.collection('videos');
      // inserido
      await collection.insertOne({
        title,
        authorId: ObjectId(authorId),
        authorName,
        authorAvatar,
        views: 0,
        thumb: req.file.location,
        videoUrl,
        updatedAt: new Date(),
      });

      return res.status(200).json({ ok: true });
    }

    return res.status(401).end();
  })
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

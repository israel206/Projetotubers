// importação da função
import { MongoClient } from 'mongodb';

// recebendo as variavel de ambiente do .env
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

// variado
let cachedDb;
let cachedClient;

// exceçoes de erros
if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local',
  );
}

// verificação da conexão do banco
export async function connectToDatabase() {
  // verificação das variaveis existem
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  // ser não, criar um objeto
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // abrindo a conexão
  const db = await client.db(dbName);

  // preenchendo as duas variavel
  cachedClient = client;
  cachedDb = db;

  // retornando os dois objetos
  return { client, db };
}

export default connectToDatabase;

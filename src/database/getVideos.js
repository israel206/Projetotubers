// importação do components de configuração do banco
import connectToDatabase from 'src/utils/mongodb';

// esta informações vai ser consumida só na aplicação
//Será consumida só pela Api

// função async de pegar os dados
//EndPoint Busca de videos
export async function getVideos() {

  const { db } = await connectToDatabase();

  // buscando todos os valores
  const data = await db.collection('videos').find().toArray();

  return data;
}

export default getVideos;

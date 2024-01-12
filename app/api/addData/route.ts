import { NextApiRequest, NextApiResponse } from 'next';
import mysql2, {ConnectionOptions} from 'mysql2/promise';

export async function POST(req: NextApiRequest) {
  if (req.method === 'POST') {
    const userData = await req.json();
    console.log('Data received from client:', userData);

    const access: ConnectionOptions = {
      user: 'root',
      database: 'synchdb',
    };
    
    const conn = mysql2.createConnection(access);
  
    let data;
    
    try {
      const query = `INSERT INTO users (name, username, id, organization) VALUES ('${userData.name}', '${userData.username}', '${userData.id}', '${userData.organization}')`;
      const value: [] = [];
  
      const [rows, fields] = await (await conn).query(query);
      data = JSON.parse(JSON.stringify(rows))
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    finally{
      (await conn).end()
    }
  }
}
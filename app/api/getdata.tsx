import mysql2, {ConnectionOptions} from 'mysql2/promise';

const GetData = async () => {
  const access: ConnectionOptions = {
    user: 'root',
    database: 'synchdb',
  };
  
  const conn = mysql2.createConnection(access);

  let data;
  
  try {
    const query = "SELECT * FROM users";
    const value: [] = [];

    const [rows, fields] = await (await conn).query(query);
    data = JSON.parse(JSON.stringify(rows))
  } catch (error) {
    console.log(error);
  }
  finally{
    (await conn).end()
  }

  return(
    <>
    <h1>
      {data.map(users => 
      <ul key={users.name}>
        {users.name} <br />
        {users.username} <br />
        {users.id} <br />
        {users.organization}
      </ul>
      )}
    </h1>
    {/* <Inputdata /> */}
    </>
  )
}

export default GetData;
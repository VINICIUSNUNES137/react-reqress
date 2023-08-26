import logo from './logo.svg';
import { useState, useEffect } from "react"
import Card from './Components/Card';

import './App.css';
const URL_API = "https://reqres.in/api/users?page=1"

function App() {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)



  const fetchAllData = async () => {
    try {
      setLoading(true)

      const response = await fetch(URL_API)
      const dados = await response.json()
      const data = await dados.data

      if (!data) {
        throw 'Problema na requisição'
      }
      setData(data)
    }
    catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  return (
    <main>
      <header>TESTE API</header>
      <div className='container'>
        {
          loading && !data &&
          <>
            <p>Nome</p>
            <p>email</p>
          </>
        }

        {
          data && data.map((item) => (
            <>
              <Card urlFoto={item.avatar} nome={item.first_name + ' ' + item.last_name} email={item.email} />
            </>
          )
          )
        }
      </div>
    </main>
  );
}

export default App;

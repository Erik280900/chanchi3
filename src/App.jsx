import { useEffect, useState } from 'react'
import Header from './components/Header'
import CardList from './components/CardList'
import Footer from './components/Footer'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos',
          {
            method: 'GET'
          }
        )
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
      }catch (error) {
        console.error('Error: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className='py-4'>
          <div className='container'>
            <h2 className='text-center fw-bolder'>Chanchi 03</h2>
            <CardList data={users}/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App

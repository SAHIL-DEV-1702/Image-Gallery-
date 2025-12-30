import axios from 'axios'
import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([])


  const getData = async () => {

    const response = await axios.get('https://picsum.photos/v2/list?page=8&limit=100')
    setData(response.data)
    console.log('data fetch successfully');
  }

  let printData = <h3 className='text-gray-500'>USER DATA NOT FOUND</h3>

  if (printData.length === 0) {
    printData = data.map((e, idx) => <div key={idx}>{e.author}</div>)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="bg-green-200 h-screen w-screen flex flex-col items-center">

        <div className='border-2 border-red-100 h-200 w-350 m-5 flex flex-wrap overflow-y-scroll bg-blue-200'>

          <div className='flex flex-wrap justify-center'>

            {data.map((e, idx) =>
              <div key={idx}>
                <a href={e.url} target="_blank" rel="noreferrer">
                  <div className="card h-48 w-48 m-2 border border-gray-300 rounded-md overflow-hidden flex ml-10 justify-center items-center" ><img src={e.download_url} alt="not found" className='h-48 w-48 overflow-hidden' /></div>

                  <div className="text-center mt-2" >{e.author}</div>
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export default App

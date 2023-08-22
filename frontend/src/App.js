import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [file, setFile] = useState();
  let formData = new FormData();    //formdata object
  
  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
  }
  const handleInput = e => {    
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    console.log(e.target.files[0])
  }

  // useEffect(() => {
  const dataFetch = async () => {
    formData.append('file', file, {
      filename: 'test.pdf',
      contentType: 'application/pdf'
    })
    const response = await axios.post('http://localhost:9966/upload', formData, config)
    console.log(response)
  }
  // }, [])

  return (
    <div className="App">
      <input type='file' name='file' onChange={handleInput} />
      <div>{file && `${file.name} - ${file.type}`}</div>
      <button onClick={dataFetch}>upload</button>
    </div>
  );
}

export default App;

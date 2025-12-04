import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
    {/* header */}
    <header className='bg-dark d-flex text-white py-3 shadow-sm align-items-center justify-content-center'>
      <h1 className='m-0  gap-2'>☁️🎮 Blog di riflessioni videoludiche 🌙</h1></header>
  <div className="container d-flex justify-content-between align-items-center">
    <div className="row">
      {/* form */}
      <div>
      <h2 className='fw-bold mt-5 pb-2 border-bottom border-secondary d-inline-block'>Crea un nuovo post:</h2>
      {/* autore */}
      <div className="col-6">
        <label htmlFor="autore">Autore</label>
        <input id="autore" type="text" className='form-control'/>
      </div>      
      {/* titolo post */}
      <div className="col-6"><label htmlFor="titolo">Titolo post</label>
        <input id="titolo" type="text" className='form-control'/></div>
      {/* area post */}
      <div className="col-12"></div>
      {/* checkbox */}
      <div className="col-6"></div>
      {/* bottone */}
      <div className="col-6"></div>
      {/* post */}
      <div className="col-12">Card post</div>
      </div>
    </div>
  </div>
  </>
  )
}

export default App

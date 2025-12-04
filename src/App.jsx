import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
      {/* header */}
      <header className='bg-dark d-flex text-white py-3 shadow-sm align-items-center justify-content-center'>
        <h1 className='m-0  gap-2'>☁️🎮 Blog di riflessioni videoludiche 🌙</h1></header>
      <div className="container mt-4">
        <div className="row g-3">
          {/* form */}

          <h2 className='fw-bold mt-5 pb-2 border-bottom border-secondary d-inline-block'>Crea un nuovo post:</h2>
          {/* autore */}
          <div>
            <div className="col-6">
              <label htmlFor="autore">Autore</label>
              <input id="autore" type="text" className='form-control' />
            </div>
            {/* titolo post */}
            <div className="col-6"><label htmlFor="titolo">Titolo post</label>
              <input id="titolo" type="text" className='form-control' /></div>
          </div>
          {/* area post */}
          <div className="col-12">
            <label htmlFor="testo">Testo del post</label>
            <textarea id="testo" className="form-control" rows="4"></textarea></div>
          {/* checkbox */}
          <div className="col-6">
            <input type="checkbox" id="pubblica" />
            <label htmlFor="pubblica" className='px-2'>Pubblica subito</label></div>
          {/* bottone */}
          <div className="col-6 text-end"><button className="btn btn-primary fw-bold">Invia</button></div>
          {/* post */}
          <div className="col-12">
              <div className="card my-4 border-secondary">
            <div className="card-header bg-secondary text-white">
              <h3 className="mb-0">Titolo del post 🎮</h3>
              <small className="opacity-75">Autore</small>
            </div>
            <div className="card-body">
              <p className="card-text">
                Testo del post — riflessione, opinione o micro-recensione.
                Può contenere 1-2 righe oppure anche di più.
              </p>
            </div>
          </div>
          {/* fine post */}
        </div>
      </div>
    </div >
    </>
  )
}

export default App

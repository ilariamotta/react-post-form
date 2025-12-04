import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CardPost from './components/CardPost';


const initialFormPost = {
  autore: "",
  titolo: "",
  testo: "",
  pubblica: true,
};


function App() {

  const [formPost, setFormPost] = useState(initialFormPost);
  const [newPost, setNewPost] = useState([]);



  function updateFormData(event) {
    const key = event.target.id
    const newObject = {
      ...formPost,
      [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    }
    setFormPost(newObject)
  }

  function aggiungiPost(event) {
  event.preventDefault();
  setNewPost((current) => [...current, formPost]);
  setFormPost(initialFormPost);
}

  return (
    <>
      {/* header */}
      <header className='bg-dark d-flex text-white py-3 shadow-sm align-items-center justify-content-center'>
        <h1 className='m-0  gap-2'>☁️🎮 Blog di riflessioni videoludiche 🌙</h1></header>
      <div className="container mt-4">

          <h2 className='fw-bold mt-5 pb-2 border-bottom border-secondary d-inline-block'>Crea un nuovo post:</h2>

          {/* form */}
          <form className="row g-3" onSubmit={aggiungiPost}>
          {/* autore */}
          <div className="col-6">
            <label htmlFor="autore">Autore</label>
            <input id="autore" type="text" className='form-control' value={formPost.autore} onChange={updateFormData} /></div>
          {/* titolo post */}
          <div className="col-6"><label htmlFor="titolo">Titolo post</label>
            <input id="titolo" type="text" className='form-control' value={formPost.titolo} onChange={updateFormData} /></div>
          {/* area post */}
          <div className="col-12">
            <label htmlFor="testo">Contenuto del post</label>
            <textarea id="testo" className="form-control" rows="4" value={formPost.testo} onChange={updateFormData}></textarea></div>
          {/* checkbox */}
          <div className="col-6">
            <input type="checkbox" name="pubblica" id="pubblica" checked={formPost.pubblica} onChange={updateFormData}/>
            <label htmlFor="pubblica" className='px-2'>Pubblica subito</label></div>
          {/* bottone */}
          <div className="col-6 text-end"><button type="submit" className="btn btn-secondary fw-bold">Invia</button></div>
        </form>
        {/* post */}
        <div className="col-12">
          <CardPost newPost={newPost}/>   
          {/* fine post */}
        </div>
      </div>

    </>
  )
}

export default App

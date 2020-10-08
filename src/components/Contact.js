import React, { useState } from 'react'
import Navbar from './Navbar'

export default function Contact() {
  const [formData, setFormData] = useState({})
  const [message, setMessage] = useState("")

  const handleInput = (e) => {
    const copyFormData = { ...formData }
    copyFormData[e.target.name] = e.target.value
    setFormData(copyFormData)
  }

const sendData = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch(
      "https://v1.nocodeapi.com/ann20/airtable/qjvBjkhfdtUzrEvh?tableName=Contact",
      {
        method: "post",
        body: JSON.stringify([formData]),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const json = await response.json()
    console.log("Success:", JSON.stringify(json))
    setMessage("Success")
  } catch (error) {
    console.error("Error:", error)
    setMessage("Error")
  }
}

  return ( 
    
      <div className="contacto">
        <Navbar />
        <div className="contact-text ml-5">
        <h1>Te queremos escuchar</h1>
        <p>Si tienes dudas, comentarios, propuestas, proyectos o quieres trabajar con nosotros escríbenos</p>
        </div>

          <div className="contact-center">
              <div id="content">
                  {/* Formulario contacto */}
                  <form className="input-form ml-5" id="contact" name="contact" required onSubmit={sendData}>
                      <div className="form-group">
                          <label htmlFor="name" className="label-contact d-block">Nombre y apellidos</label>
                          <input type="text" name="name" required onChange={handleInput}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="email" className="label-contact d-block">Email</label>
                          <input type="text" name="email" required onChange={handleInput}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="country" className="label-contact d-block">País</label>
                          <input type="text" name="country" placeholder="Ingresa el país" required onChange={handleInput}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="phone" className="label-contact d-block">Teléfono</label>
                          <input type="text" name="phone" required onChange={handleInput}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="messagge" className="label-contact d-block">Mensaje</label>
                          <textarea name="messagge" placeholder="Escriba su duda" required onChange={handleInput}/>
                      </div>

                      <input type="submit" name="submit" value="Enviar" className="btn btn-success" />
                      
                      <span id="final-messagge">{message}</span>

                      <p>Al dar click en el bóton enviar aceptas nuestra <a href="#">Política de Privacidad</a></p>
                      
                  </form>
              </div>
          </div>
      </div> 
  );

}
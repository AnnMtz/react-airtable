import React, { useState } from 'react'
import Slider from './Slider'

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
            <div id="contacto">
                <Slider
                title="Ingresa tus datos de contacto aquí"
                />
                <div className="contact-center">
                    <div id="content">
                        {/* Formulario contacto */}
                        <form className="input-form" id="contact" name="contact" required onSubmit={sendData}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="name" required onChange={handleInput}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Apellidos</label>
                                <input type="text" name="lastname" required onChange={handleInput}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input type="text" name="phone" required onChange={handleInput}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="messagge">Mensaje</label>
                                <textarea name="messagge" placeholder="Escriba su duda" required onChange={handleInput}/>
                            </div>

                            <input type="submit" name="submit" value="Enviar" className="btn btn-success" />
                            
                            <span id="final-messagge">{message}</span>
                            
                        </form>
                    </div>
                </div>
            </div> 
        );
    
}
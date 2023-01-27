import React from 'react'
import { EdadComponente } from './EdadComponente';
import '../App.css'

export const Mascota = ( {name, age, show} ) => {
  return (
    < >
    <h3 className="Mascota">Soy una mascota y me llamo {name}</h3>
    <EdadComponente className="Mascota" age = {age} show={show} />
    </>
  )
}

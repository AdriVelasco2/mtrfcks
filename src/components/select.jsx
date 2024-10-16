"use client";
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

export default function SelectorNombres() {
  // Nombres disponibles en el select
  const [nombres] = useState([
    "Adri Velasco",
    "Javi Villena",
    "Álvaro Litel",
    "Fran Gamero",
    "Gus Peñamaría",
    "Javi Merino",
    "Juan Luis",
    "Litos",
    "Marce Vaquero",
    "Marcos",
    "Nacho Nuevo",
    "Pablo Menéndez",
    "Radamés",
    "Rober Serrano",
    "Alberto Rivas",
    "Sergio",
    "David Cimadevilla",
    "Dani Zurita",
    "Nacho Vallaure",
    "J. A. Balado",
    "Dani Martínez"
  ]);

  // Estado para almacenar los nombres seleccionados en cada select
  const [selectedNames, setSelectedNames] = useState(
    Array.from({ length: 5 }, () => ({ select1: '', select2: '' }))
  );

  const captureRef = useRef(null);

  // Manejar cambios en los selects
  const handleSelectChange = (index, selectNumber, value) => {
    const newSelectedNames = [...selectedNames];
    newSelectedNames[index][selectNumber] = value; // Actualizar el valor del select específico
    setSelectedNames(newSelectedNames);
  };

  // Capturar el contenido en una imagen
  const handleDownloadImage = async () => {
    const element = captureRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const data = canvas.toDataURL('image/png');

    // Crear un enlace para descargar la imagen
    const link = document.createElement('a');
    link.href = data;
    link.download = 'alineacion.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Renderizar 5 filas con dos selects por fila
  const renderRows = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="flex flex-col md:flex-row p-6 md:p-4 rounded-xl m-3 md:bg-transparent bg-white bg-opacity-10">
        {/* Select 1 */}
        <p className='mt-1 mb-2 text-center md:text-left md:text-white font-bold '>Pareja {index + 1}</p>
        <select
          className="flex-1 mb-3 font-bold md:text-white md:mb-2 md:mr-4 text-center text-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
          value={selectedNames[index].select1} // Valor único para cada select
          onChange={(e) => handleSelectChange(index, 'select1', e.target.value)}
        >
          <option className="text-black"  value="">Selecciona un nombre</option>
          {nombres.map((nombre, idx) => (
            <option className="text-black" key={idx} value={nombre}>
              {nombre}
            </option>
          ))}
        </select>

        {/* Select 2 */}
        <select
          className="flex-1  mb-3 md:mb-2 md:mr-4 font-bold text-center text-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
          value={selectedNames[index].select2} // Valor único para cada select
          onChange={(e) => handleSelectChange(index, 'select2', e.target.value)}
        >
          <option className="text-black" value="">Selecciona un nombre</option>
          {nombres.map((nombre, idx) => (
            <option className="text-black" key={idx} value={nombre}>
              {nombre}
            </option>
          ))}
        </select>
      </div>
    ));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 ">
      <div ref={captureRef} className="mb-6 border-2 border-red-400 bg-[url('../img/culo.jpg')] sm:bg-[url('../img/piernas.jpg')] bg-cover bg-center  rounded-sm p-6">
      <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-2 text-center bg-white md:bg-black md:bg-opacity-15 bg-opacity-15 p-4 rounded-xl text-white">Alineación</h1>
      
    </div>
        {/* Contenedor que queremos capturar */}
        {renderRows()}
      </div>

      {/* Botón para descargar la imagen */}
      <button
        onClick={handleDownloadImage}
        className="w-full md:w-auto px-6 py-2 bg-teal-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
      >
        Descargar Imagen
      </button>
    </div>
  );
}

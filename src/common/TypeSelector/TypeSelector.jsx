import React, { useState, useEffect } from 'react';

export const TypeSelector = () => {

    const options = ["article", "analysis", "interview"]

    const [SelectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        const storedSelection = localStorage.getItem('type');
        if (storedSelection) {
            setSelectedRegion(storedSelection);
        }
    }, []);

    // Función para manejar el cambio de opción
    const handleOptionSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedRegion(selectedValue);
        // Guardar la selección en el almacenamiento local
        localStorage.setItem('type', selectedValue);
    };

    return (
        <div>
            <select value={SelectedRegion} onChange={handleOptionSelect}>
                <option value="">Selecciona una tipo de notícia...</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

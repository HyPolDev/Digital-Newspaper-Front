import React, { useState, useEffect } from 'react';

export const RelevanceSelector = () => {

    const options = []
    for (let i = 0; i < 10; i++) {
        options.push(i + 1)
    }

    const [SelectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        const storedSelection = localStorage.getItem('relevance');
        if (storedSelection) {
            setSelectedRegion(storedSelection);
        }
    }, []);

    // Función para manejar el cambio de opción
    const handleOptionSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedRegion(selectedValue);
        // Guardar la selección en el almacenamiento local
        localStorage.setItem('relevance', selectedValue);
    };

    return (
        <div>
            <select value={SelectedRegion} onChange={handleOptionSelect}>
                <option value="">Selecciona la relevancia...</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

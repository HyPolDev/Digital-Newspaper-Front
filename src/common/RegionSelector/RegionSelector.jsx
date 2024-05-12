import React, { useState, useEffect } from 'react';

export const RegionSelector = () => {

    const options = ["América", "Europa", "África", "Oriente Próximo", "Asia Pacifico", "Global"];

    const [SelectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        const storedSelection = localStorage.getItem('region');
        if (storedSelection) {
            setSelectedRegion(storedSelection);
        }
    }, []);

    // Función para manejar el cambio de opción
    const handleOptionSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedRegion(selectedValue);
        // Guardar la selección en el almacenamiento local
        localStorage.setItem('region', selectedValue);
    };

    return (
        <div>
            <select value={SelectedRegion} onChange={handleOptionSelect}>
                <option value="">Selecciona una región...</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

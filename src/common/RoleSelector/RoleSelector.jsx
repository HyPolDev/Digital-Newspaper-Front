import React, { useState, useEffect } from 'react';

export const RoleSelector = () => {

    const options = ["writer", "admin", "superadmin", "user"]

    const [SelectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        const storedSelection = localStorage.getItem('role');
        if (storedSelection) {
            setSelectedRegion(storedSelection);
        }
    }, []);

    // Función para manejar el cambio de opción
    const handleOptionSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedRegion(selectedValue);
        // Guardar la selección en el almacenamiento local
        localStorage.setItem('role', selectedValue);
    };

    return (
        <div>
            <select value={SelectedRegion} onChange={handleOptionSelect}>
                <option value="">Role...</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

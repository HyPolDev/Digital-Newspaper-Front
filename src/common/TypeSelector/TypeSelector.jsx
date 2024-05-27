import React, { useState, useEffect } from 'react';
import { getPostTypesCall } from '../../services/apiCalls';

export const TypeSelector = () => {

    const [Data, setData] = useState(null)

    const [SelectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        const storedSelection = localStorage.getItem('type');
        if (storedSelection) {
            setSelectedRegion(storedSelection);
        }
        const fetchData = async () => {
            const PostTypes = await getPostTypesCall()

            setData({
                postTypes: PostTypes.posts
            })

        }
        fetchData()

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
                {Data?.postTypes?.map((option) => (
                    <option key={option._id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

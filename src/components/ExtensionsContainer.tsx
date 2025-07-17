import React, { useState, useEffect } from 'react';

import Tabs from './Tabs';
import ExtensionCard from './ExtensionCard';

import extensionsData from '../../data.json';

const ExtensionsContainer: React.FC = () => {
    const [extensions, setExtensions] = useState(extensionsData);

    const [activeFilter, setActiveFilter] = useState('all');

    const handleToggleActive = (id: number) =>{
        setExtensions(prev =>
            prev.map(ext => 
                ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
            )
        )
    }

    const filteredExtensions = extensions.filter(extension => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'active') return extension.isActive;
        if (activeFilter === 'inactive') return !extension.isActive;
        return true;
    })

    return (
        <div className="lg:mx-40 my-8 pb-8 mx-5">
            <Tabs activeFilter={activeFilter} setActiveFilter={setActiveFilter}></Tabs>
            <div className="grid lg:grid-cols-3 gap-3 mt-8">
                {
                    filteredExtensions.map(extension => (
                        <ExtensionCard
                            key={extension.id}
                            id={extension.id}
                            name={extension.name}
                            description={extension.description}
                            logo={extension.logo}
                            isActive={extension.isActive}
                            onToggleActive={handleToggleActive}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default ExtensionsContainer;
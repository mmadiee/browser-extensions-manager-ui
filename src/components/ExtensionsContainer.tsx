import React, { useState, useEffect } from 'react';

import ExtensionCard from './ExtensionCard';

import extensionsData from '../../data.json';

const ExtensionsContainer: React.FC = () => {
    const [extensions, setExtensions] = useState(extensionsData);

    return (
        <div className="lg:mx-40 my-8 pb-8">
            <div className="grid lg:grid-cols-3 gap-3">
                {
                    extensions.map(extension => (
                        <ExtensionCard
                            key={extension.id}
                            id={extension.id}
                            name={extension.name}
                            description={extension.description}
                            logo={extension.logo}
                            isActive={extension.isActive}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default ExtensionsContainer;
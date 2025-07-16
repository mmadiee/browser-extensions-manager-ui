import React, { useState, useEffect } from 'react';

import ExtensionCard from './ExtensionCard';

import extensionsData from '../../data.json';

const ExtensionsContainer: React.FC = () => {
    const [extensions, setExtensions] = useState(extensionsData);

    return (
        <div className="mx-20 my-8">
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
    )
}

export default ExtensionsContainer;
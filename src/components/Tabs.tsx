import React from "react";

type TabsProps = {
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}

const Tab: React.FC<TabsProps> = ({ activeFilter, setActiveFilter }) => {
    return (
        <div className="lg:flex lg:justify-between">
            <h1 className="text-neutral-900 dark:text-neutral-0 text-3xl font-bold xs:mb-8 flex justify-center items-center transition-colors duration-200">Extensions List</h1>
            <div className="flex lg:justify-between justify-center mt-4">
                <button
                    className={`rounded-full py-2 px-4 mx-1 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-0
                        ${activeFilter === 'all' ? 'bg-red-600 text-white' : 'bg-white dark:bg-neutral-800 shadow-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-700 dark:hover:text-neutral-300 hover:shadow-none'}
                        focus:ring-2 focus:ring-red-500 active:bg-red-500 active:text-white active:shadow-none transition ease-out duration-200`}
                    onClick={() => setActiveFilter('all')}
                >
                    All
                </button>
                <button
                    className={`rounded-full py-2 px-4 mx-1 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-0
                        ${activeFilter === 'active' ? 'bg-red-600 text-white' : 'bg-white dark:bg-neutral-800 shadow-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-700 dark:hover:text-neutral-300 hover:shadow-none'}
                        focus:ring-2 focus:ring-red-500 active:bg-red-500 active:text-white active:shadow-none transition ease-out duration-200`}
                    onClick={() => setActiveFilter('active')}
                >
                    Active
                </button>
                <button
                    className={`rounded-full py-2 px-4 mx-1 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-0
                        ${activeFilter === 'inactive' ? 'bg-red-600 text-white' : 'bg-white dark:bg-neutral-800 shadow-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-700 dark:hover:text-neutral-300 hover:shadow-none'}
                        focus:ring-2 focus:ring-red-500 active:bg-red-500 active:text-white active:shadow-none transition ease-out duration-200`}
                    onClick={() => setActiveFilter('inactive')}
                >
                    Inactive
                </button>
            </div>

        </div>
    )
}

export default Tab;
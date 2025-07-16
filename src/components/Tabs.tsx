import React from "react";

const Tab = () => {
    return (
        <div className="flex justify-between lg:mx-40">
            <h1 className="text-neutral-900 text-3xl font-bold">Extensions List</h1>
            <div className="flex justify-between">
                <button className="rounded-full py-2 px-4 mx-1 border border-neutral-300 bg-white shadow-sm text-neutral-900 hover:bg-neutral-100 hover:text-neutral-700 hover:shadow-none focus:ring-2 focus:ring-red-500 active:bg-red-500 active:text-white active:shadow-none transition ease-out duration-200">All</button>
                <button className="rounded-full py-2 px-4 mx-1 border border-neutral-300 bg-white shadow-sm text-neutral-900 hover:bg-neutral-100 hover:text-neutral-700 hover:shadow-none focus:ring-2 focus:ring-red-500 active:bg-red-500 active:text-white active:shadow-none transition ease-out duration-200">Active</button>
                <button className="rounded-full py-2 px-4 mx-1 border border-neutral-300 bg-white shadow-sm text-neutral-900 hover:bg-neutral-100 hover:text-neutral-700 hover:shadow-none focus:ring-2 focus:ring-red-500 active:bg-red-500 active:text-white active:shadow-none transition ease-out duration-200">Inactive</button>
            </div>
            
        </div>
    )
} 

export default Tab;
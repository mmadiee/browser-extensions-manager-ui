import React, { useState } from "react";

//
import logoConsolePlus from '../../assets/images/logo-console-plus.svg';

const ExtensionCard = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="rounded-2xl bg-neutral-0 shadow-md border border-neutral-200 w-1/4 p-4">
            <div className="flex justify-around mb-10 items-start gap-3">
                <img src={logoConsolePlus} alt="" />
                <div>
                    <h1 className="font-bold text-lg mb-1">DevLens</h1>
                    <p className="text-neutral-600 text-sm">Quickly inspect page layouts and visualize element boundaries</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button className="py-1 px-3 bg-neutral-0 text-neutral-800 border border-neutral-400 rounded-full hover:bg-red-700 hover:text-neutral-0 transform transition duration-200 focus:ring-2 focus:ring-red-500">Remove</button>
                <button
                    onClick={() => setIsActive(!isActive)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-200 ${isActive ? "bg-red-700" : "bg-neutral-400"
                        }`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-200 ${isActive ? "translate-x-6" : "translate-x-0"
                            }`}
                    ></div>
                </button>
            </div>
        </div>
    )
}

export default ExtensionCard;
import React from "react";

type ExtensionProps = {
    id: number;
    name: string;
    description: string;
    logo: string;
    isActive: boolean;
    onToggleActive: (id: number) => void;
};

const ExtensionCard: React.FC<ExtensionProps> = ({ id, name, description, logo, isActive, onToggleActive }) => {
    const logoPath = logo;

    return (
        <div className="rounded-2xl bg-neutral-0 shadow-md border border-neutral-200 p-4">
            <div className="flex justify-around mb-10 items-start gap-3">
                <img src={logoPath} alt={`${name} logo`} className="w-12 h-12" />
                <div>
                    <h1 className="font-bold text-lg mb-1">{name}</h1>
                    <p className="text-neutral-600 text-sm">{description}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button className="py-1 px-3 bg-neutral-0 text-neutral-800 border border-neutral-400 rounded-full hover:bg-red-700 hover:text-neutral-0 transition duration-200 focus:ring-2 focus:ring-red-500">Remove</button>
                <button
                    onClick={() => onToggleActive(id)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-200 ${isActive ? "bg-red-700" : "bg-neutral-400"}`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-200 ${isActive ? "translate-x-6" : "translate-x-0"}`}
                    ></div>
                </button>
            </div>
        </div>
    );
};

export default ExtensionCard;
/* eslint-disable react/jsx-key */
import React from "react";

const NavLinks = () => {
    const links = [{ name: "Funcionalidades"}, { name: "Segmentos"}, { name: "Planos"}, { name: "Parceiros"}];
    return (
        <>
            {links.map((link) => (
                <div>
                    <div>
                        <h1>{link.name}</h1>
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;
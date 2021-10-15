import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-3/12 absolute bg-gradient-to-b from-bg-gradient-11 to-bg-gradient-12 text-white">
      <div className="bg-alt w-full p-3">
        <h1 className="text-center text-3xl font-semibold">Dashboard</h1>
      </div>
      <div className="p-4">
        <ul className="divide-y divide-blue space-y-3">
          <li>Solicitudes</li>
          <li>Mis inmuebles</li>
          <li>Contratos</li>
          <li>Reclamos</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

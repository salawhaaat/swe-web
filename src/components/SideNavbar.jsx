import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  const navItems = [
    { name: "CRUD User", to: "/crud-user" },
    { name: "CRUD Car Booking Request", to: "/crud-car-booking" },
    { name: "CRUD Car to Auction", to: "/crud-car-auction" },
    { name: "CRUD Fuel", to: "/crud-fuel" },
    { name: "CRUD Cars - For Auction", to: "/crud-auction-cars" },
    { name: "CRUD Cars Maintenance", to: "/crud-cars-maintenance" },
    { name: "CRUD Driver", to: "/crud-driver" },
  ];

  return (
    <aside className="w-64 bg-white p-6 flex flex-col justify-between">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    isActive ? "bg-gray-200 dark:bg-gray-700" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideNavbar;

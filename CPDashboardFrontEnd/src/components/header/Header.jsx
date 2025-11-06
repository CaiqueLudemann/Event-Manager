import { NavLink } from "react-router";

export function Header() {
  const activeNavItemStyles =
    "bg-white block w-full text-center px-6 py-10 text-xl";

  const inactiveNavItemsStyles =
    "bg-slate-800 text-white block w-full text-center px-6 py-10 text-xl";

  const navItems = [
    { to: "/new-event", label: "New Event" },
    { to: "/events", label: "Events" },
    { to: "/clients", label: "Clients" },
  ];

  return (
    <header className="">
      <ul
        className="
            bg-slate-800
            font-bold
            justify-around
            flex
            flex-col
            fixed
            h-screen"
      >
        {navItems.map(({ to, label }) => {
          return (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? activeNavItemStyles : inactiveNavItemsStyles
                }
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

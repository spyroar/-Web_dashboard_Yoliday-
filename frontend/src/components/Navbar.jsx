import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const tabs = [
  { name: 'Project', href: '/portfolio' },
  { name: 'Saved', href: '/saved' },
  { name: 'Shared', href: '/shared' },
  { name: 'Achievement', href: '/achievement' },
];

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.href}
              className={({ isActive }) =>
                clsx(
                  'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                )
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
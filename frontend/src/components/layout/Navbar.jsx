import { NavLink } from 'react-router-dom';
import { RiMenuLine } from 'react-icons/ri';
import clsx from 'clsx';
import UserMenu from '../common/UserMenu';

const tabs = [
  { name: 'Project', href: '/portfolio' },
  { name: 'Saved', href: '/saved' },
  { name: 'Shared', href: '/shared' },
  { name: 'Achievement', href: '/achievement' },
];

export default function Navbar({ onMenuClick }) {
  return (
    <nav className="bg-white border-b">
      <div className="flex h-16 items-center gap-4 px-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <RiMenuLine className="w-5 h-5" />
        </button>
        
        <div className="hidden md:flex space-x-8">
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
        
        <div className="ml-auto">
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
import { NavLink } from 'react-router-dom';
import { RiDashboardLine, RiFolder2Line, RiInputMethodLine, RiUser3Line, RiMenuLine } from 'react-icons/ri';
import clsx from 'clsx';

const navigation = [
  { name: 'Dashboard', icon: RiDashboardLine, href: '/' },
  { name: 'Portfolio', icon: RiFolder2Line, href: '/portfolio' },
  { name: 'Inputs', icon: RiInputMethodLine, href: '/inputs' },
  { name: 'Profile', icon: RiUser3Line, href: '/profile' },
];

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <div 
      className={clsx(
        'fixed inset-y-0 left-0 z-50 bg-primary text-white transition-all duration-300 lg:static',
        isOpen ? 'w-64' : 'w-0 lg:w-16'
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <img src="\yoliday-white-logo.0230a691.png" alt="Logo" className="h-8" />
        <button 
          onClick={onToggle}
          className="p-2 hover:bg-white/10 rounded-lg lg:hidden"
        >
          <RiMenuLine className="w-5 h-5" />
        </button>
      </div>
      
      <nav className="mt-8">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              clsx(
                'flex items-center px-4 py-3 text-sm',
                isActive ? 'bg-white/10' : 'hover:bg-white/5'
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {isOpen && <span className="ml-3">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
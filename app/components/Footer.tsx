import AppearanceSwitcher from './AppearanceSwitcher';

const links = [
  { label: 'mkihuyu020@gmail.com', href: 'mailto:mkihuyu020@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Michael-Ithara' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-kihuyu-977a0b266/' },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1120px] px-4 sm:px-6">
      <div className="flex flex-col gap-4 border-t border-border py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} Michael Kihuyu · Nairobi, Kenya
        </span>
        <AppearanceSwitcher />
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-muted no-underline transition-colors duration-300 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

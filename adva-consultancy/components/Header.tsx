export default function Header() {
    return (
      <header className="flex items-center justify-between border-b border-[#243647] px-10 py-3">
        <div className="flex items-center gap-3 text-white">
          {/* Logo */}
          <div className="size-6 text-[#1466b8]">
            <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.475 21.6262C40.358..." />
            </svg>
          </div>
          <h2 className="text-lg font-bold">ADVA Consultancy</h2>
        </div>
  
        {/* Navigation */}
        <nav className="hidden md:flex gap-9 items-center">
          <a href="#" className="text-sm font-medium">Services</a>
          <a href="#" className="text-sm font-medium">Case Studies</a>
          <a href="#" className="text-sm font-medium">Insights</a>
          <a href="#" className="text-sm font-medium">About Us</a>
          <a href="#" className="text-sm font-medium">Contact</a>
        </nav>
  
        {/* CTA */}
        <button className="rounded-lg h-10 px-4 bg-[#1466b8] text-sm font-bold">
          Get Started
        </button>
      </header>
    );
  }
  
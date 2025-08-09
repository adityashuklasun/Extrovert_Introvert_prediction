// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-[#0a0a23] text-gray-400 text-center py-6 border-t border-gray-700">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <span className="text-teal-400">adityashukla.sun</span> — All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

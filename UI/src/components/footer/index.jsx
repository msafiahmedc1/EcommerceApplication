import { Link } from "react-router-dom";
import { FOOTERLINKS } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-gray-600">
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">E-Shop.</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quis totam, et nihil unde cumque. Porro iste animi placeat quod
            sapiente temporibus nobis rerum perspiciatis.
          </p>
        </div>
        <div className="text-gray-900">
          <h3 className="font-semibold text-base mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {FOOTERLINKS.map(({ path, label }) => (
              <li key={label}>
                <Link to={path} className="hover:text-green-800">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-gray-900">
          <h3 className="font-semibold text-base mb-2">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-green-800">Support</a>
            </li>
            <li>
              <a className="hover:text-green-800">Knowledge Base</a>
            </li>
            <li>
              <a className="hover:text-green-800">Live Chat</a>
            </li>
          </ul>
        </div>
        <div className="text-gray-900">
          <h3 className="font-semibold text-base mb-2">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-green-800">Jobs</a>
            </li>
            <li>
              <a className="hover:text-green-800">Our Team</a>
            </li>
            <li>
              <a className="hover:text-green-800">Leadership</a>
            </li>
            <li>
              <a className="hover:text-green-800">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="text-gray-900">
          <h3 className="font-semibold text-base mb-2">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-green-800">Nordic Chair</a>
            </li>
            <li>
              <a className="hover:text-green-800">Kruzo Aero</a>
            </li>
            <li>
              <a className="hover:text-green-800">Ergonomic Chair</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-gray-600 text-center text-sm mt-10 border-t pt-6">
        © 2025 E-Shop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { FOOTERLINKS } from "./constants";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white pt-16 pb-8 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-gray-600">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">E-Shop.</h2>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quis totam, et nihil unde cumque. Porro iste animi placeat quod
              sapiente temporibus nobis rerum perspiciatis.
            </p>
          </div>
          <div className="text-gray-900">
            <ul className="space-y-2 text-sm pt-12">
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
            <ul className="space-y-2 text-sm pt-12">
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
            <ul className="space-y-2 text-sm pt-12">
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
            <ul className="space-y-2 text-sm pt-12">
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
        <div className="text-gray-600 text-center">
          Copyright ©2025. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

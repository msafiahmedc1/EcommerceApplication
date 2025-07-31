import { Link } from "react-router-dom";
import FallbackImage from "../../../assets/fallbackImages/download.png";

const Body = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.slice(0, 10).map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow">
          <Link to={`/product/${item.id}`}>
            <div className="h-40 bg-gray-100 mb-2 flex items-center justify-center overflow-hidden">
              <img
                className="w-full aspect-[3/4] object-cover"
                src={item.images?.[0] || FallbackImage}
                alt={item.title || "No Image"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FallbackImage;
                }}
              />
            </div>
          </Link>
          <h3 className="text-lg font-medium">{item.title}</h3>
          <p className="text-sm text-gray-500">
            {item.description?.slice(0, 60)}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default Body;

import { User, MapPin, Phone, Mail, Edit } from "lucide-react";

const Profile = () => {
  return (
    <div className="p-5 min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-[#4f7666] rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 bg-[#628f7c] rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-gray-200" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Safi Ahmed</h1>
                  <p className="text-gray-200 text-sm">
                    Member since July 2025
                  </p>
                </div>
                <button className="flex items-center gap-2 bg-[#2d4a3f] hover:bg-[#263d35] px-4 py-2 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-200" />
              <span className="text-gray-100">safi@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-200" />
              <span className="text-gray-100">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-200" />
              <span className="text-gray-100">Sialkot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

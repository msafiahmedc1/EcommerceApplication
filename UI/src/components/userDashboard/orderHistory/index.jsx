import { Package, Calendar, DollarSign } from "lucide-react";

const OrderHistory = () => {
  return (
    <div className="pt-5 min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-[#3e5f52] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-white" />
            <h2 className="text-xl font-semibold text-white">Past Orders</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-[#4f7666] rounded-lg p-4 hover:bg-[#476c5d] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-semibold text-white">
                      Order #ORD-2024-001
                    </h3>
                    <span className="bg-green-900 text-green-300 px-2 py-1 rounded-full text-xs">
                      Delivered
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="w-4 h-4" />
                      <span>3 items</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-white font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>299.99</span>
                  </div>
                  <button className="text-blue-300 hover:text-blue-200 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#4f7666] rounded-lg p-4 hover:bg-[#476c5d] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-semibold text-white">
                      Order #ORD-2024-002
                    </h3>
                    <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded-full text-xs">
                      Shipped
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 20, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="w-4 h-4" />
                      <span>1 item</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-white font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>149.99</span>
                  </div>
                  <button className="text-blue-300 hover:text-blue-200 text-sm">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#4f7666] rounded-lg p-4 hover:bg-[#476c5d] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-semibold text-white">
                      Order #ORD-2024-003
                    </h3>
                    <span className="bg-yellow-900 text-yellow-300 px-2 py-1 rounded-full text-xs">
                      Processing
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 22, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="w-4 h-4" />
                      <span>2 items</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-white font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>89.99</span>
                  </div>
                  <button className="text-blue-300 hover:text-blue-200 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#4f7666] rounded-lg p-4 hover:bg-[#476c5d] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-semibold text-white">
                      Order #ORD-2023-045
                    </h3>
                    <span className="bg-green-900 text-green-300 px-2 py-1 rounded-full text-xs">
                      Delivered
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Dec 18, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="w-4 h-4" />
                      <span>5 items</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-white font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>459.99</span>
                  </div>
                  <button className="text-blue-300 hover:text-blue-200 text-sm">
                    Reorder
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#4f7666] rounded-lg p-4 hover:bg-[#476c5d] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-semibold text-white">
                      Order #ORD-2023-032
                    </h3>
                    <span className="bg-red-900 text-red-300 px-2 py-1 rounded-full text-xs">
                      Cancelled
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Nov 25, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="w-4 h-4" />
                      <span>1 item</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-400 font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>79.99</span>
                  </div>
                  <button className="text-blue-300 hover:text-blue-200 text-sm">
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-[#4f7666] hover:bg-[#476c5d] text-white px-6 py-2 rounded-lg transition-colors">
              Load More Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;

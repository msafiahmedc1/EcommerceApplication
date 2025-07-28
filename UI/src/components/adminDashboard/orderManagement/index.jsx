import { ORDERS } from "./constants";

const OrdersManagement = () => {
  return (
    <div className="pt-15">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Orders Management
        </h2>
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((order) => (
              <tr
                key={order.id}
                className="bg-[#f4f8f7] hover:bg-[#e1efeb] transition-all rounded"
              >
                <td className="py-2 px-3 rounded-l">{order.id}</td>
                <td className="py-2 px-3">{order.customer}</td>
                <td className="py-2 px-3 rounded-r">
                  <span
                    className={`px-2 py-1 text-xs rounded font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersManagement;

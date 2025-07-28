import { PAYMENTS } from "./constants";

const PaymentSummary = () => {
  return (
    <div className="pt-15">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Payment Summary
        </h2>
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th>ID</th>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {PAYMENTS.map((payment) => (
              <tr
                key={payment.id}
                className="bg-[#f4f8f7] hover:bg-[#e1efeb] transition-all rounded"
              >
                <td className="py-2 px-3 rounded-l">{payment.id}</td>
                <td className="py-2 px-3">{payment.user}</td>
                <td className="py-2 px-3">{payment.amount}</td>
                <td className="py-2 px-3 rounded-r">
                  <span
                    className={`px-2 py-1 text-xs rounded font-medium ${
                      payment.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {payment.status}
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

export default PaymentSummary;

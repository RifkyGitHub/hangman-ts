import { useState } from "react";

// TODO: 1. Buat Object Const untuk Status (PENDING, SHIPPED) gunakan 'as const'
const Status = {
    PENDING: "PENDING",
    SHIPPED : "SHIPPED",
} as const ;

// TODO: 2. Buat Interface Order (id, customerName, status, note opsional)

type StatusType = (typeof Status)[keyof typeof Status];

interface Order {
    id: string | number;
    customerName: string;
    status: StatusType; //yang dipakai itu ekstraknya (StatusType)
    note?: string;  //datanya opsional, (pake tanda tanya ?) 
};

function OrderCard() {
  // TODO: 3. Inisialisasi useState dengan data awal
  const [order, setOrder] = useState <Order>({
    id: 1,
    customerName: "Budi",
    status: Status.PENDING,
  });

  // TODO: 4. Buat fungsi sederhana untuk mengubah data pesanan secara manual (Gunakan Type Assertion 'as Order' jika perlu)
  const handleUpdateDataBaru = () => {
    const dataBaru = {
      id: "ORD-002",
      customerName: "Budi Santoso",
      status: Status.PENDING,
      note: "Jangan terlalu pedas",
    }

    // Memaksa TypeScript menerima objek biasa menjadi tipe 'Order'
    setOrder(dataBaru as Order);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Detail Pesanan: {order.id}</h2>
      <p>
        <strong>Pelanggan:</strong> {order.customerName}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>

      <div
        style={{ background: "#f9f9f9", padding: "10px", borderRadius: "4px" }}
      >
        {/* TODO: Gunakan Optional Chaining (?.) untuk kurir dan resi */}
        <p>
          <strong>Note:</strong> {order?.note || 'Tidak ada note'}
        </p>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button onClick={handleUpdateDataBaru}>Ganti Data Baru</button>
      </div>
    </div>
  );
}

export default OrderCard;

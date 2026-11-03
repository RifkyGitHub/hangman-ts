import { useState } from 'react';

// TODO: 1. Buat enums untuk Kategori Produk (ELECTRONICS, FASHION, FOOD)
// gunakan 'as const'
enum ProductCategory {
  ELECTRONICS = "ELECTRONICS",
  FASHION = "FASHION",
  FOOD = "FOOD",
}



// TODO: Ekstrak tipe dari ProductCategory menggunakan typeof dan keyof ;
// type ProductCategoryType =

type ProductCategoryType = (typeof ProductCategory)[keyof typeof ProductCategory]

// TODO: 2. Buat Interface Product
// id (str or int), productName, category, price, discount opsional)
interface Product {
  id: string | number,
  productName: string,
  category: ProductCategoryType,
  price: number,
  discount? : number
};

function ProductCard() {
  // TODO: 3. Inisialisasi useState dengan data awal
  // (id: 'P-01', productName: 'Kemeja Polos', category: 'FASHION', price: 150000)
  const [product, setProduct] = useState <Product>({
    id: 'P-01',
    productName: 'KEMEJA POLOS',
    category: ProductCategory.FASHION,
    price: 15000,
    discount: 5,
  });

  // TODO: 4. Buat fungsi untuk mengganti data produk dengan barang baru
  const handleRestockNewProduct = () => {
    const barangBaru = {
      id: 99,
      productName: 'Mechanical Keyboard Wireless',
      category: ProductCategory.ELECTRONICS, // ganti pakai dari enum
      price: 750000,
      discount: 10,
    };

    // Tulis setProduct dengan Type Assertion di sini
    setProduct(barangBaru as Product);
  };
2
  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'sans-serif',
        border: '2px dashed #4f46e5',
        borderRadius: '12px',
        maxWidth: '420px',
      }}>
      {/* TODO: Tampilkan ID Produk */}
      {product.id}
      <span style={{ fontSize: '12px', color: '#6b7280' }}>SKU: </span>

      {/* TODO: Tampilkan Nama Produk */}
      {product.productName}
      <h3 style={{ margin: '5px 0' }}></h3>

      <p style={{ margin: '5px 0' }}>
        {/* TODO: Tampilkan Kategori */}
        <strong>Kategori:</strong>
        {product.category}
      </p>

      <p style={{ margin: '5px 0' }}>
        {/* TODO: Tampilkan Harga */}
        <strong>Harga:</strong> Rp
        {product.price}
      </p>

      <div
        style={{
          background: '#fef3c7',
          padding: '10px',
          borderRadius: '6px',
          marginTop: '12px',
        }}>
        <p style={{ margin: '4px 0' }}>
          <strong>Garansi:</strong>{' '}
          {/* Tampilkan data "warranty" atau fallback 'Tanpa Garansi' */}


        </p>
        <p style={{ margin: '4px 0' }}>
          <strong>Diskon:</strong>{' '}
          {/* Tampilkan data discount atau fallback 'Tidak ada diskon' */}
          {product?.discount || 'tidak ada diskon'}
        </p>
      </div>

      <div style={{ marginTop: '15px' }}>
        <button
          onClick={handleRestockNewProduct}
          style={{
            padding: '8px 14px',
            background: '#4f46e5',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}>
          Muat Produk Baru
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

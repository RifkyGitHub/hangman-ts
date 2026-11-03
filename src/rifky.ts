
//Soal 1(free)
interface Buku {
    judul :string,
    penulis: string,
    tahunTerbit: number,
};

type KategoriBuku = 'Fiksi' | 'Non-Fiksi' | 'Edukasi';

interface BukuXKategoriBuku extends Buku{
    kategori: KategoriBuku;
}

const bukuFavorit: BukuXKategoriBuku = {
    judul: "Anak Kecil",
    penulis: 'Anak K',
    tahunTerbit: 2026,
    kategori: 'Non-Fiksi'
};



//Sola 2
interface Kendaraan {
    merk: string,
    roda: number,
};

interface Mobil extends Kendaraan{
    pintu: number,
    isElektrik: boolean,
};

const mobilObjek: Mobil = {
    merk: 'Kijang',
    roda: 4,
    pintu: 4,
    isElektrik: false,
};

//Soal 3
type Alamat = {
    jalan: string,
    kota: string,
};

type Kontak = {
    email: string,
    telepon : string,
};

type ProfilLengkap = Alamat & Kontak;

const ProfilObjek : ProfilLengkap = {
    jalan: "jl.mawar",
    kota: 'Bogor',
    email: 'rifkyhw@gmail.com',
    telepon: '081294938284'
};


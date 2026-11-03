// // type BiodataTypes = {
// //   name: string;
// //   age?: number;
// // }

import { useEffect, useState } from "react";
import HangmanDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

// import GenType from "./components/GenType"
// import OrderCard from "./components/OrderCard"

// // //UNION

// // export default function App() {

// //   let name: string | boolean= 'Rifky'; //Pake tanda or ( | )(contoh string | boolean)
// //   name = false;

// //   let prize: number | string = 20000;
// //   prize = "Sepuluh Ribu";

// //   let favFood: string[] | number = ['Martabak', 'Rotbak'];

// //   const biodata: BiodataTypes = {
// //     name: 'Rifky',
// //   }

// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// function App() {

//     let name: string = 'Rifky';
//     let age : number = 16;
//     let isOsis: boolean = false;
//     let score: number | string = "Seratus";
//     score = 100;

//     console.log(name, age, isOsis, score);

//     let indentity: string | number = 1234567;
//     indentity = "SISWA-XI-01"
//     console.log(indentity);

//   return (
//     <div>
//       Trainning
//     </div>
//   )
// }

// export default App;

// function App({name, age} : {name: string; age: number}) {
//   //1. Menentukan tipe data parameter
//   //2. Menentukan tipe data return nya (kembalian function)
//   const calculateNumber = (a: number, b: number): string => {
//     return `Hasilnya adalah ${a + b}` ;
//   };
//   return (
//     <div> {calculateNumber(10, 10)}</div>
//   )
// }

// export default App;

// function App() {
//   const value: number | string = 80;

//   // Nomor satu
//   const tampilkanData = (nama: string, umur: number, isOSIS: boolean): void => {
//     console.log(
//       `Halo nama saya ${nama}, saya berumur ${umur} ${
//         isOSIS ? "Saya bukan bagian dari OSIS" : ""
//       }`,
//     );
//   };

//   // Nomor dua
//   const cekKelulusan = (nilai: number): string => {
//     if (nilai >= 75) {
//       return "Lulus";
//     } else {
//       return "Tidak Lulus";
//     }
//   };

//   //
//   const name: string = "Budi";
//   const age: number = 17;
//   const isOSIS: boolean = true;

//   return (
//     <div>
//       <p>{tampilkanData(name, age, isOSIS)}</p>
//       <p>{cekKelulusan(Number(value))}</p>
//     </div>
//   );
// }

// // export default App;
// import React from "react";
// import StudentGrade from "./components/StudentGrade";

// function App() {
//   return (
//     <div>
//       <StudentGrade
//         name="Rifky"
//         initialScore={0}
//         className="XIB"
//         status="Santri"
//       />
//     </div>
//   );
// }

// export default App;

//
// type Status = 'Active' | 'Non-Active' ;
// type Grade = 'SMP' | 'SMA' ;

// interface Identity {
//   id: number;
//   name: string;
// };

// interface DetailIdentity extends Identity {
//   status: Status;
//   grade: Grade;
// };

// type FullIdentity = Identity & DetailIdentity;

// const student: FullIdentity = {
//   id : 1,
//   name: 'Rifky',
//   status: "Active",
//   grade: "SMA",
// };

// console.log(student);

//ENUMS

// enum StatusKerja {
//   PENDING = 'PENDING',
//   ONPROGRESS = 'ON PROGRESS',
//   COMPLETED = 'COMPLETED',

// }

// enum Autentifikasi {
//   LOGIN = 'LOGIN',
//   LOGOUT = 'LOGOUT',
//   EXPIRED = 'EXPIRED',
// }

// enum Nasional {
//   WNI = 'Warga Negara Indonesia',
//   WNA = 'Warga Negara Asing',
// }

// const dataKaryawan = [
//   {
//     id: 1,
//     name: 'rifky',
//     StatusKerja: StatusKerja.PENDING,
//     Autentifikasi: Autentifikasi.LOGIN,
//     Nasional: Nasional.WNA,
//   },
//   {
//     id: 2,
//     name: 'mustafid',
//     StatusKerja: StatusKerja.ONPROGRESS,
//     Autentifikasi: Autentifikasi.EXPIRED,
//     Nasional: Nasional.WNI,
//   },
//   {
//     id: 3,
//     name: 'anhar',
//     StatusKerja: StatusKerja.COMPLETED,
//     Autentifikasi: Autentifikasi.LOGOUT,
//     Nasional: Nasional.WNI,
//   },
//   {
//     id: 4,
//     name: 'azki',
//     StatusKerja: StatusKerja.ONPROGRESS,
//     Autentifikasi: Autentifikasi.LOGIN,
//     Nasional:Nasional.WNA,
//   }
// ]

//TYPE ASSERTION (ENUMS VERSI LEBIH AMAN) PAKAI (as const)

// const StatusKerja = {
//   PENDING : 'PENDING',
//   ONPROGRESS : 'ON PROGRESS',
//   COMPLETED : 'COMPLETED',

// } as const//tanda klo pake type assertion;

// const Autentifikasi = {
//   LOGIN : 'LOGIN',
//   LOGOUT : 'LOGOUT',
//   EXPIRED : 'EXPIRED',
// } as const;

// const Nasional = {
//   WNI : 'Warga Negara Indonesia',
//   WNA : 'Warga Negara Asing',
// } as const;

// const prosesKerja = [

// ];

// console.log(prosesKerja);

// const salam: unknown = 'Halo namaa w bulott';
// console.log((salam as string).length)

// const dataKaryawan = [
//   {
//     id: 1,
//     name: 'rifky',
//     StatusKerja: StatusKerja.PENDING,
//     Autentifikasi: Autentifikasi.LOGIN,
//     Nasional: Nasional.WNA,
//   },
//   {
//     id: 2,
//     name: 'mustafid',
//     StatusKerja: StatusKerja.ONPROGRESS,
//     Autentifikasi: Autentifikasi.EXPIRED,
//     Nasional: Nasional.WNI,
//   },
//   {
//     id: 3,
//     name: 'anhar',
//     StatusKerja: StatusKerja.COMPLETED,
//     Autentifikasi: Autentifikasi.LOGOUT,
//     Nasional: Nasional.WNI,
//   },
//   {
//     id: 4,
//     name: 'azki',
//     StatusKerja: StatusKerja.ONPROGRESS,
//     Autentifikasi: Autentifikasi.LOGIN,
//     Nasional:Nasional.WNA,
//   }
// ]

// function App() {
//   return (
//     <div>
//       {/* <OrderCard/>
//       <GenType/> */}
//     </div>
//   )
// }

// export default App

// interface StudentTypes {
//   name: string;
//   age: number;
//   isOSIS: boolean;
//   favFood: string[];
// }

// const students: StudentTypes = {
//   name: "Rifky",
//   age: 16,
//   isOSIS: false,
//   favFood: ["Rotbak", "Martabak"],
// };

//PROJECT TYPESCRIPT

import words from "../wordlist.json";

function App() {
  const [currentWord, setCurrentWord] = useState(() => {
    // Mengambil 1 kata random di wordlist.json
    return words[Math.floor(Math.random() * words.length)];
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  // Menghitung jumlah huruf yang salah ditebak
  const incorrectLetters = selectedLetters.filter((letter) => {
    return !currentWord.includes(letter);
  });

  const isWin = currentWord
    .split("")
    .every((letter) => selectedLetters.includes(letter));

  const isLose = incorrectLetters.length >= 6;

  const gameOver = isWin || isLose;

  const addLetter = (letter: string) => {
    // kalo hurufnya udh ada di selectedLetters
    // maka gak oerlu di masukin kembali (stop function)
    if (gameOver || selectedLetters.includes(letter)) return;

    setSelectedLetters((prev) => [...prev, letter]);
  };

  // Fitur keyboard tekan
  useEffect(() => {
    const onKeyboardPress = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addLetter(key);
    };

    document.addEventListener("keypress", onKeyboardPress);

    return () => {
      document.removeEventListener("keypress", onKeyboardPress);
    };
  }, [selectedLetters]);

  return (
    <section className="flex flex-col items-center h-screen gap-10">
      <div>{isWin ? "You win!" : isLose ? "NT" : ""}</div>
      <HangmanDraw attempt={incorrectLetters.length} />
      <HangmanWord
        word={currentWord}
        selectedLetters={selectedLetters}
        isWin={isWin}
        isLose={isLose}
      />

      <Keyboard
        onKeyboardClick={addLetter}
        inactiveLetters={incorrectLetters}
        disabled={gameOver}
        activeLetters={selectedLetters.filter((letter) => {
          return currentWord.includes(letter);
        })}
      />
    </section>
  );
}

export default App;

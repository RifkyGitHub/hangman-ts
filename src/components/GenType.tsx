//MATERI PENGGUNAAN GENERIC TYPE
function GenType() {

    //1.Pake di String
interface Student {
    name: string,
    age: number,
}

function displayData <T> (data : T) : T {
    return data;
};

const name = displayData<string>("Rifky");
console.log(name.toLowerCase());

//2. Pake di object
const student = displayData<Student>({
    name: "Rifky",
    age: 16
})
console.log(student.name);
console.log(student.age);



  return (
    <div>
      GENERIC TYPE
    </div>
  )
}


export default GenType;
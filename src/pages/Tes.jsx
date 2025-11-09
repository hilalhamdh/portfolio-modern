// function Tes(str) {
//   let result = "";
//   for (let char of str) {
//     result = char + result;
//   }
//   return result;
// }
// console.log(Tes("Hilal Hamdi"));

import { useEffect, useState } from "react";

// export default Tes;

// output remmagorp
function ReverseString(str) {
  return str.split().reverse().join();
}
console.log(ReverseString("Progammer"));
export default ReverseString;

// output 12344 dan tidak boleh duplikat
function Number(arr) {
  return [...new Set(arr)];
}
console.log(Number([1, 2, 3, 3, 4, 5]));

const Data = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("featching data gagal", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading.....</p>;
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>
            {user.name} <span>{user.email}</span>
          </h1>
        </div>
      ))}
    </div>
  );
};

function Balik(b) {
  let result = "";
  for (let char of b) {
    result = char + result;
  }
  return result;
}
console.log(Balik("Hilal"));

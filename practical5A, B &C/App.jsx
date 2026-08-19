// import axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {axios.get("https://dummyjson.com/products")
//     .then((response) => {
//       setProducts(response.data.products);
//     }); }, []);
//     return(
//       <div>
//         <h1>Product List</h1>
//         <hr/>
//         {products.map((product) => (
//           <div key={product.id}>
//             <h2>{product.title}</h2>
//             <p>Price: Rs.{product.price}</p>
//             </div>
//         ))}
//       </div>
//     );
// }
// export default App;


//practical 5 e
// import axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {axios.get("https://dummyjson.com/products")
//     .then((response) => {
//       setProducts(response.data.products);
//     }); }, []);
//     return(
//       <div>
//         <h1>Product List</h1>
//         <hr/>
//         <table border="1">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Product Name</th>
//               <th>Price</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.title}</td>
//               <td>₹{product.price}</td>
//               <td>{product.category}</td>
//             </tr>
//         ))}
//           </tbody>
//         </table>
//       </div>
//     );
// }
// export default App;

//practical 5f
// import axios from "axios";
// import { useEffect, useState } from "react";
// function App() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   useEffect(() => {axios.get("https://dummyjson.com/products")
//     .then((response) => {
//       setProducts(response.data.products);
//     }); }, []);
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase()) );
//   return(
//     <div>
//       <h1>Product Search</h1>
//       <input 
//       type= "text"
//       placeholder= "Search product"
//       value={search}
//       onChange={(e) => setSearch(e.target.value)} />
//       <hr/>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Product Name</th>
//             <th>Price</th>
//             <th>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((product) =>(
//             <tr key={product.id}>
//               <td>{product.id}</td>
//                <td>{product.title}</td>
//                 <td>₹{product.price}</td>
//                <td>{product.category}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;


//practical 4 f
import { useState } from "react";
function App() {
    const [movies] = useState([
        {
            name: "Inception",
            genre: "Sci-Fi",
            rating: 8.8
        },
        {
            name: "Interstellar",
            genre: "Sci-Fi",
            rating: 8.7
        },
        {
            name: "The Dark Knight",
            genre: "Action",
            rating: 9.0
        },
        {
            name: "Avengers: Endgame",
            genre: "Action",
            rating: 8.4
        }
    ]);
    return (
        <div>
            <h1>Movie Watchlist</h1>
            <hr />
            {
                movies.map((movie, index) => (
                    <div key={index}>
                        <h2>{movie.name}</h2>
                        <p>Genre : {movie.genre}</p>
                        <p>Rating : {movie.rating}/10</p>
                        <hr />
                    </div>
                ))  }
        </div>
    );
}
export default App;
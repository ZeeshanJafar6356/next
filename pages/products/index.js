import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            {' '}
            <h1>{product.title}</h1>
          </Link>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}
export default Profile;
// import Link from 'next/link';
// export const getStaticProps = async () => {
//   const res = await fetch('https://fakestoreapi.com/products');
//   const data = await res.json();
//   console.log('Api Data Incoming', data);

//   return {
//     props: {
//       data,
//     },
//   };
// };
// // You can also use props//
// const products = ({ data }) => {
//   return (
//     <>
//       <div
//         style={{
//           textAlign: 'center',
//           padding: '50px',
//           cursor: 'pointer',
//         }}
//       >
//         {/* TO APPLY LIMIT OF DATA:.slice(0, 5) */}
//         {data.map((element) => {
//           return (
//             <div key={element.id}>
//               {/* TWO WAYS TO PASS ID TO THE ROUTE */}
//               {/* <Link href={`/products/${element.id}`}>
//                 <h1>{element.title}</h1>
//               </Link> */}
//               <Link href={`/products/` + element.id}>
//                 <h1>{element.title}</h1>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//       <style jsx>{`
//         h1 {
//           padding: 2px 16px;
//           display: block;

//           margin: 20px 10px;
//         }
//         h1:hover {
//           border-left: 2px solid red;
//         }
//       `}</style>
//     </>
//   );
// };

// export default products;
// import Link from 'next/link';
// export const getStaticProps = async () => {
//   const res = await fetch('https://api.eventmassi.com/api/v2/get-all-users');
//   const data = await res.json();
//   console.log('Api Data Incoming', data);

//   return {
//     props: {
//       data,
//     },
//   };
// };
// // You can also use props//
// const products = ({ data }) => {
//   return (
//     <>
//       <div
//         style={{
//           textAlign: 'center',
//           padding: '50px',
//           cursor: 'pointer',
//         }}
//       >
//         {data.data.map((element) => {
//           return (
//             <div key={element._id}>
//               {/* <Link href={`/products/${element.id}`}> */}
//               <h3>{element.business}</h3>
//               {/* </Link> */}
//             </div>
//           );
//         })}
//       </div>
//       <style jsx>{`
//         h3 {
//           padding: 2px 16px;
//           display: block;

//           margin: 20px 10px;
//         }
//         h1:hover {
//           border-left: 2px solid red;
//         }
//       `}</style>
//     </>
//   );
// };

// export default products;

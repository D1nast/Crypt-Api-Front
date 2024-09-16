// // src/pages/UserPage.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// export default function UserPage() {
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const response = await axios.get(
//                     `${process.env.REACT_APP_API}/user`,
//                     { withCredentials: true }
//                 );
//                 setUser(response.data);
//             } catch (error) {
//                 setError('Failed to load user information.');
//             }
//         };

//         fetchUser();
//     }, []);
//     return(
//         <>
//             <div style={{width:'100%',height:'300px',paddingTop:"100px"}}>
//                 <h1>aaaaa</h1>
//                 {user}
//             </div>
//         </>

//     )
// }

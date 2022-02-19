import React from "react";



const Profile = (props) => {
    const puppyStyles = {
        backgroundColor: 'lightGreen'
    }

    const imageStyles = {
    maxWidth: '150px',
    maxHeight: '150px'
}
    
    const {puppyName,puppyAddress,emailAddress,puppyImage} = props;
    
    return (
        <div style = {puppyStyles}>
            <h1>{puppyName}</h1>
            <p>{puppyAddress}</p>
            <p>{emailAddress}</p>
            <img style = {imageStyles} src = {puppyImage}></img>
        </div>

    )
}

export default Profile;


// import React from 'react';

// const puppyCardStyles = {
//     backgroundColor: 'lightgreen',
//     width: '150px',
// };

// const imageStyles = {
//     maxWidth: '150px',
//     maxHeight: '150px'
// }

// const pTagStyles = {
//     fontSize: '20px',
//     margin: 0,
// }

// const PuppyCard = (props) => {
//     const { url, puppyNumber } = props;

//     return (
//         <div style={puppyCardStyles}>
//             <img style={imageStyles} src={url}></img>
//             <p style={pTagStyles}>
//                 Puppy number {puppyNumber}
//             </p>
//         </div>
//     );
// };

// export default PuppyCard;
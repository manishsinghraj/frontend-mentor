import React, { useState } from 'react';
import iconStar from "./assets/images/icon-star.svg";
import illustrationThankYou from "./assets/images/illustration-thank-you.svg";

const RatingCard = () => {
  const [ratingNumber, setRatingNumber] = useState([...Array(5)]);
  const [selectedStarIndex, setSelectedStarIndex] = useState(-1);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      setSelectedStarIndex(index);
    }
  };

  return (
    <>
      <main className="bg-Very-Dark-Blue" role="main" aria-label="Rating Card">
        <div className={`flip-container ${isFlipped ? 'flipped' : ''} flex justify-center items-center min-h-screen`}>

          {/* {card-front} */}
          <div className={`flip-card ${isFlipped ? 'opacity-50' : 'block'} transition-transform bg-Dark-Blue w-[90%] max-w-[380px] font-Overpass text-base px-[20px] py-8 rounded-3xl space-y-6 text-White absolute`} aria-hidden={isFlipped} role="region" aria-label="Rating Form">
            <div className='rounded-full w-10 h-10 bg-Charcoal-Blue flex justify-center items-center' aria-hidden="true">
              <img src={iconStar} alt="star icon" />
            </div>
            <h1 className='font-bold' tabIndex="0">How did we do?</h1>
            <p className='text-Light-Grey' tabIndex="0">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className='flex justify-between' role="radiogroup" aria-label="Rating Options">
              {ratingNumber.map((_, index) => {
                return (
                  <div
                    key={index}
                    role="radio"
                    aria-checked={selectedStarIndex === index}
                    onClick={() => setSelectedStarIndex(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`${selectedStarIndex === index ? 'bg-White text-black' : 'bg-Charcoal-Blue'} rounded-full w-12 h-12 flex justify-center items-center ${selectedStarIndex !== index ? "hover:bg-Orange" : ""} text-Light-Grey hover:text-black cursor-pointer transition-all duration-300 ease-out`}
                    tabIndex="0"
                    aria-label={`Rate ${index + 1}`}
                  >
                    <span className='leading-none font-bold'>{index + 1}</span>
                  </div>
                );
              })}
            </div>
            <button className='w-full text-black tracking-[3px] rounded-[50px] font-bold bg-Orange py-4 px-7 hover:bg-White hover:text-black leading-none cursor-pointer active:scale-[0.99] transition-all duration-300 ease-out' onClick={handleFlip} aria-label="Submit your rating">
              SUBMIT
            </button>
          </div>

          {/* {card-back} */}
          <div className={`flip-card-back bg-Dark-Blue max-w-[380px] w-[90%] absolute font-Overpass text-base px-[20px] py-8 rounded-3xl space-y-10 text-White flex flex-col justify-center items-center text-center ${isFlipped ? ' block' : 'hidden'}`} aria-hidden={!isFlipped} role="region" aria-label="Thank You Message">
            <div>
              <img src={illustrationThankYou} alt="Thank you illustration" />
            </div>
            <div className='bg-Charcoal-Blue rounded-full py-2 text-Orange px-5 leading-none'>
              <p>You selected <span>{selectedStarIndex + 1}</span> out of 5</p>
            </div>
            <div className='space-y-3'>
              <h1 tabIndex="0">Thank you!</h1>
              <p className='text-Light-Grey' tabIndex="0">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RatingCard;














//without accessebility code


// import React, { useState } from 'react';
// import iconStar from "./assets/images/icon-star.svg";
// import illustrationThankYou from "./assets/images/illustration-thank-you.svg";

// const RatingCard = () => {
//   const [ratingNumber, setRatingNumber] = useState([...Array(5)]);
//   const [selectedStarIndex, setSelectedStarIndex] = useState(-1);
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleFlip = () => {
//     setIsFlipped(!isFlipped);
//   }

//   return (
//     <>
//       <main className="bg-Very-Dark-Blue">
//         <div className={`flip-container ${isFlipped ? 'flipped' : ''} flex justify-center items-center min-h-screen`}>

//           {/* {card-front} */}
//           <div className={`flip-card ${isFlipped ? 'opacity-50' : 'block'}  transition-transform  bg-Dark-Blue w-[90%] max-w-[380px] font-Overpass text-base px-[20px] py-8 rounded-3xl space-y-6 text-White absolute`}>
//             <div className='rounded-full w-10 h-10 bg-Charcoal-Blue flex justify-center items-center'>
//               <img src={iconStar} alt="rating icon" />
//             </div>
//             <h1 className='font-bold'>How did we do?</h1>
//             <p className='text-Light-Grey'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
//             <div className='flex justify-between'>
//               {ratingNumber.map((_, index) => {
//                 return (
//                   <div
//                     key={index}
//                     onClick={() => setSelectedStarIndex(index)}
//                     className={`${selectedStarIndex === index ? 'bg-White text-black' : 'bg-Charcoal-Blue'} rounded-full w-12 h-12 flex justify-center items-center ${selectedStarIndex !== index ? "hover:bg-Orange" : ""} text-Light-Grey hover:text-black cursor-pointer  transition-all duration-300 ease-out`}
//                   >
//                     <span className='leading-none font-bold'>{index + 1}</span>
//                   </div>
//                 );
//               })}
//             </div>
//             <button className='w-full text-black tracking-[3px] rounded-[50px] font-bold bg-Orange py-4 px-7 hover:bg-White hover:text-black leading-none cursor-pointer active:scale-[0.99] transition-all duration-300 ease-out' onClick={handleFlip}>
//               SUBMIT
//             </button>
//           </div>

//           {/* {card-back} */}
//           <div className={`flip-card-back bg-Dark-Blue max-w-[380px] w-[90%] absolute font-Overpass text-base px-[20px] py-8 rounded-3xl space-y-10
//        text-White flex flex-col justify-center items-center text-center ${isFlipped ? ' block' : 'hidden'} `}>
//             <div>
//               <img src={illustrationThankYou} alt="An illustration of Thank you" />
//             </div>
//             <div className='bg-Charcoal-Blue rounded-full py-2 text-Orange px-5 leading-none'>
//               <p>You selected <span>{selectedStarIndex + 1}</span> out of 5</p>
//             </div>
//             <div className='space-y-3'>
//               <h1>Thank you!</h1>
//               <p className='text-Light-Grey'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default RatingCard;

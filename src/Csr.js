// import React from "react";

// const Csr = () => {


//   const DOMstrings = {
//     stepsBtnClass: 'multisteps-form__progress-btn',
//     stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
//     stepsBar: document.querySelector('.multisteps-form__progress'),
//     stepsForm: document.querySelector('.multisteps-form__form'),
//     stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
//     stepFormPanelClass: 'multisteps-form__panel',
//     stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
//     stepPrevBtnClass: 'js-btn-prev',
//     stepNextBtnClass: 'js-btn-next'
// };

// const removeClasses = (elemSet, classRef) => {
//   elemSet.forEach(elem => {
//       elem.classList.remove(classRef);
//   });
// };

// const findParent = (elem, parentClass) => {
//   let currentNode = elem;
//   while (!currentNode.classList.contains(parentClass)) {
//       currentNode = currentNode.parentNode;
//   }
//   return currentNode;
// };

// const getActiveStep = elem => {
//   return Array.from(DOMstrings.stepsBtns).indexOf(elem);
// };


// const setActiveStep = activeStepNum => {
//   //remove active state from all the state
//   removeClasses(DOMstrings.stepsBtns, 'js-active');
//   //set picked items to active
//   DOMstrings.stepsBtns.forEach((elem, index) => {
//       if (index <= activeStepNum) {
//           elem.classList.add('js-active');
//       }
//   });
// };

// const getActivePanel = () => {
//   let activePanel;
//   DOMstrings.stepFormPanels.forEach(elem => {
//       if (elem.classList.contains('js-active')) {
//           activePanel = elem;
//       }
//   });
//   return activePanel;
// };

// const setActivePanel = activePanelNum => {
//   //remove active class from all the panels
//   removeClasses(DOMstrings.stepFormPanels, 'js-active');
//   //show active panel
//   DOMstrings.stepFormPanels.forEach((elem, index) => {
//       if (index === activePanelNum) {
//           elem.classList.add('js-active');
//           setFormHeight(elem);
//       }
//   });
// };
// //set form height equal to current panel height
// const formHeight = activePanel => {
//   const activePanelHeight = activePanel.offsetHeight;
//   DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
// };
// const setFormHeight = () => {
//   const activePanel = getActivePanel();
//   formHeight(activePanel);
// };
// //STEPS BAR CLICK FUNCTION
// DOMstrings.stepsBar.addEventListener('click', e => {
//   //check if click target is a step button
//   const eventTarget = e.target;
//   if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
//       return;
//   }
//   //get active button step number
//   const activeStep = getActiveStep(eventTarget);
//   //set all steps before clicked (and clicked too) to active
//   setActiveStep(activeStep);
//   //open active panel
//   setActivePanel(activeStep);
// });
// //PREV/NEXT BTNS CLICK
// DOMstrings.stepsForm.addEventListener('click', e => {
//   const eventTarget = e.target;
//   //check if we clicked on `PREV` or NEXT` buttons
//   if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`))) {
//       return;
//   }
//   //find active panel
//   const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
//   let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
//   //set active step and active panel onclick
//   if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
//       activePanelNum--;
//   } else {
//       activePanelNum++;
//   }
//   setActiveStep(activePanelNum);
//   setActivePanel(activePanelNum);
// });
// //SETTING PROPER FORM HEIGHT ONLOAD
// window.addEventListener('load', setFormHeight, false);
// //SETTING PROPER FORM HEIGHT ONRESIZE
// window.addEventListener('resize', setFormHeight, false);











//   return (
//     <div classNameName="container ">

//       <div className="multisteps-form">
//         {/* <!--progress bar--> */}
//         <div className="row mt-5">
//           <div className="col-12 col-lg-8 ml-auto mr-auto mb-4">
//             <div className="multisteps-form__progress">
//               <button className="multisteps-form__progress-btn js-active" type="button" title="User Info">Personal
//                 Information</button>
//               <button className="multisteps-form__progress-btn" type="button" title="Address">Address
//                 Information</button>
//               <button className="multisteps-form__progress-btn" type="button" title="Order Info">Education
//                 Information</button>
//               <button className="multisteps-form__progress-btn" type="button" title="Comments">Final Step </button>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-lg-8 m-auto">
//             <form className="multisteps-form__form">
//               <div className="multisteps-form__panel shadow p-4 rounded bg-white js-active" data-animation="scaleIn">
//                 <h3 className="multisteps-form__title">Your User Info</h3>
//                 <div className="multisteps-form__content">
//                   <div className="form-row mt-4">
//                     <div className="col-12 col-sm-6">
//                       <input className="multisteps-form__input form-control" type="text"
//                         placeholder="Your Full Name " />
//                     </div>
//                     <div className="col-12 col-sm-6 mt-4 mt-sm-0">
//                       <input className="multisteps-form__input form-control" type="email"
//                         placeholder="Email Id" />
//                     </div>


//                   </div>
//                   <div className="form-row mt-4">
//                     <div className="col-12 col-sm-6">
//                       <input className="multisteps-form__input form-control" type="number"
//                         placeholder="Mobile No." />
//                     </div>
//                     <div className="col-12 col-sm-6 mt-4 mt-sm-0">
//                       <input className="multisteps-form__input form-control" type="number"
//                         placeholder="Age" />
//                     </div>
//                   </div>
//                   <div className="form-row mt-4">
//                     <div className="col-12 col-sm-6">
//                       <input className="multisteps-form__input form-control" type="number"
//                         placeholder="Passing Year" />
//                     </div>
//                     <div className="col-12 col-sm-6 mt-4 mt-sm-0">
//                       <input className="multisteps-form__input form-control" type="text"
//                         placeholder="Please describes yourself" />
//                     </div>
//                   </div>
//                   <div className="button-row d-flex mt-4">
//                     <button className="btn btn-primary ml-auto js-btn-next" type="button"
//                       title="Next">Next</button>
//                   </div>
//                 </div>
//               </div>
//               {/* <!--single form panel--> */}
//               <div className="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
//                 <h3 className="multisteps-form__title">Your Address</h3>
//                 <div className="multisteps-form__content">
//                   <div className="form-row mt-4">
//                     <div className="col">
//                       <input className="multisteps-form__input form-control" type="text"
//                         placeholder="Current Location (city/village)" />
//                     </div>
//                   </div>
//                   <div className="form-row mt-4">
//                     <div className="col">
//                       <input className="multisteps-form__input form-control" type="text"
//                         placeholder="Permanent Residence Location (city/village)" />
//                     </div>
//                   </div>
//                   <div className="form-row mt-4">
//                     <div className="col-12 col-sm-6">
//                       <input className="multisteps-form__input form-control" type="text" placeholder="City" />
//                     </div>
//                     <div className="col-6 col-sm-3 mt-4 mt-sm-0">
//                       <select className="multisteps-form__select form-control">
//                         <option selected="selected">State...</option>
//                         <option>...</option>
//                       </select>
//                     </div>
//                     <div className="col-6 col-sm-3 mt-4 mt-sm-0">
//                       <input className="multisteps-form__input form-control" type="text" placeholder="Zip" />
//                     </div>
//                   </div>
//                   <div className="button-row d-flex mt-4">
//                     <button className="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
//                     <button className="btn btn-primary ml-auto js-btn-next" type="button"
//                       title="Next">Next</button>
//                   </div>
//                 </div>
//               </div>
//               {/* <!--single form panel--> */}
//               <div className="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
//                 <h3 className="multisteps-form__title">Your Education Info</h3>
//                 <div className="multisteps-form__content">
//                   <div className="form-row mt-4">
//                     <div className="col-12 col-sm-6">
//                       <input className="multisteps-form__input form-control" type="text" placeholder="Highest Qualification followed by specialization
//                                         " />
//                     </div>
//                     <div className="col-12 col-sm-6 mt-4 mt-sm-0">
//                       <input className="multisteps-form__input form-control" type="text"
//                         placeholder="Your Key Skills " />
//                     </div>
//                   </div>
//                   <div className="form-row mt-4">
//                     <div className="col-12 col-sm-6">
//                       <input className="multisteps-form__input form-control" type="text"
//                         placeholder="Relevant experience" />
//                     </div>
//                     <div className="col-12 col-sm-6 mt-4 mt-sm-0">
//                       <input className="multisteps-form__input form-control" type="text"
//                         placeholder="Possibly, How soon you can join (If offered) (mention in days)? " />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-row mt-4">
//                   <div className="col-12 col-sm-6">
//                     <input className="multisteps-form__input form-control" type="number"
//                       placeholder="Previous Company Notice Period (If Any)" />
//                   </div>
//                   <div className="col-12 col-sm-6 mt-4 mt-sm-0">
//                     <input className="multisteps-form__input form-control" type="number"
//                       placeholder="Expected CTC (Annual) " />
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="button-row d-flex mt-4 col-12">
//                     <button className="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
//                     <button className="btn btn-primary ml-auto js-btn-next" type="button"
//                       title="Next">Next</button>
//                   </div>
//                 </div>

//               </div>
//               {/* <!--single form panel--> */}
//               <div className=" mt-4 multisteps-form__panel lastPanel shadow p-4 rounded bg-white" data-animation="scaleIn">
//                 <h3 className="multisteps-form__title mt-5">Additional Comments</h3>
//                 <div className="multisteps-form__content">
//                   <div className="form-row mt-4">
//                     <textarea className="multisteps-form__textarea form-control"
//                       placeholder="Additional Comments and Requirements"></textarea>
//                   </div>
//                   <div className="button-row d-flex mt-4">
//                     <button className="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
//                     <button className="btn btn-success ml-auto" type="button" title="Send">Send</button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Csr;

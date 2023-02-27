import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Framer Motion */
//import { motion } from "framer-motion";

import {

  ModalContainer,
  ModalWrapper,
  Background,
  ModalImg,
  ModalContent,
  CloseModalButton,
  ModalBtn,

  Text1,
  PaddingMiddle

} from './ModalElements'


/* API CALLS - Web3Auth */
import { useMoralis } from "react-moralis";

/* image imports */
// import camera from './modal.jpg';

export const CModal = ({ showModal, setShowModal }) => {

  
  /* MODAL GUI BELOW */

  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        // console.log('I pressed');
      }
    },

    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  //-Drop Dwon Animation
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 24,
        stiffness: 400,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };


  const Modal = ({ handleClose, text }) => {

    return (
      <ModalContainer onClick={handleClose}>
        <div>
          <p>{text}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </ModalContainer>
    );
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef}>

          <div>

            <ModalWrapper showModal={showModal}>

              <ModalContent>
                Gabes little project
                <Text1>When was the day we had our first date?</Text1>
              </ModalContent>


              <ModalContent>

                <input type="date" style={{fontSize : '2rem'}}  />


                <PaddingMiddle/>

                <ModalBtn   onClick={() => setShowModal(prev => !prev)} > submit</ModalBtn>
    
              </ModalContent>
              
              
            </ModalWrapper>

          </div>

        </Background>
      ) : null}
    </>
  );
};


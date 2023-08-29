import React, { useCallback, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 352px;
  height: 444.78px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  button {
    margin-top: 40px;
    padding: 10px 24px;
    background: #93B7FF;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    border: none;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.48px;
    padding-left: 20px;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ ID_ShowModal, ID_SetShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: ID_ShowModal ? 1 : 0,
    transform: ID_ShowModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      ID_SetShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && ID_ShowModal) {
        ID_SetShowModal(false);
        console.log("I pressed");
      }
    },
    [ID_SetShowModal, ID_ShowModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {ID_ShowModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper ID_ShowModal={ID_ShowModal}>
              <ModalContent>
                <h1>Forgot your ID?</h1>
                <input id="id" type="text" placeholder="Name" />
                <input id="id" type="text" placeholder="Phone-Number" />
                <button>Search</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => ID_SetShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

import React, { useState } from 'react';
import styled from 'styled-components';

interface SidebarProps {
  width: number;
  height: number | string;
  children: any;
}
const Sidebar2: React.FC<SidebarProps> = ({ width, height, children }) => {
  const [xPosition, setX] = useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  return (
    <React.Fragment>
      <SideBar
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <ToggleMenu
          onClick={() => toggleMenu()}
          style={{
            transform: `translate(${width}px, 40vh)`,
          }}
        ></ToggleMenu>
        <div className="content">{children}</div>
      </SideBar>
    </React.Fragment>
  );
};
export default Sidebar2;

const SideBar = styled.div`
  height: 100% !important;
  display: flex;
  flex-direction: column;
  border-right: 2px solid;
  border-radius: 0;
  border-color: rgba(64, 194, 133, 0.693);
  background-color: rgb(255, 255, 255);
  transition: 0.8s ease;
`;

const ToggleMenu = styled.div`
  height: 60px;
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 10rem;
  width: 10px;
  position: absolute;
  outline: none;
  z-index: 1;
  background-color: rgba(64, 194, 133, 0.693);
  border-color: rgba(64, 194, 133, 0.693);
  border-left: 0;
`;

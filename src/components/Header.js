import React from "react";
import styled from "styled-components";
import {
  AccountCircle,
  History,
  Search,
  HelpOutline,
} from "@material-ui/icons";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HistoryIcon />
      </HeaderLeft>
      <HeaderCenter>
        <input placeholder="Search" />
        <Search />
      </HeaderCenter>
      <HeaderRight>
        <HelpOutline />
        <AvatarIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  background-color: var(--converse-color);
`;

const HeaderLeft = styled.div`
  flex: 0.2;
  color: white;
  display: flex;
`;

const HeaderCenter = styled.div`
  flex: 0.5;
  display: flex;
  background-color: #421f44;
  text-align: center;
  color: gray;

  > input {
    background-color: transparent;
    border: none;
    min-width: 30vw;
    outline: 0;
    color: white;
    margin-left: 15px;
  }

  > .MuiSvgIcon-root {
    cursor: pointer;
    margin-left: auto;
    margin-right: 8px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  color: white;
  margin-left: 16px;

  > .MuiSvgIcon-root {
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`;

const HistoryIcon = styled(History)`
  margin-left: auto;
  margin-right: 16px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const AvatarIcon = styled(AccountCircle)`
  margin-left: auto;
  margin-right: 20px;
`;

export default Header;

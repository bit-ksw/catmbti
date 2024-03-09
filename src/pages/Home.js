import React from "react";
import styled from "styled-components";
import PaneImage from "../assets/a.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Contents>
        <Header>헤더입니다.</Header>
        <Title></Title>
        <LogoImage>
          <img
            src={PaneImage}
            className="rounded-circle"
            width={200}
            height={200}
            alt="aa"
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 잘맞는 고양이 찾기!!</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

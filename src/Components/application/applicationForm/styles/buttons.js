import styled from "styled-components";
import { Flex, FlexCenter, Btn, Circle } from "./stepper";

export const BtnContainer = styled(Flex)`
  margin: 3% 3% 0 0;
  width: 100%;
  justify-content: flex-end;
`;

export const BackBtn = styled(Btn)`
  color: #757575;
  background: #fff;
  width: 5rem;
`;

export const NextBtn = styled(Btn)`
  color: #fff;
  background: ${({ theme: { palette } }) => palette.primary.main};
  width: 10rem;
  text-transform: uppercase;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
`;

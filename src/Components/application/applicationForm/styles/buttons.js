import styled from "styled-components";
import { Flex, FlexCenter, Btn, Circle } from "./stepper";

export const BtnContainer = styled(Flex)`
  margin-top: 80px;
  width: 100%;
  justify-content: flex-end;
`;

export const BackBtn = styled(Btn)`
  color: #757575;
  background: #fff;
  width: 8rem;
`;

export const NextBtn = styled(Btn)`
  color: #fff;
  background: ${({ theme: { palette } }) => palette.primary.main};
  width: 14rem;
  text-transform: uppercase;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
`;

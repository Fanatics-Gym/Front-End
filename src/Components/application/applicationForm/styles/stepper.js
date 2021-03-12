import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Btn = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1.8rem;
  height: 5.6rem;

  &:hover {
    cursor: pointer;
  }
`;
export const FlexCenter = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const Stepper = styled(FlexCenter)`
  width: 100%;
  margin: 50px 0;
`;

export const Circle = styled(FlexCenter)`
  border-radius: 100%;
`;

export const StepLabel = styled(Circle)`
  height: 2.6rem;
  width: 2.5rem;
  background: ${(props) =>
    props.active
      ? ({ theme: { palette } }) => palette.secondary.main
      : "#a1a1a1"};
  color: #fff;
  font-size: 1.6rem;
  margin-right: 8px;
`;

export const StepTitle = styled.div`
  color: ${(props) =>
    props.active
      ? ({ theme: { palette } }) => palette.secondary.main
      : "#a1a1a1"};
  font-size: 1rem;
`;

export const StepConnector = styled.div`
  width: 30px;
  border-bottom: ${(props) =>
    props.active
      ? ({ theme: { palette } }) => `1px solid ${palette.secondary.main}`
      : "1px solid #a1a1a1"};
  margin: 0 8px;
`;

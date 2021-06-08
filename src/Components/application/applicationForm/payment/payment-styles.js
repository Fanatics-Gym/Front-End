import styled from "styled-components";

export const PaymentCont = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
`;

export const InputCont = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const MultInputCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Select = styled.select`
  height: 2.3rem;
  font-size: 1.6rem;
  background: #f9f9f9;
  border: none;
  border-bottom: 1px solid #a1a1a1;
  padding: 10px;
  width: 100%;

  ::placeholder {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  height: 2.3rem;
  font-size: 1.6rem;
  background: #f9f9f9;
  border: none;
  border-bottom: 1px solid #a1a1a1;
  padding: 10px;
  width: 100%;

  ::placeholder {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  margin: 0 auto 15px auto;
`;

export const Button = styled.button`
  width: 250px;
  margin: auto;
`;
// export const CardNumber = styled.CardNumberElement``;

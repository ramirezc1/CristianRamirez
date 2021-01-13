import styled from 'styled-components';

const LoadingSpinner = styled.div`
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border: solid 2px transparent;
  border-top-color: currentColor;
  border-left-color: currentColor;
  border-radius: 50%;
  animation: ___CSS_0___ 400ms linear infinite;
`;
export default LoadingSpinner;

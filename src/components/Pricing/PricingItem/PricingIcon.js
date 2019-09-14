import styled from 'styled-components';

const PricingIcon = styled.i`
  :before {
    content: url(${props => props.icon});
  }
  height: 174px;
`;

export default PricingIcon;

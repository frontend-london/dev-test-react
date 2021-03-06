
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.button`
  font-size: ${props => props.theme.fontSize.normal};
  font-family: ${props => props.theme.baseFontFamily};
  font-weight: ${props => props.theme.baseFontWeight};
  line-height: ${props => props.theme.fontSize.normal};
  color: ${props => props.theme.color.baseFont};
  padding: ${style('paddingSmall')};
  margin-right: ${props => props.theme.marginHalf}
`;

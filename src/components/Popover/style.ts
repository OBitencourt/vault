import styled from "styled-components";
import { motion } from "framer-motion";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled(motion.div)`
  position: absolute;
  bottom: 125%;
  left: -10%;
  transform: translateX(-20%);
  background: var(--color-primary);
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  font-family: var(--font-krub);

`;

export const TooltipTrigger = styled.div`
  cursor: pointer;

  &:hover + ${TooltipContent} {
    opacity: 1;
    visibility: visible;
  }
`;


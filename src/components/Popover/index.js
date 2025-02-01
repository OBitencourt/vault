import { TooltipWrapper, TooltipContent, TooltipTrigger } from './style'
import { useState } from 'react';

const Popover = ({ children, description }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <TooltipWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TooltipTrigger>{children}</TooltipTrigger>
        {isHovered && (
          <TooltipContent
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </TooltipContent>
        )}
      </TooltipWrapper>
    );
  };
  
export default Popover;
  
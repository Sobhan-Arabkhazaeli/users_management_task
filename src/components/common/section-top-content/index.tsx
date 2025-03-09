import { Box } from '@mui/material';  
import { styled } from '@mui/system';  
import IChildren from "../../../core/types/common/children.interface";  
import TFCChildren from "../../../core/types/props/fc-children.type";  

export interface IPropsSearch {  
  children: IChildren;  
}  

const StyledBox = styled(Box)(({ theme }) => ({  
  padding: theme.spacing(3),
  backgroundColor: theme.palette.menu.main,  
  display: 'flex',  
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'center', 
}));  

const SectionTop_Content: TFCChildren = ({ children }) => {  
  return (  
    <StyledBox>  
      {children}  
    </StyledBox>  
  );  
};  

export default SectionTop_Content;  

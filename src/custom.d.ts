import '@mui/material/styles';  

declare module '@mui/material/styles' {  
  interface Palette {  
    zincLight: Palette['primary'];
    menu: Palette['primary'];  
    bgCard: Palette['primary'];  
    whiteGraylish: Palette['primary'];  
    purple: Palette['primary'];  
  }  

  interface PaletteOptions {  
    zincLight?: {  
      main: string;  
    };  
    menu?: {  
      main: string;  
    };  
    bgCard?: {  
      main: string;  
    };  
    whiteGraylish?: {  
      main: string;  
    };  
     purple?: {  
      main: string;  
    };  
  }  
}  
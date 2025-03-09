import { useDispatch, useSelector } from "react-redux";
import TFCChildren from "../../../../core/types/props/fc-children.type";
import { toggleSidebar, TThemeSelector } from "../../../../redux/slices/menu";
import { Box, Drawer} from "@mui/material";

const Handler: TFCChildren = ({ children }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector<TThemeSelector, boolean>((state) => state.sideBarMenu.sideBar);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: sidebar ? 'block' : 'none', 
      }}
      onClick={() => dispatch(toggleSidebar(false))}
    >
      <Drawer
        variant="temporary"
        anchor="left"
        open={sidebar}
        onClose={() => dispatch(toggleSidebar(false))}
        sx={{
          width: sidebar ? 192 : 0,
          paddingLeft: sidebar ? 4 : 0, 
          paddingRight: sidebar ? 4 : 0,
          transition: 'width 0.3s, padding 0.3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: 'menu.main',
          '& .MuiDrawer-paper': {
            width: sidebar ? 192 : 0,
            paddingLeft: sidebar ? 4 : 0,
            paddingRight: sidebar ? 4 : 0,
            transition: 'width 0.3s, padding 0.3s',
          },
        }}
      >
        {children}
      </Drawer>
    </Box>
  );
};

export default Handler;

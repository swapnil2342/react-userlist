import "./RightMenu.css";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export default function RightMenu(props) {
  const { selectedTab } = props;
  return (
    <>
      <Paper sx={{ width: 230 }} className="right-menu">
        <MenuList>
          <MenuItem selected={"profile" === selectedTab}>
            <Typography variant="inherit">Profile</Typography>
          </MenuItem>
          <MenuItem selected={"post" === selectedTab}>
            <Typography variant="inherit">Post</Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </>
  );
}

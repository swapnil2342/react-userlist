import "./UserList.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UserList(props) {
  const {
    userList,
    getSelectedUser,
    setOpenPost,
    setOpenProfile,
    setSelectedTab,
    setUserID,
  } = props;
  return (
    <TableContainer className="table-hgt" component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="title">Name</TableCell>
            <TableCell align="right" className="title">
              Username
            </TableCell>
            <TableCell align="right" className="title">
              Email
            </TableCell>
            <TableCell align="right" className="title">
              Phone
            </TableCell>
            <TableCell align="right" className="title">
              Website
            </TableCell>
            <TableCell align="right" className="title"></TableCell>
            <TableCell align="right" className="title"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user, index) => (
            <TableRow
              key={user.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="user">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.website}</TableCell>
              <TableCell
                align="right"
                onClick={() => {
                  getSelectedUser(index);
                }}
              >
                <span
                  className="link"
                  onClick={() => {
                    setOpenProfile(true);
                    setSelectedTab("profile");
                  }}
                >
                  View Profile
                </span>
              </TableCell>
              <TableCell
                align="right"
                onClick={() => {
                  setUserID(user.id);
                  setOpenPost(true);
                  setSelectedTab("post");
                }}
              >
                <span className="link">View Post</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

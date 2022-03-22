import "./App.css";
import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { createPortal } from "react-dom";
import Profile from "./Profile/profile";
import Post from "./Post/post";
import UserList from "./UserList/UserList";
import RightMenu from "./RightMenu/RightMenu";

function App() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({});
  const [userID, setUserID] = useState("");
  const [openProfile, setOpenProfile] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  let rows = [];
  const headNode = contentRef?.contentWindow?.document?.head;

  useEffect(() => {
    if (headNode) {
      headNode.innerHTML = document?.head?.innerHTML;
    }
  }, [headNode]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        result.map((obj) => {
          rows.push(obj);
        });
        setUserList(rows);
      });
  }, []);

  const getSelectedUser = (userID) => {
    setUser(userList[userID]);
  };

  return (
    <>
      <div className="App">
        <iframe width={"100%"} ref={setContentRef}>
          {mountNode &&
            headNode &&
            createPortal(
              <UserList
                userList={userList}
                getSelectedUser={getSelectedUser}
                setOpenPost={setOpenPost}
                setOpenProfile={setOpenProfile}
                setSelectedTab={setSelectedTab}
                setUser={setUser}
                setUserID={setUserID}
              />,
              mountNode
            )}
        </iframe>

        <RightMenu selectedTab={selectedTab} />
      </div>
      {user && (
        <Drawer
          anchor={"right"}
          open={openProfile}
          onClose={() => {
            setOpenProfile(false);
            setSelectedTab("");
          }}
        >
          <Profile user={user} />
        </Drawer>
      )}
      {userID && (
        <Drawer
          anchor={"right"}
          open={openPost}
          onClose={() => {
            setOpenPost(false);
            setSelectedTab("");
          }}
        >
          <Post userID={userID} userList={userList} />
        </Drawer>
      )}
    </>
  );
}

export default App;

import "./profile.css";
function Profile(props) {
  const { user } = props;
  let address = "";
  let initial = "";
  if (user.address) {
    address =
      user.address.street +
      "," +
      user.address.suite +
      "," +
      user.address.city +
      "," +
      user.address.zipcode;
  }
  if (user.name) {
    const name = user.name.split(" ");
    const firstInitial = name[0].split("")[0];
    const lastInitial = name[1].split("")[0];
    initial = firstInitial + lastInitial;
  }
  return (
    <div className="profile">
      <div className="profile-title">Profile</div>
      <div className="info">
        <div className="initial">{initial}</div>
        <div className="name">{user.name}</div>
        <div className="username">{user.username}</div>
      </div>
      <div>
        <div className="info-container">
          <div className="input-label">
            Email <span style={{ color: "red" }}>*</span>
          </div>
          <input
            className="text"
            type="text"
            id="email"
            name="email"
            value={user.email}
          />
        </div>
        <div className="info-container">
          <div className="input-label">Address</div>
          <input
            className="text"
            type="text"
            id="address"
            name="address"
            value={address}
          />
        </div>
        <div className="info-container">
          <div className="input-label">Phone</div>
          <input
            className="text"
            type="text"
            id="phone"
            name="phone"
            value={user.phone}
          />
        </div>
        <div className="info-container">
          <div className="input-label">Website</div>
          <input
            className="text"
            type="text"
            id="website"
            name="website"
            value={user.website}
          />
        </div>
        <div className="info-container">
          <div className="input-label">Company name</div>
          <input
            className="text"
            type="text"
            id="company"
            name="company"
            value={user.company && user.company.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;

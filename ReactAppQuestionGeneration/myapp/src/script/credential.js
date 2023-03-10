const SavaUserData = (userData) => {
  sessionStorage.clear();
  sessionStorage.setItem(userData.id, JSON.stringify(userData));
  return userData.id;
};

const IsLoggedIn = () => {
  var id = sessionStorage.key(0);
  return id;
};

const Logout = (user_id) => {
  sessionStorage.removeItem(user_id);
};

export default { SavaUserData, IsLoggedIn, Logout };

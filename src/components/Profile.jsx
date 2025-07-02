import user from "/user-image.png";
const Profile = () => {
  return (
    <div className="fixed mt-[90px]">
      <img src={user} className="h-screen object-cover w-screen" />
    </div>
  );
};

export default Profile;

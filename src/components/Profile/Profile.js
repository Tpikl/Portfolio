import Network from "../Network/Network";

import ProfileStyled from "./Profile.styled";

const Profile = () => {
  return (
    <ProfileStyled>
      <img src='profile.png' alt='Profile.'></img>

      <div className='name'>Tayler Nichols</div>

      <div className='subtitle'>
        <span>[Software Engineer]</span>
        <span>[Web Developer]</span>
        <span>[Coder]</span>
      </div>

      <Network />
    </ProfileStyled>
  );
};
export default Profile;

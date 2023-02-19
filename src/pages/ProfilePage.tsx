import AuthLayout from "@^/modules/AuthLayout";
import UserProfile from "@^/modules/UserProfile";

const ProfilePage: React.FC = () => {
  return (
    <AuthLayout>
      <UserProfile />
    </AuthLayout>
  );
};

export default ProfilePage;

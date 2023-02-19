import AuthLayout from "@^/modules/AuthLayout";
import LoginForm from "@^/modules/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <AuthLayout shouldRedirectWhenAuthorized>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;

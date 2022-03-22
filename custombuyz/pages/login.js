import LoginForm from './../components/LoginForm/index';

const Login = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex justify-center flex-col items-center">
        <LoginForm />
      </div>
      <div className="bg-black hidden lg:block">

      </div>
    </div>
  )
}

export default Login;
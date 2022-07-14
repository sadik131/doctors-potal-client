import About from "../About";
import Appo from "../Dashbord/Appo";
import Dashbord from "../Dashbord/Dashbord";
import Home from "../Home/Home";
import User from "../Dashbord/User";
import Login from "../Login/Login";
import SingIn from "../Login/SingIn";

const publicRoute = [
    {path:"/" , Componemt: Home},
    {path:"/About" , Componemt: About},
    {path:"/Login" , Componemt: Login},
    {path:"/SingIn" , Componemt: SingIn},
    // {path:"/Dashbord" , Componemt: Dashbord},
    // {path:"/Appo" , Componemt: Appo},
    // {path:"/User" , Componemt: User},
  ]
  export default publicRoute;
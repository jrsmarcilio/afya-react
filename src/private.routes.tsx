import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const privateRoutes: any = ({ component: Component, path: Path, ...rest }: any) => {
  const isToken: string | null = localStorage.getItem("@tokenAfyaApp");

  const isSessionActive: any = () => {
    if (!isToken) return false

    const onlyToken: any = isToken?.split(" ")[1];
    const tokenPayLoad: any = jwt.decode(onlyToken);

    const expSeconds = tokenPayLoad.exp;
    const timeNow = Date.now() / 1000;

    return timeNow > expSeconds ? false : true;
  }

  return (
    <Route {...rest} render={props => (
      isSessionActive() ? <Component {...props} /> : <Redirect to="/login" />
    )} />
  );
}

export default privateRoutes;
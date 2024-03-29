import { Navigate, useLocation } from "react-router-dom";
import { FC, ReactElement } from "react";
import { User, useSelector } from "../../utils/types";

type TProtectedProps = {
  onlyUnAuth?: boolean;
  afterForgot?: boolean;
  component: ReactElement;
}

const Protected: FC<TProtectedProps> = ({ onlyUnAuth = false, afterForgot = false, component }) => {
  const isAuthChecked: boolean = useSelector((store) => store.user.isAuthChecked);
  const location = useLocation();
  const user: User | null = useSelector((store) => store.user.user);

  if (!isAuthChecked) {
    // попозже лоадер сюда добавим
    return null;
  }
  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (onlyUnAuth && afterForgot) {
    return <Navigate to='/forgot-password' state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;

export const OnlyUnAuth: FC<{ component: ReactElement }> = ({ component }) => (
  <Protected onlyUnAuth={true} component={component} />
);
export const OnlyForgot: FC<{ component: ReactElement }> = ({ component }) => (
  <Protected onlyUnAuth={true} afterForgot={true} component={component} />
);
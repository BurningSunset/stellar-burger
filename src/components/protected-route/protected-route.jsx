import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Protected = ({ onlyUnAuth = false, afterForgot = false, component }) => {
  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
  const location = useLocation();
  const user = useSelector((store) => store.user.user);
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

Protected.propTypes = {
  onlyUnAuth: PropTypes.bool,
  afterForgot: PropTypes.bool,
  component: PropTypes.element.isRequired
}

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }) => (
  <Protected onlyUnAuth={true} component={component} />
);
export const OnlyForgot = ({ component }) => (
  <Protected onlyUnAuth={true} afterForgot={true} component={component} />
);
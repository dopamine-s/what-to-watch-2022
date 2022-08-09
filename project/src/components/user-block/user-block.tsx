import { useNavigate, Link } from 'react-router-dom';
import { FormEvent } from 'react';
import { AppRoute } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../constants';
import { logoutAction } from '../../store/api-actions';

export default function UserBlock(): JSX.Element{
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const logoutHandler = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
    navigate(AppRoute.Main);
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div
            className="user-block__avatar"
            onClick={() => navigate(AppRoute.MyList)}
          >
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </li>
        <li className="user-block__item">
          <div
            className="user-block__link"
            onClick={logoutHandler}
          >
            Sign out
          </div>
        </li>
      </ul>
    );
  }

  return (
    <div className="user-block">
      <Link
        className="user-block__link"
        to={`${AppRoute.SignIn}`}
      >
        Sign in
      </Link>
    </div>
  );
}

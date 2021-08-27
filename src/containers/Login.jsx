import React from 'react';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginEmailPassword, loginGoogle } from '../actions/loginAction';

const Login = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
  };

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <>
      <div className='mt-5 container'>
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleLogin}>
          <div className='mb-3'>
            <label for='exampleInputEmail1' className='form-label'>
              Correo electrónico
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Correo electrónico'
              name='email'
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-3'>
            <label for='exampleInputPassword1' className='form-label'>
              Contraseña
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Contraseña'
              name='password'
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Iniciar sesión
          </button>
          <div className='container auth__social-networks d-flex justify-content-center mt-3'>
            <div
              className='container google-btn d-flex justify-content-center'
              onClick={handleLoginGoogle}
            >
              <div className='container google-icon-wrapper d-flex justify-content-center'>
                <img
                  style={{ cursor: 'pointer' }}
                  className='google-icon'
                  src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                  alt='googlebutton'
                />
              </div>
            </div>
          </div>
          <div className='mt-3 d-flex justify-content-center'>
            <span>¿No estás registrado?</span>
            <Link className='text-dark' to='/auth/register'>
              Registrarse
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

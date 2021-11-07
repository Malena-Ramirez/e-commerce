import React from 'react';
// import { registroEmailPasswordName } from '../action/action';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';
import { registerEmailPasswordName } from '../actions/loginAction';

const Register = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerEmailPasswordName(email, password, name));
  };

  return (
    <div className='container mt-5'>
      <div className='card d-flex justify-content-center align-center'>
        <div className='container mt-4 p-3'>
          <h2>Regístrate</h2>
          <form onSubmit={handleRegister}>
            <div className='mb-3'>
              <label for='exampleInputName1' className='form-label'>
                Nombre
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleInputName1'
                aria-describedby='nameHelp'
                placeholder='Nombre'
                name='name'
                value={name}
                onChange={handleInputChange}
              />
            </div>
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
            <div className='mb-3'>
              <label for='exampleInputPassword1' className='form-label'>
                Confirmar contraseña
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Confirmar contraseña'
                name='password2'
                value={password2}
                onChange={handleInputChange}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Registrarse
            </button>
            <div className='mt-3 d-flex justify-content-center'>
              <span>¿Ya tienes una cuenta? </span>
              <Link className='text-dark' to='/auth/login'>
                Inicia sesión.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

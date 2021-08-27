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
    console.log(name, password, password2);
    dispatch(registerEmailPasswordName(email, password, name));
  };

  return (
    <div className='container mt-5'>
      <div className='card d-flex justify-content-center align-center'>
        <div className='container mt-4 p-3'>
          <h2>Regístrate</h2>
          <form onSubmit={handleRegister}>
            <div className='mb-3'>
              <label for='name' className='form-label'>
                Nombre
              </label>
              <input
                id='name'
                classname='form-control'
                type='name'
                placeholder='Nombre'
                name='name'
                value={name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label for='email' className='form-label'>
                Correo electrónico
              </label>
              <input
                id='email'
                classname='form-control'
                type='email'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label for='password' className='form-label'>
                Contraseña
              </label>
              <input
                id='password'
                classname='form-control'
                type='password'
                placeholder='Contraseña'
                name='password'
                value={password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label for='password2' className='form-label'>
                Confirmar Contraseña
              </label>
              <input
                id='password2'
                classname='form-control'
                type='password'
                placeholder='Confirmar contraseña'
                name='password2'
                value={password2}
                onChange={handleInputChange}
                required
              />
            </div>
            <button variant='primary' type='submit'>
              Enviar
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

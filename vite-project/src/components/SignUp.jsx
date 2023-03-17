import { useFormik } from 'formik';
import validationSchema from './Validations.jsx';

function SignUp() {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input
          placeholder='İsim'
          name='name'
          value={values.name}
          onChange={handleChange}
        />
        
      </div>
      <div>
        <input
          placeholder='E-mail'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder='Parola'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          placeholder='Parola Tekrarı'
          name='passwordConfirm'
          value={values.passwordConfirm}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type='submit'>Kayıt Ol</button>
      </div>
    </form>
  );
}

export default SignUp;
import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('Correo electrónico requerido'),
  password: Yup.string()
    .required('Contraseña requerida')
    .min(5, 'La contraseña debe tener al menos 5 caracteres')
    .max(15, 'La contraseña debe tener menos de 15 caracteres')
})

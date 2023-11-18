import * as Yup from 'yup'

export const docentSchema = Yup.object().shape({
  firstName: Yup.string().required('Nombre(s) requerido(s)'),
  lastName: Yup.string().required('Apellido(s) requerido(s)'),
  idType: Yup.string().required('Tipo de identificación requerido'),
  id: Yup.string().required('Número de identificación requerido'),
  docentType: Yup.string().required('Tipo de docente requerido'),
  password: Yup.string().required('Contraseña requerida'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('Correo electrónico requerido'),
  title: Yup.string().required('Último título académico requerido'),
  role: Yup.string().required('Rol requerido')
  // labour: Yup.string().required('Labor requerida')
})

import * as Yup from 'yup'

export const docentSchema = Yup.object().shape({
  identification: Yup.string()
    .required('El numero de identificación es obligatorio')
    .min(5, 'La identificación debe tener al menos 5 caracteres')
    .max(11, 'La identificación debe tener como máximo 11 caracteres'),
  email: Yup.string()
    .required('El email es obligatorio')
    .email('No es un correo electrónico válido'),
  docentType: Yup.string()
    .required('El tipo de docente es obligatorio')
    .oneOf(
      ['Tiempo Completo', 'Planta', 'Cátedra'],
      'El tipo de docente no es válido'
    ),
  idType: Yup.string()
    .required('El tipo de ID es obligatorio')
    .min(2, 'El tipo de ID debe tener al menos 2 caracteres')
    .max(10, 'El tipo de ID debe tener como máximo 10 caracteres'),
  title: Yup.string().required('El título es obligatorio'),
  firstName: Yup.string()
    .required('El nombre es obligatorio')
    .min(1, 'El nombre debe tener al menos 1 caracter')
    .max(50, 'El nombre debe tener como máximo 50 caracteres'),
  lastName: Yup.string()
    .required('El apellido es obligatorio')
    .min(3, 'El apellido debe tener al menos 3 caracteres')
    .max(50, 'El apellido debe tener como máximo 50 caracteres'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(5, 'La contraseña debe tener al menos 5 caracteres')
    .max(15, 'La contraseña debe tener como máximo 15 caracteres')
})

export const updateDocentSchema = Yup.object().shape({
  identification: Yup.string()
    .required('El numero de identificación es obligatorio')
    .min(5, 'La identificación debe tener al menos 5 caracteres')
    .max(11, 'La identificación debe tener como máximo 11 caracteres'),
  email: Yup.string()
    .required('El email es obligatorio')
    .email('No es un correo electrónico válido'),
  docentType: Yup.string()
    .required('El tipo de docente es obligatorio')
    .oneOf(
      ['Tiempo Completo', 'Planta', 'Cátedra'],
      'El tipo de docente no es válido'
    ),
  idType: Yup.string()
    .required('El tipo de ID es obligatorio')
    .min(2, 'El tipo de ID debe tener al menos 2 caracteres')
    .max(10, 'El tipo de ID debe tener como máximo 10 caracteres'),
  title: Yup.string().required('El título es obligatorio'),
  firstName: Yup.string()
    .required('El nombre es obligatorio')
    .min(1, 'El nombre debe tener al menos 1 caracter')
    .max(50, 'El nombre debe tener como máximo 50 caracteres'),
  lastName: Yup.string()
    .required('El apellido es obligatorio')
    .min(3, 'El apellido debe tener al menos 3 caracteres')
    .max(50, 'El apellido debe tener como máximo 50 caracteres')
})

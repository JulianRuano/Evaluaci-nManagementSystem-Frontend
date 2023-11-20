import * as Yup from 'yup'

export const periodSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(50, 'El nombre no puede tener más de 50 caracteres'),
  year: Yup.string()
    .min(3, 'El año debe tener al menos 3 caracteres')
    .max(5, 'El año no puede tener más de 5 caracteres'),
  semester: Yup.number()
    .integer('El semestre debe ser un número entero')
    .min(1, 'El semestre debe ser al menos 1')
    .max(2, 'El semestre no puede ser mayor que 2'),
  startDate: Yup.string()
    .min(3, 'La fecha de inicio debe tener al menos 3 caracteres')
    .max(15, 'La fecha de inicio no puede tener más de 15 caracteres'),
  endDate: Yup.string()
    .min(3, 'La fecha de finalización debe tener al menos 3 caracteres')
    .max(15, 'La fecha de finalización no puede tener más de 15 caracteres')
})

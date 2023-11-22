import * as Yup from 'yup'
export const labourSchema = Yup.object().shape({
  isActive: Yup.boolean().required('El estado es obligatorio'),
  nameWork: Yup.string().required('El nombre de la labor es obligatorio'),
  labourType: Yup.object().shape({
    idLabourType: Yup.number().integer().min(1).max(10),
    code: Yup.string(),
    description: Yup.string()
      .notOneOf([''], 'La descripción no puede estar vacía')
      .required('La descripción es obligatoria')
  }),
  assignedHours: Yup.number()
    .integer()
    .min(2, 'El número de horas asignadas no puede ser menor a 2')
    .max(18, 'El número de horas asignadas no puede ser mayor a 18')
    .required('Las horas asignadas son obligatorias')
})

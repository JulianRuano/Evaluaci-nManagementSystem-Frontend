import * as Yup from 'yup'
export const labourSchema = Yup.object().shape({
  isActive: Yup.boolean().required('El estado es obligatorio'),
  labourType: Yup.object().shape({
    idLabourType: Yup.number().integer().min(1).max(10),
    code: Yup.string(),
    description: Yup.string().required('La descripción es obligatoria')
  }),
  assignedHours: Yup.number()
    .integer()
    .min(1)
    .max(100)
    .required('Las horas asignadas son obligatorias')
})

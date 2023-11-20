import * as Yup from 'yup'
export const labourUpdateSchema = Yup.object().shape({
  isActive: Yup.boolean(),
  labourType: Yup.object().shape({
    idLabourType: Yup.number().integer().min(1).max(10),
    code: Yup.string(),
    description: Yup.string()
  }),
  assignedHours: Yup.number().integer().min(1).max(100)
})

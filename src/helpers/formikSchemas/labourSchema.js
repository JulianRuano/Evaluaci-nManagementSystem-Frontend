import * as Yup from 'yup'
export const labourSchema = Yup.object().shape({
  isActive: Yup.boolean(),
  labourType: Yup.object().shape({
    idLabourType: Yup.number().integer().min(1).max(14),
    code: Yup.string(),
    description: Yup.string()
  }),
  assignedHours: Yup.number().integer().min(1).max(100)
})

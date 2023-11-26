import * as Yup from 'yup'

export const autoEvaluationSchema = Yup.object().shape({
  periodName: Yup.string().required('El periodo es obligatorio'),
  act: Yup.boolean().required('El acto es obligatorio'),
  labourName: Yup.string().required('La labor es obligatoria')
})

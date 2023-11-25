import * as Yup from 'yup'

export const autoEvaluationSchema = Yup.object().shape({
  period: Yup.object().shape({
    name: Yup.string().required('El nombre del periodo es obligatorio'),
    startDate: Yup.date().required('La fecha de inicio es obligatoria'),
    endDate: Yup.date().required('La fecha de fin es obligatoria'),
    year: Yup.number().required('El año es obligatorio'),
    semester: Yup.number().required('El semestre es obligatorio')
  }),
  evaluator: Yup.string().required('El evaluador es obligatorio'),
  act: Yup.boolean().required('El acto es obligatorio')
})

const getValidLaboursDocentType = (labours, docentType) => {
  const docentTypeHours = {
    Cátedra: {
      max: 12,
      min: 2
    },
    Planta: {
      max: 8,
      min: 4
    },
    'Tiempo Completo': {
      max: 16,
      min: 6
    },
    Otro: {
      max: 18,
      min: 2
    }
  }
  const requirements = docentTypeHours[docentType]
  return labours.filter(
    (labour) =>
      labour.assignedHours <= requirements.max &&
      labour.assignedHours >= requirements.min
  )
}

export default getValidLaboursDocentType

import React, { useState, useEffect } from 'react'
import { useGetAutoEvaluations } from '../hooks/queries/useGetAutoEvaluation'

import ReportTable from './tables/ReportTable'
import GraphicReport from './tables/GraphicReport'
import { Skeleton } from 'antd'

const Reports = () => {
  const [selectedYear, setSelectedYear] = useState('2023')
  const [selectedSemester, setSelectedSemester] = useState(1)
  const [searchText, setSearchText] = useState('')
  const { data, isLoading, isError, refetch } = useGetAutoEvaluations(
    selectedYear,
    selectedSemester
  )

  useEffect(() => {
    refetch(selectedYear, selectedSemester)
  }, [selectedYear, selectedSemester, refetch])

  const handleYearChange = (value) => {
    setSelectedYear(value)
  }

  const handleSemesterChange = (value) => {
    setSelectedSemester(value)
  }

  const handleSearch = () => {}

  const handleSearchTextChange = (value) => {
    setSearchText(value)
  }

  if (isLoading)
    return (
      <div className="px-5 py-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>
            <Skeleton active />
            <br />
          </div>
        ))}
      </div>
    )

  if (isError) return <p>Ha ocurrido un error</p>

  return (
    <div>
      <div className="pt-6 text-center">
        <div className="flex justify-between px-2 mb-2">
          <h1 className="font-semibold pt-1 md:pl-12 text-2xl text-stone-700">
            Reportes
          </h1>
        </div>
        <div>
          <label htmlFor="year">Año:</label>
          <select
            id="year"
            name="year"
            value={selectedYear}
            onChange={(e) => handleYearChange(e.target.value)}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
          <label htmlFor="semester">Semestre:</label>
          <select
            id="semester"
            name="semester"
            value={selectedSemester}
            onChange={(e) => handleSemesterChange(parseInt(e.target.value))}
          >
            <option value={1}>Semestre 1</option>
            <option value={2}>Semestre 2</option>
          </select>
        </div>
        <ReportTable
          autoEvaluations={data}
          searchText={searchText}
          handleSearch={handleSearch}
          handleSearchTextChange={handleSearchTextChange}
        />
      </div>
      <div>
        <GraphicReport autoEvaluations={data} />
      </div>
    </div>
  )
}

export default Reports

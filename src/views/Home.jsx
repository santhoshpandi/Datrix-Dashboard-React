import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow className='dark:bg-slate-800 dark:text-white duration-150 flex 
     flex-wrap justify-evenly py-5 gap-3 px-4 items-center' >
      <CCol xs={12}></CCol>
      <CCol xs={6} className='flex-grow md:w-[40%] rounded-md  duration-150 shadow-md hover:scale-[102%]  cursor-pointer dark:text-white pt-2' >
        <CCard className="">
          <CCardHeader className=' px-3 py-2 rounded-t-md bg-green-600 text-white text-xl'>
            Bar Chart 
          </CCardHeader>
          <CCardBody className='px-3 duration-150'>
            <CChartBar             
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6} className='flex-grow md:w-[40%] rounded-md  duration-150 shadow-md hover:scale-[102%]  cursor-pointer dark:text-white pt-2'>
        <CCard className="mb-4">
          <CCardHeader className=' px-3 py-2 rounded-t-md bg-green-600 text-white text-xl'>
            Line Chart
          </CCardHeader>
          <CCardBody className='px-3'>
            <CChartLine
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    Color: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    Color: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6} className='flex-grow md:w-[40%] rounded-md  duration-150 shadow-md hover:scale-[102%]  cursor-pointer dark:text-white pt-2'>
        <CCard className="mb-4">
          <CCardHeader className=' px-3 py-2 rounded-t-md bg-green-600 text-white text-xl'>
            Doughnut Chart 
          </CCardHeader>
          <CCardBody className='px-3'>
            <CChartDoughnut
              data={{
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6} className='flex-grow md:w-[40%] rounded-md  duration-150 shadow-md hover:scale-[102%]  cursor-pointer dark:text-white pt-2'>
        <CCard className="mb-4">
          <CCardHeader className=' px-3 py-2 rounded-t-md bg-green-600 text-white text-xl'>
            Pie Chart
          </CCardHeader>
          <CCardBody className='px-3'>
            <CChartPie
              data={{
                labels: ['Red', 'Green', 'Yellow'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6} className='flex-grow md:w-[40%] rounded-md  duration-150 shadow-md hover:scale-[102%]  cursor-pointer dark:text-white pt-2'>
        <CCard className="mb-4">
          <CCardHeader className=' px-3 py-2 rounded-t-md bg-green-600 text-white text-xl'>
            Polar Area Chart
           
          </CCardHeader>
          <CCardBody className='px-3'>
            <CChartPolarArea
              data={{
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                datasets: [
                  {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6} className='flex-grow md:w-[40%] rounded-md  duration-150 shadow-md hover:scale-[102%]  cursor-pointer dark:text-white pt-2'>
        <CCard >
          <CCardHeader className=' px-3 py-2 rounded-t-md bg-green-600 text-white text-xl'>
            Radar Chart 
          </CCardHeader>
          <CCardBody className='px-3'>
            <CChartRadar
              data={{
                labels: [
                  'Eating',
                  'Drinking',
                  'Sleeping',
                  'Designing',
                  'Coding',
                  'Cycling',
                  'Running',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    Color: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [65, 59, 90, 81, 56, 55, 40],
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    Color: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [28, 48, 40, 19, 96, 27, 100],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Charts

import './App.css'
import Error404 from './components/Error404'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import { Outlet, Routes, Route } from 'react-router'
import route from './routes'
import { useSlide } from './contexts/SlideContext'

function Layout() {

  const { slide } = useSlide()
  return (
    <>
      <div className={` dark:shadow-md dark:shadow-slate-500 duration-150
        ${slide ? 'md:w-0 border-none w-[300px]' : 'w-0 md:w-[300px]'} 
         md:block  overflow-y-scroll no-scrollbar side-bar`}>
        <SideBar />
      </div>
      <div className='basis-[75%] flex-grow overflow-y-scroll no-scrollbar relative'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

function App() {

  return (
    <div className='flex h-screen relative'>

      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route element={<Layout />} >

          {/* The below statement will render all the components
          Like this...
          <Route path='/path'  element={<Component1 />} /> 
          <Route path='/path/next'  element={<Component2 />} /> */}
          {
            route.map((route,index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))
          }
        </Route>
      </Routes>


    </div>
  )
}

export default App

import Trending from './views/Trending'
import Plan from './views/Plan'
import Charts from './views/Home'
import Layout from './views/Layout'

const route = [
  {
    path:'/', element: Charts, name:'Home'
  },
  {
    path:'/trend', element: Trending, name:'Trend'
  },
  {
    path:'/layout', element: Layout, name:'Layout'
  },
  {
    path:'/layout/computer', element: Layout, name:'Computer'
  },
  {
    path:'/layout/laptop', element: Layout, name:'Laptop'
  },
  {
    path:'/layout/tablet', element: Layout, name:'Tablet'
  },
  {
    path:'/layout/mobile', element: Layout, name:'Mobile'
  },
  {
    path:'/plan', element: Plan, name:'Plan'
  }, 
  {
    path:'/plan#basic', element: Plan, name:'Basic'
  }, 
  {
    path:'/api-reference', element: Trending, name:'API Reference'
  },
]

export default route
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import {fetchChannelAPI} from '@/apis/list.ts'

fetchChannelAPI().then(res=>{
    console.log(res.data)
})

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>,
)

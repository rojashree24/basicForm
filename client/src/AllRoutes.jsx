import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default AllRoutes

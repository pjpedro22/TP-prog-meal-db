import React from 'react'
import { useState } from 'react'
import MealCategory from './mealCategory/components/MealCategory'
import Category from './category/components/Category'
import Meal from './meal/components/Meal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<MealCategory />} />
        <Route path='categories/:name' element={<Category />} />
        <Route path='/meals/:id' element={<Meal />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App

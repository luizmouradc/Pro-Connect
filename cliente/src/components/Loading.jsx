import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-t-lightseagreen border-gray-200 rounded-full animate-spin" role="status" aria-label="Loading"></div>
    </div>
  )
}

export default Loading

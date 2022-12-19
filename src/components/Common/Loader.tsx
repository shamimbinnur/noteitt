import React from 'react'

const Loader = () => {
  return (
    <div className="bg-gradient-to-br from-PURPLE100 via-PURPLE50 to-CYAN100 h-screen">
      <div className="bg-gray-900 h-full bg-opacity-50">
        <div className="flex h-full justify-center items-center">
          <div className="animate-spin-fast w-24 h-24 rounded-xl bg-gradient-to-br from-PURPLE100 via-gray-100 to-CYAN100">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
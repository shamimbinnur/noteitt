import React from 'react'

const Loader = () => {
  return (
    <div className="bg-gradient-to-br from-PURPLE100 via-PURPLE50 to-CYAN100 h-screen">
      <div className="bg-gray-800 h-full bg-opacity-80">
        <div className="flex h-full justify-center items-center">
          <div className="animate-spin-fast w-20 h-20 rounded-xl bg-gradient-to-br from-PURPLE100 via-gray-100 to-CYAN100">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
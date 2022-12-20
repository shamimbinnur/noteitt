import React from 'react'

const NoteSkeleton = () => {
  return (
    <div className=" animate-pulse">
      <div className="h-12 flex items-center gap-x-2 px-2">
      </div>

      <div className="rounded-2xl w-[360px] p-4 border-4 border-CYAN100 h-[245px] bg-white shadow-md">
        <div className="flex justify-between">
          <div></div>
          <div className="w-16 h-6 rounded-2xl animate-pulse py-1 px-2 gap-x-1 bg-PURPLE50 flex items-center ">
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteSkeleton;
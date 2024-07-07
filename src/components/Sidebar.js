import React from 'react'

const Sidebar = () => {

    const news = [
        {
            id: 0,
            title: "No News & Updates"
        },
        {
            id: 1,
            title: "No News & Updates"
        },
        {
            id: 2,
            title: "No News & Updates"
        },
        {
            id: 3,
            title: "No News & Updates"
        }
    ]
  return (
    <div className="border-2 w-[250px]">
      <div className="border-b-2 p-3">
        <span>Schemes</span>
      </div>
      {news.map((item, index) => (
        <div key={index} className="p-3 flex items-center space-x-1 text-md">
            <span className="font-semibold">{">"}</span>
            <span className="hover:underline hover:cursor-pointer duration-300">{item.title}</span>
        </div>
      ))}
    <div className="bg-gray-400 p-3 hover:underline hover:cursor-pointer duration-300">
        <span>View All News</span>
    </div>
    </div>
  )
}

export default Sidebar

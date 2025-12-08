import React from 'react'

const PageHeader = ({title,subTitle}) => {
  return (
    <header className="text-white text-center darkBlueBg mx-auto mt-4">
        <div className="container">
            <h1><b>{title}</b></h1>
            <p className="lead">{subTitle}</p>
        </div>
    </header>
  )
}

export default PageHeader
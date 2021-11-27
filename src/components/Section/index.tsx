import React, { ReactNode } from 'react'

type PropsType = {
  content: ReactNode
}

const Section = (props: PropsType) => {
  return (
    <div className="section">
      {props.content}
    </div>
  )
}

export default Section

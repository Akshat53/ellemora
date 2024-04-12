import React from 'react'

interface headingProps {
    label :string
}
const Heading: React.FC <headingProps> = ({label}) => {
  return (
   <h3 className='text-center'>{label}</h3>
  )
}

export default Heading
import React, { ReactElement } from 'react'
import './View.scss'

type Props = {
  children: ReactElement
}

export default function View({children}: Props)
{
  return (
    <div className='view-container'>{children}</div>
  )
}
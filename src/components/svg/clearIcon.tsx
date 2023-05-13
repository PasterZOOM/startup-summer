import { FC } from 'react'

const CLEAR_ICON_SIZE = 16

type PropsType = {
  className?: string
  width?: string | number
  height?: string | number
}

export const ClearIcon: FC<PropsType> = ({
  className = '',
  width = CLEAR_ICON_SIZE,
  height = CLEAR_ICON_SIZE,
}) => {
  return (
    <svg
      className={`${className} group-hover:stroke-blue-400 group-active:stroke-blue-main-500`}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="11.7425"
        y1="4.44219"
        x2="4.44197"
        y2="11.7427"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <line
        x1="11.9013"
        y1="11.7425"
        x2="4.60082"
        y2="4.44197"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  )
}

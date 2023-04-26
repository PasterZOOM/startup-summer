import { FC } from 'react'

const SELECT_ARRAY_ICON_SIZE = 24

type PropsType = {
  className?: string
  width?: string | number
  height?: string | number
}

export const SelectArrayIcon: FC<PropsType> = ({
  className,
  width = SELECT_ARRAY_ICON_SIZE,
  height = SELECT_ARRAY_ICON_SIZE,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 9L11.2191 14.3306C11.6684 14.7158 12.3316 14.7158 12.7809 14.3306L19 9"
        stroke="#ACADB9"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

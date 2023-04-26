import { FC } from 'react'

const SEARCH_ICON_SIZE = 16

type PropsType = {
  className?: string
  width?: string | number
  height?: string | number
}

export const SearchIcon: FC<PropsType> = ({
  className,
  width = SEARCH_ICON_SIZE,
  height = SEARCH_ICON_SIZE,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.468 11.468L14.5714 14.5714M13.0924 7.54622C13.0924 10.6093 10.6093 13.0924 7.54622 13.0924C4.48313 13.0924 2 10.6093 2 7.54622C2 4.48313 4.48313 2 7.54622 2C10.6093 2 13.0924 4.48313 13.0924 7.54622Z"
        stroke="#ACADB9"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

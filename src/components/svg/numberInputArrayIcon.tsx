import { FC } from 'react'

const NUMBER_INPUT_ARRAY_ICON_SIZE = 12

type PropsType = {
  className?: string
  width?: string | number
  height?: string | number
  onClick?: () => void
}

export const NumberInputArrayIcon: FC<PropsType> = ({
  className,
  width = NUMBER_INPUT_ARRAY_ICON_SIZE,
  height = NUMBER_INPUT_ARRAY_ICON_SIZE,
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.50006 7.5L6.39054 4.83469C6.16584 4.6421 5.83428 4.6421 5.60959 4.83469L2.50006 7.5"
        stroke="#ACADB9"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

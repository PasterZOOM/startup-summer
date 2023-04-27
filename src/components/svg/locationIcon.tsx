import { FC } from 'react'

const LOCATION_ICON_SIZE = 20

type PropsType = {
  className?: string
  width?: string | number
  height?: string | number
}

export const LocationIcon: FC<PropsType> = ({
  className,
  width = LOCATION_ICON_SIZE,
  height = LOCATION_ICON_SIZE,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.714 13.8807C13.9335 14.6612 12.3013 16.2935 11.1781 17.4166C10.5273 18.0675 9.47304 18.0678 8.82217 17.4169C7.7186 16.3134 6.11797 14.7127 5.28593 13.8807C2.68244 11.2772 2.68244 7.05612 5.28593 4.45262C7.88943 1.84913 12.1105 1.84913 14.714 4.45262C17.3175 7.05612 17.3175 11.2772 14.714 13.8807Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 9.16667C12.5 10.5474 11.3807 11.6667 9.99998 11.6667C8.61927 11.6667 7.49998 10.5474 7.49998 9.16667C7.49998 7.78595 8.61927 6.66667 9.99998 6.66667C11.3807 6.66667 12.5 7.78595 12.5 9.16667Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

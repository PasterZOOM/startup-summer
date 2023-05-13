import { FC } from 'react'

import { NumberInputArrayIcon } from '@/components/svg/numberInputArrayIcon'

type PropsType = {
  onClick: () => void
  isDecrement?: boolean
  disabled?: boolean
}
export const InputNumberButton: FC<PropsType> = ({ onClick, isDecrement, disabled }) => {
  return (
    <div
      onClick={onClick}
      className={`flex h-5 w-10 justify-center ${isDecrement ? 'items-start' : 'items-end'} ${
        disabled ? 'cursor-default' : 'group'
      }`}
      aria-hidden
    >
      <NumberInputArrayIcon
        className={`transition group-hover:scale-125 group-active:scale-100 ${
          isDecrement ? 'rotate-180' : ''
        } ${disabled ? 'text-gray-200' : 'text-gray-500'}`}
      />
    </div>
  )
}

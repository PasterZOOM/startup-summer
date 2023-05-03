import { FC, useRef } from 'react'

import { NumberInput, NumberInputHandlers } from '@mantine/core'
import { NumberInputProps } from '@mantine/core/lib/NumberInput/NumberInput'

import { NumberInputArrayIcon } from '@/components/svg/numberInputArrayIcon'

export const InputNumber: FC<NumberInputProps> = props => {
  const handlers = useRef<NumberInputHandlers>()

  const incrementHandler = (): void => handlers.current?.increment()
  const decrementHandler = (): void => handlers.current?.decrement()

  return (
    <div className="relative">
      <NumberInput hideControls radius="md" size="md" handlersRef={handlers} {...props} />
      <div className="absolute right-3 top-2.25">
        <NumberInputArrayIcon onClick={incrementHandler} />
        <NumberInputArrayIcon className="rotate-180" onClick={decrementHandler} />
      </div>
    </div>
  )
}

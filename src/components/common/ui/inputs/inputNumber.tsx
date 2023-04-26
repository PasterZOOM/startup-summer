import { FC, useRef } from 'react'

import { NumberInput, NumberInputHandlers } from '@mantine/core'
import { NumberInputProps } from '@mantine/core/lib/NumberInput/NumberInput'

import { NumberInputArrayIcon } from '@/components/svg/numberInputArrayIcon'

export const InputNumber: FC<NumberInputProps> = props => {
  const handlers = useRef<NumberInputHandlers>()

  return (
    <div className="relative">
      <NumberInput hideControls radius="md" size="md" min={0} handlersRef={handlers} {...props} />
      <div className="absolute right-3 top-2.25">
        <NumberInputArrayIcon onClick={() => handlers.current?.increment()} />
        <NumberInputArrayIcon
          className="rotate-180"
          onClick={() => handlers.current?.decrement()}
        />
      </div>
    </div>
  )
}

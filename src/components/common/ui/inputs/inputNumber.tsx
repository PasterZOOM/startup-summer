import { memo, useRef } from 'react'

import { NumberInput, NumberInputHandlers } from '@mantine/core'
import { NumberInputProps } from '@mantine/core/lib/NumberInput/NumberInput'

import { InputNumberButton } from '@/components/common/ui/inputs/inputNumberButton'

export const InputNumber = memo((props: NumberInputProps) => {
  const handlers = useRef<NumberInputHandlers>()
  const { disabled, value, max, min } = props
  const incrementHandler = (): void => {
    if (!disabled) {
      handlers.current?.increment()
    }
  }
  const decrementHandler = (): void => {
    if (!disabled && value) {
      handlers.current?.decrement()
    }
  }

  return (
    <div className="relative">
      <NumberInput hideControls radius="md" size="md" handlersRef={handlers} {...props} />
      {!disabled && (
        <div className="absolute bottom-0 right-0 top-0 flex cursor-pointer flex-col justify-center">
          <InputNumberButton
            onClick={incrementHandler}
            disabled={!!value && !!max && +value >= +max}
          />
          <InputNumberButton
            onClick={decrementHandler}
            isDecrement
            disabled={(!!value && !!min && +value <= +min) || !value}
          />
        </div>
      )}
    </div>
  )
})

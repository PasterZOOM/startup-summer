import { memo, useRef } from 'react'

import { NumberInput, NumberInputHandlers } from '@mantine/core'
import { NumberInputProps } from '@mantine/core/lib/NumberInput/NumberInput'

import { InputNumberButton } from '@/components/common/ui/inputs/inputNumberButton'
import { PAYMENT_STEP } from '@/constatnts/constants'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'

export const InputNumber = memo((props: NumberInputProps) => {
  const { value, max, min } = props

  const handlers = useRef<NumberInputHandlers>()

  const { data: vacancies } = useGetAllVacancies()

  const incrementHandler = (): void => {
    handlers.current?.increment()
  }
  const decrementHandler = (): void => {
    handlers.current?.decrement()
  }

  return (
    <div className="relative">
      <NumberInput
        hideControls
        radius="md"
        size="md"
        rightSection={
          vacancies && (
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
          )
        }
        handlersRef={handlers}
        step={PAYMENT_STEP}
        disabled={!vacancies}
        {...props}
        sx={{ '&:hover': { 'input:not(:disabled)': { border: '1px solid #5E96FC' } } }}
      />
    </div>
  )
})

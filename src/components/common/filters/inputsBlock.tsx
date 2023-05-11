import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { InputNumber } from '@/components/common/ui/inputs/inputNumber'
import { useGetAllVacancies } from '@/hooks/query/useGetAllVacancies'
import { selectPaymentFrom, selectPaymentTo, useParamsStore } from '@/stores/useParamsStore'

export const InputsBlock: FC = () => {
  const { t } = useTranslation('filters')

  const { data: vacancies } = useGetAllVacancies()

  const [paymentFrom, setPaymentFrom] = useParamsStore(selectPaymentFrom)
  const [paymentTo, setPaymentTo] = useParamsStore(selectPaymentTo)

  const fromPlaceholder = t('fromPlaceholder', 'До')
  const toPlaceholder = t('toPlaceholder', 'От')

  return (
    <>
      <InputNumber
        data-elem="salary-from-input"
        placeholder={fromPlaceholder}
        value={Number(paymentFrom) || ''}
        onChange={value => setPaymentFrom(value.toString())}
        max={Number(paymentTo) || undefined}
        min={0}
        disabled={!vacancies}
        step={500}
      />
      <InputNumber
        data-elem="salary-to-input"
        placeholder={toPlaceholder}
        value={Number(paymentTo) || ''}
        onChange={value => setPaymentTo(value.toString())}
        min={paymentFrom ? Number(paymentFrom) : 0}
        disabled={!vacancies}
        step={500}
      />
    </>
  )
}

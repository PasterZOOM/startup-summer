import { FC } from 'react'

import { useTranslation } from 'next-i18next'

import { InputNumber } from '@/components/common/ui/inputs/inputNumber'
import { PAYMENT_STEP } from '@/constatnts/constants'
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
        min={PAYMENT_STEP}
        disabled={!vacancies}
        step={PAYMENT_STEP}
      />
      <InputNumber
        data-elem="salary-to-input"
        placeholder={toPlaceholder}
        value={Number(paymentTo) || ''}
        onChange={value => setPaymentTo(value.toString())}
        min={paymentFrom ? Number(paymentFrom) : PAYMENT_STEP}
        disabled={!vacancies}
        step={PAYMENT_STEP}
      />
    </>
  )
}

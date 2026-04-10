import { useState } from 'react'
import { Accordion } from '@alfalab/core-components/accordion'
import { Text } from '@alfalab/core-components/text'
import { Checkbox } from '@alfalab/core-components/checkbox'
import { Gap } from '@alfalab/core-components/gap'
import { Badge } from '@alfalab/core-components/badge'
import { BaseModal } from '@alfalab/core-components/base-modal'
import { CalendarRange } from '@alfalab/core-components/calendar-range'
import { MaskedInput } from '@alfalab/core-components/masked-input'
import { Slider } from '@alfalab/core-components/slider'
import { Switch } from '@alfalab/core-components/switch'
import { Attach } from '@alfalab/core-components/attach'
import { BankCard } from '@alfalab/core-components/bank-card'
import './App.css'

function App() {
  const [checked, setChecked] = useState<string[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [dateFrom, setDateFrom] = useState<{ value: string; date: number | null }>({ value: '', date: null })
  const [dateTo, setDateTo] = useState<{ value: string; date: number | null }>({ value: '', date: null })
  const [phoneValue, setPhoneValue] = useState('')
  const [cardValue, setCardValue] = useState('')
  const [sliderValue, setSliderValue] = useState(50)
  const [switch1, setSwitch1] = useState(false)
  const [switch2, setSwitch2] = useState(false)
  const [switch3, setSwitch3] = useState(false)
  const [attachFiles, setAttachFiles] = useState<File[] | null>(null)
  const [bankCardValue, setBankCardValue] = useState('')
  const toggle = (value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((v) => v !== value)
    )
  }

  return (
    <>
      <Text tag="h1" view="headline-system-large" className="page-title">
        Тест core-components-mcp
      </Text>

        <Gap size={24} direction="horizontal" />

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => setModalOpen(true)}>
          <Badge view="count" content={1} />
          <Text>Нажмите, чтобы открыть модальное окно</Text>
        </div>

        <BaseModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div style={{ padding: 40 }}>
            <Text tag="h2" view="headline-medium">Модальное окно</Text>
            <Gap size={16} />
            <Text>Это модальное окно, которое открылось по клику на Alert.</Text>
          </div>
        </BaseModal>

        <Accordion
        header={<Text className="accordion-header">Информация</Text>}
        controlPosition="start"
        defaultExpanded={false}
      >
        <Text>Содержимое аккордиона — раскрывающийся блок с полезной информацией.</Text>
      </Accordion>

      <Gap size={24} />

      <CalendarRange
        valueFrom={dateFrom.value}
        valueTo={dateTo.value}
        onChange={({ valueFrom, valueTo, dateFrom, dateTo }) => {
          setDateFrom({ value: valueFrom, date: dateFrom })
          setDateTo({ value: valueTo, date: dateTo })
        }}
      />

      <Gap size={24} />

      <MaskedInput
        label="Телефон"
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
        mask={['+', '7', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
        placeholder="+7 (___) ___-__-__"
        block
      />

      <Gap size={24} />

      <MaskedInput
        label="Номер карты"
        value={cardValue}
        onChange={(e) => setCardValue(e.target.value)}
        mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
        placeholder="0000 0000 0000 0000"
        block
      />

      <Gap size={24} />

      <Slider
        value={sliderValue}
        onChange={({ value }) => setSliderValue(value)}
        min={0}
        max={100}
        step={1}
      />
      <Text view="paragraph-secondary-medium">Значение слайдера: {sliderValue}</Text>

      <Gap size={24} />

      <div className="checkbox-group" style={{ marginTop: 24 }}>
        <Checkbox
          label="Да"
          checked={checked.includes('yes')}
          onChange={toggle('yes')}
        />
        <Checkbox
          label="Нет"
          checked={checked.includes('no')}
          onChange={toggle('no')}
        />
        <Checkbox
          label="Другое"
          checked={checked.includes('other')}
          onChange={toggle('other')}
        />
      </div>

      <Gap size={40} />

      <div className="mcp-prod-components-block">
        <Text tag="h2" view="headline-medium" style={{ marginBottom: 24 }}>
          Компоненты из prod версии MCP (npm)
        </Text>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <Text tag="h3" view="headline-small" style={{ marginBottom: 12 }}>
              Switch (3 шт)
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Switch
                label="Первый переключатель"
                checked={switch1}
                onChange={() => setSwitch1((prev) => !prev)}
                block
              />
              <Switch
                label="Второй переключатель"
                checked={switch2}
                onChange={() => setSwitch2((prev) => !prev)}
                block
              />
              <Switch
                label="Третий переключатель"
                checked={switch3}
                onChange={() => setSwitch3((prev) => !prev)}
                block
              />
            </div>
          </div>

          <div>
            <Text tag="h3" view="headline-small" style={{ marginBottom: 12 }}>
              Attach
            </Text>
            <Attach
              value={attachFiles}
              onChange={(e, { files }) => setAttachFiles(files)}
              onClear={() => setAttachFiles(null)}
            />
          </div>

          <div>
            <Text tag="h3" view="headline-small" style={{ marginBottom: 12 }}>
              BankCard
            </Text>
            <BankCard
              value={bankCardValue}
              onChange={(e, { value }) => setBankCardValue(value)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

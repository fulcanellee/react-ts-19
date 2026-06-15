import {CDNIcon} from '@alfalab/core-components/cdn-icon'
import {CardImage} from '@alfalab/core-components/card-image'
import {ProductCover} from '@alfalab/core-components/product-cover'
import {Gap} from '@alfalab/core-components/gap'
import {BankCard} from '@alfalab/core-components/bank-card'

function App() {
  return (
    <div>
        <h2>test env</h2>
        <CDNIcon
            color='var(--color-light-neutral-translucent-1300)'
            name='glyph_diamonds_xxl'
        />
        <CDNIcon
            color='var(--color-light-neutral-700)'
            name='glyph_diamonds_m'
        />
        <CDNIcon
            color='var(--color-light-neutral-500)'
            name='glyph_diamonds_s'
        />
        <Gap size={16}/>
        <CardImage
            cardId='EG'
        />
        <Gap size={16}/>
        <BankCard />
        <Gap size={16}/>
        <ProductCover.Single
            size={164}
            cardholderName='Cardholder Name'
            cardNumber={1234000000001234}
            layers='BACKGROUND,LOGO,PAYMENT_SYSTEM'
            baseUrl={`https://${`online.alfabank.ru`}/cards-images/cards/`}
            cardId='RM'
            eyeButton={true}
        />
        <Gap size={16}/>
    </div>
  )
}

export default App

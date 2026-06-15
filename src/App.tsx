import {CDNIcon} from '@alfalab/core-components/cdn-icon'
import {CardImage} from '@alfalab/core-components/card-image'
import {ProductCover} from '@alfalab/core-components/product-cover'
import {Gap} from '@alfalab/core-components/gap'

function App() {
  return (
    <div>
        <h2>test env</h2>
        <CDNIcon
            color='var(--color-light-neutral-translucent-1300)'
            name='glyph_diamonds_xxl'
        />
        <Gap size={16}/>
        <CardImage
            cardId='EG'
        />
        <Gap size={16}/>
        <ProductCover.Single
            size={164}
            cardholderName='Cardholder Name'
            cardNumber={1234000000001234}
            layers='BACKGROUND,LOGO,PAYMENT_SYSTEM'
            cardId='RM'
            eyeButton={true}
        />
        <Gap size={16}/>
    </div>
  )
}

export default App

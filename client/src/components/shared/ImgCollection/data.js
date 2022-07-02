
import img1 from '../../../assets/imgCollection/img1.webp'
import img2 from '../../../assets/imgCollection/img2.webp'
import img3 from '../../../assets/imgCollection/img3.webp'
import img4 from '../../../assets/imgCollection/img4.webp'
import img5 from '../../../assets/imgCollection/img5.webp'

import {FormattedMessage} from 'react-intl'

export const Data = [
            {
                image: img1,
                title: (<FormattedMessage id='img-collection-item1-title' defaultMessage="BEST OUTFITS"/>),
                cls: 'item1'
            },
            {
                image: img2,
                title: (<FormattedMessage id='img-collection-item2-title' defaultMessage="TRENDING COLORS"/>),
                cls: 'item1'
            },
            {
                image: img3,
                title: (<FormattedMessage id='img-collection-item3-title' defaultMessage="FASHION TREND"/>),
                cls: 'item1'
            },
            {
                image: img4,
                title: (<FormattedMessage id='img-collection-item4-title' defaultMessage="PRETTY COMBOS"/>),
                cls: 'item1'
            },
            {
                image: img5,
                title: (<FormattedMessage id='img-collection-item5-title' defaultMessage="STYLISH"/>),
                cls: 'item2'
            }
]
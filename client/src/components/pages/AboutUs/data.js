import { FormattedMessage } from "react-intl";

export const Data = [
  {
    title: (
      <FormattedMessage
        id="shopping-experience-title1"
        defaultMessage="Shop from any location"
      />
    ),
    text: (
      <FormattedMessage
        id="shopping-experience-text1"
        defaultMessage="You are no longer limited to your location
        when shopping for our products—you can 
        purchase items from your favorite brand 
        at any time and from any place."
      />
    ),
    bg: '#E0F0C4',
    aos:'flip-left',
    item:'item1'
  },
  {
    title: (
      <FormattedMessage
        id="shopping-experience-title2"
        defaultMessage="A greater variety of choices"
      />
    ),
    text: (
      <FormattedMessage
        id="shopping-experience-text2"
        defaultMessage="We expose you to a variety of shopping options 
        to choose from.You can choose from more 
        patterns, colors, and designs when 
        shopping with us."
      />
    ),
    bg: '#FBCD99',
    aos:'flip-right',
    item:'item2'
  }
];

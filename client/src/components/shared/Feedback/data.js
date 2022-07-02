import { FormattedMessage } from "react-intl";

import user1 from "../../../assets/feedback/user1.webp";
import user2 from "../../../assets/feedback/user2.webp";

export const Data = [
  {
    profile: user1,
    name: "Laura Berry",
    comment: (
      <FormattedMessage
        id="feedback1"
        defaultMessage="Just got my first order and I have one word WOW!!!! Love, Love, Love these 
            clothes!! I had my doubts before I ordered because with most sites I'm usually 
            disappointment, but not this time!! The shipping was also really fast only took 
            about 9 days to get to me. Love it!! I'll be back to buy more. For Sure!"
      />
    ),
  },
  {
    profile: user2,
    name: "Kathy Adams",
    comment: (
      <FormattedMessage
        id="feedback2"
        defaultMessage="I completely love this site..I am so glad I found it,everything has been spot on, 
        fits wonderfully, styles are trendy and lots to choose from!I am always 
        complemented on my outfits I will be back for more...Thank you for having 
        cute trendy clothes that fit and look good."
      />
    ),
  },
  {
    profile: user1,
    name: "Laura Berry",
    comment: (
      <FormattedMessage
        id="feedback1"
        defaultMessage="Just got my first order and I have one word WOW!!!! Love, Love, Love these 
            clothes!! I had my doubts before I ordered because with most sites I'm usually 
            disappointment, but not this time!! The shipping was also really fast only took 
            about 9 days to get to me. Love it!! I'll be back to buy more. For Sure!"
      />
    ),
  },
  {
    profile: user2,
    name: "Kathy Adams",
    comment: (
      <FormattedMessage
        id="feedback2"
        defaultMessage="I completely love this site..I am so glad I found it,everything has been spot on, 
        fits wonderfully, styles are trendy and lots to choose from!I am always 
        complemented on my outfits I will be back for more...Thank you for having 
        cute trendy clothes that fit and look good."
      />
    ),
  }
];

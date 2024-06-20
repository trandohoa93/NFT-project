import type { Notification, Page, SliderArticleProp } from '@/types'

export const PAGE_DUMMY_DATA: Page[] = [
  {
    id: 1,
    link: '/',
    name: 'Homepage',
    image: 'common-gallery-light.png',
  },
  {
    id: 2,
    link: '/marketplace',
    name: 'Marketplace',
    image: 'common-gallery-light.png',
  },
  {
    id: 3,
    link: '/',
    name: 'Community',
    image: 'common-gallery-light.png',
  },
  {
    id: 4,
    link: '/how-it-works',
    name: 'How it works',
    image: 'common-edit-light.png',
  },
  {
    id: 5,
    link: '/about-us',
    name: 'About us',
    image: 'common-edit-light.png',
  },
  {
    id: 6,
    link: '/contact',
    name: 'Contact',
    image: 'common-shopping-cart-light.png',
  },
  {
    id: 7,
    link: '/FAQ',
    name: 'FAQ',
    image: 'common-gallery-light.png',
  },
  {
    id: 8,
    link: '/not-found',
    name: '404',
    image: 'common-gallery-light.png',
  },
  {
    id: 9,
    link: '/coming-soon',
    name: 'Comming Soon',
    image: 'common-edit-light.png',
  },
  {
    id: 10,
    link: '/maintenance',
    name: 'Maintain',
    image: 'common-edit-light.png',
  },
  {
    id: 11,
    link: '/not-result',
    name: 'No Result',
    image: 'common-shopping-cart-light.png',
  },
  {
    id: 12,
    link: '/policy-term',
    name: 'Terms and Conditions',
    image: 'common-logout-light.png',
  },
  {
    id: 13,
    link: '/policy-term',
    name: 'Privacy policy',
    image: 'common-logout-light.png',
  },
]

export const MEDIA_DUMMY_DATA = [
  {
    id: 1,
    image: 'instagram.png',
  },
  {
    id: 2,
    image: 'facebook.png',
  },
  {
    id: 3,
    image: 'twitter.png',
  },
  {
    id: 4,
    image: 'tiktok.png',
  },
  {
    id: 5,
    image: 'youtube.png',
  },
  {
    id: 6,
    image: 'telegram.png',
  },
]

export const FOOTER_DUMMY_INFO = [
  {
    id: 1,
    title: 'Quick Link',
    contents: [
      {
        id: 1,
        link: '/',
        name: 'About Us',
      },
      {
        id: 2,
        link: '/',
        name: 'NFTs',
      },
      {
        id: 3,
        link: '/',
        name: 'Collection',
      },
      {
        id: 4,
        link: '/',
        name: 'Sellers',
      },
    ],
  },
  {
    id: 2,
    title: 'Community',
    contents: [
      {
        id: 1,
        link: '/',
        name: 'How it works',
      },
      {
        id: 2,
        link: '/',
        name: 'FAQs',
      },
      {
        id: 3,
        link: '/',
        name: 'News',
      },
      {
        id: 4,
        link: '/',
        name: 'Join Community',
      },
    ],
  },
]

export const USER_AVATAR = {
  id: 'as313219dsadasdssasdas',
  balance: '16.58 ETH',
  theme: '#E2E5E8',
}

export const NOTIFICATION_DATA: Notification[] = [
  {
    id: 1,
    title: 'Monkey Art Collection',
    name: '<p> 10 editions listed by <span style="color: #FE8C00; font-weight: 700;">2.50ETH</span> Bits for each </p>',
    price: 2.50,
    is_seen: false,
  },
  {
    id: 2,
    title: 'Pretty Soldier Collection',
    name: '<p> 10 editions listed by <span style="color: #FE8C00; font-weight: 700;">2.50ETH</span> Bits for each </p>',
    price: 2.50,
    is_seen: false,
  },
  {
    id: 3,
    title: 'Monster Dictador',
    name: '<p> 10 editions listed by <span style="color: #FE8C00; font-weight: 700;">2.50ETH</span> Bits for each </p>',
    price: 2.50,
    is_seen: false,
  },
  {
    id: 4,
    title: 'Monkey Art Collection',
    name: '<p> 10 editions listed by <span style="color: #FE8C00; font-weight: 700;">2.50ETH</span> Bits for each </p>',
    price: 2.50,
    is_seen: true,
  },
]

export const COLLECTIONS = [
  {
    id: 1,
    name: 'Collection Monkey Art',
    volume: 1.378,
    change: +89,
    price: 4.92,
    sale: 127,
    percentOwner: 55,
    totalOwner: 17,
    items: 202,
    totalItems: 555,
    isFavourite: false,
  },
  {
    id: 2,
    name: 'Collection Monkey Art',
    volume: 1.378,
    change: -89,
    price: 4.92,
    sale: 127,
    percentOwner: 55,
    totalOwner: 17,
    items: 202,
    totalItems: 555,
    isFavourite: false,
  },
  {
    id: 3,
    name: 'Collection Monkey Art',
    volume: 1.378,
    change: +89,
    price: 4.92,
    sale: 127,
    percentOwner: 55,
    totalOwner: 17,
    items: 202,
    totalItems: 555,
    isFavourite: false,
  },
  {
    id: 4,
    name: 'Collection Monkey Art',
    volume: 1.378,
    change: -89,
    price: 4.92,
    sale: 127,
    percentOwner: 55,
    totalOwner: 17,
    items: 202,
    totalItems: 555,
    isFavourite: false,
  },
  {
    id: 5,
    name: 'Collection Monkey Art',
    volume: 1.378,
    change: +89,
    price: 4.92,
    sale: 127,
    percentOwner: 55,
    totalOwner: 17,
    items: 202,
    totalItems: 555,
    isFavourite: false,
  },
]

export const SLIDER_ARTICLE_DUMMY_DATA: SliderArticleProp[] = [
  {
    imageUrl: 'https://genk.mediacdn.vn/thumb_w/640/2015/2-1440133142840.gif',
    title: 'Action required: Check if your wallet is exposed to potential vulnerability',
    date: 'March 17, 2023',
  },
  {
    imageUrl: 'https://genk.mediacdn.vn/thumb_w/640/2015/2-1440133142840.gif',
    title: 'Action required: Check if your wallet is exposed to potential vulnerability',
    date: 'March 17, 2023',
  },
  {
    imageUrl: 'https://genk.mediacdn.vn/thumb_w/640/2015/2-1440133142840.gif',
    title: 'Solana NFTs land on Rarible.com',
    date: 'March 17, 2023',
  },
  {
    imageUrl: 'https://genk.mediacdn.vn/thumb_w/640/2015/2-1440133142840.gif',
    title: 'Introducing “gm mfer,” IRL coffee for NFT mfers',
    date: 'March 17, 2023',
  },
  {
    imageUrl: 'https://genk.mediacdn.vn/thumb_w/640/2015/2-1440133142840.gif',
    title: 'Your Rarible NFTs just got even more decentralized and resilient',
    date: 'March 17, 2023',
  },
]

export const POLICY_TERM = [
  {
    id: 1,
    title: 'Neque porro quisquam est',
    content: [
      'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.',

      'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.',

      'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It\'s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”',
    ],
  },

  {
    id: 2,
    title: 'As Cicero would put it, “Um, not so fast.”',
    content: [
      'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',

      'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.',

      'In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero\'s work, with the most notable passage excerpted below:',

      '“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”',
    ],
  },

  {
    id: 3,
    title: 'A 1914 English translation by Harris Rackham reads:',
    content: [
      '“Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.”',

      'McClintock\'s eye for detail certainly helped narrow the whereabouts of lorem ipsum\'s origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.',

      'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.',

      'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.',

      'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It\'s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”',
    ],
  },

  {
    id: 4,
    title: 'As Cicero would put it, “Um, not so fast.”',
    content: [
      'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',

      'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.',

      'In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero\'s work, with the most notable passage excerpted below:',

      '“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”',
    ],
  },

  {
    id: 5,
    title: 'A 1914 English translation by Harris Rackham reads:',
    content: [
      '“Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.”',

      'McClintock\'s eye for detail certainly helped narrow the whereabouts of lorem ipsum\'s origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.',

      'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.',

      'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.',

      'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It\'s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”',
    ],
  },

  {
    id: 6,
    title: 'As Cicero would put it, “Um, not so fast.”',
    content: [
      'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',

      'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.',

      'In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero\'s work, with the most notable passage excerpted below:',

      '“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”',
    ],
  },

  {
    id: 7,
    title: 'A 1914 English translation by Harris Rackham reads:',
    content: [
      '“Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.”',

      'McClintock\'s eye for detail certainly helped narrow the whereabouts of lorem ipsum\'s origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.',

      'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.',

      'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.',

      'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It\'s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”',
    ],
  },

]

export const LIST_TABS = [
  {
    title: 'Description',
    text: 'Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet.',
    value: 1,
  },
  {
    title: 'Owners',
    text: 'Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet.',
    value: 2,
  },
  {
    title: 'History',
    text: 'Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet.',
    value: 3,
  },
  {
    title: 'Bids',
    text: 'Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet.',
    value: 4,
  },
]

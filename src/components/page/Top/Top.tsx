import cardJoker from '@/assets/image/card_joker.png'
import cardSpade01 from '@/assets/image/card_spade_01.png'
import cardSpade02 from '@/assets/image/card_spade_02.png'
import cardSpade03 from '@/assets/image/card_spade_03.png'
import cardSpade04 from '@/assets/image/card_spade_04.png'
import cardSpade05 from '@/assets/image/card_spade_05.png'
import cardSpade06 from '@/assets/image/card_spade_06.png'
import cardSpade07 from '@/assets/image/card_spade_07.png'
import cardSpade08 from '@/assets/image/card_spade_08.png'
import cardSpade09 from '@/assets/image/card_spade_09.png'
import cardSpade10 from '@/assets/image/card_spade_10.png'
import cardSpade11 from '@/assets/image/card_spade_11.png'
import cardSpade12 from '@/assets/image/card_spade_12.png'
import cardSpade13 from '@/assets/image/card_spade_13.png'

import { Card } from '@/components/model/card/Card'
import { useState } from 'react'

type CardData = {
  id: string
  name: string
  imageSrc: string
  isOpen: boolean
}

export const Top = () => {
  const _cards: CardData[] = [
    {
      id: '1',
      name: '1',
      imageSrc: cardSpade01,
      isOpen: false,
    },
    {
      id: '2',
      name: '2',
      imageSrc: cardSpade02,
      isOpen: false,
    },
    {
      id: '3',
      name: '3',
      imageSrc: cardSpade03,
      isOpen: false,
    },
    {
      id: '4',
      name: '4',
      imageSrc: cardSpade04,
      isOpen: false,
    },
    {
      id: '5',
      name: '5',
      imageSrc: cardSpade05,
      isOpen: false,
    },
    {
      id: '6',
      name: '6',
      imageSrc: cardSpade06,
      isOpen: false,
    },
    {
      id: '7',
      name: '7',
      imageSrc: cardSpade07,
      isOpen: false,
    },
    {
      id: '8',
      name: '8',
      imageSrc: cardSpade08,
      isOpen: false,
    },
    {
      id: '9',
      name: '9',
      imageSrc: cardSpade09,
      isOpen: false,
    },
    {
      id: '10',
      name: '10',
      imageSrc: cardSpade10,
      isOpen: false,
    },
    {
      id: '11',
      name: '11',
      imageSrc: cardSpade11,
      isOpen: false,
    },
    {
      id: '12',
      name: '12',
      imageSrc: cardSpade12,
      isOpen: false,
    },
    {
      id: '13',
      name: '13',
      imageSrc: cardSpade13,
      isOpen: false,
    },
    {
      id: '14',
      name: 'joker',
      imageSrc: cardJoker,
      isOpen: false,
    },
  ]

  /**
   * フィッシャー–イェーツのシャッフル
   * @see {@link https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC%E2%80%93%E3%82%A4%E3%82%A7%E3%83%BC%E3%83%84%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB}
   */
  const shuffle = (array: CardData[]) => {
    for (
      let currentIndex = array.length - 1;
      currentIndex > 0;
      currentIndex--
    ) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1))
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    return array
  }

  const getRandomCards = (cards: CardData[], count: number) => {
    // ランダムにカードを選ぶ
    const shuffledCards = shuffle([...cards])
    const selectedCards = shuffledCards.slice(0, count)

    // カードを複製して、ペアを作る
    const cardPairs = [
      ...selectedCards,
      ...selectedCards.map((card) => ({ ...card, id: `duplicate-${card.id}` })),
    ]

    // カードのペアをシャッフルする
    return shuffle(cardPairs)
  }

  const [cards, setCards] = useState(getRandomCards(_cards, 12))

  const openCard = (id: string) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isOpen: true,
        }
      }
      return card
    })
    setCards(newCards)
  }

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-6 gap-2 max-w-3xl w-full">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              imageSrc={card.imageSrc}
              isOpen={card.isOpen}
              onClick={openCard}
            />
          ))}
        </div>
      </div>
    </>
  )
}

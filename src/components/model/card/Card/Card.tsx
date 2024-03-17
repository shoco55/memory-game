import cardBack from '@/assets/image/card_back.png'

type Props = {
  id: string
  name: string
  imageSrc: string
  isOpen: boolean
  onClick: (id: string) => void
}

export function Card({ id, name, imageSrc, isOpen, onClick }: Props) {
  return (
    <button
      className="relative before:content-[''] before:block before:pt-[146%]"
      onClick={() => onClick(id)}
      type="button"
    >
      <div
        className={`absolute top-0 left-0 w-full h-full transition duration-700 [backface-visibility:hidden] ${
          isOpen ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <img src={cardBack} alt="カード" className="w-full " />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full transition duration-700 [backface-visibility:hidden] ${
          isOpen ? '[transform:rotateY(0deg)]' : '[transform:rotateY(-180deg)]'
        }`}
      >
        <img src={imageSrc} alt={name} className="w-full rotate" />
      </div>
    </button>
  )
}

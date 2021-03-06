import Link from 'next/link'

interface ICoin {
  name: string
  price: {
    usd: number
  }
}

export default function Card({ token }: { token: ICoin }): JSX.Element {
  const name = token.name.split('-').join(' ')

  return (
    <div
      key={token.name}
      className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div className="flex-shrink-0"></div>
      <div className="flex-1 min-w-0">
        <Link href={`tokens/${token.name}`}>
          <a href="#" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900 capitalize">
              {name}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {token.price.usd} USD
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}

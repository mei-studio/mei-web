import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-start justify-center py-12">
      <section className="mb-16 space-y-8">
        <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900">
          tecnología con{' '}
          <span className="text-blue-700">rostro humano</span>
        </h1>
        <p className="text-xl leading-relaxed text-gray-600">
          construimos herramientas digitales para desarrolladores y colaboramos
          con comunidades que buscan llevar sus ideas al mundo digital.
        </p>
      </section>

      <section className="mb-16 flex gap-4">
        <Link
          to="/about"
          className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
        >
          conocer más
        </Link>
        <Link
          to="/contact"
          className="rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
        >
          conversemos
        </Link>
      </section>

      <section className="border-l-4 border-blue-700 pl-4">
        <p className="text-sm italic text-gray-600">
          un proyecto nacido en méxico que cree en el conocimiento compartido y
          la colaboración honesta.
        </p>
      </section>
    </div>
  )
}

export default Home

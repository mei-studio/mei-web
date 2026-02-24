const Contact = () => {
  return (
    <div className="space-y-10 text-left mt-4 mb-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">conversemos</h1>
        <p>
          la puerta está abierta. ya sea que tengas un proyecto en mente, una
          necesidad específica o simplemente quieras intercambiar ideas.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">
          ¿qué tipo de colaboración buscas?
        </h2>

        <div className="space-y-4">
          <div className="rounded-lg border-2 border-gray-200 p-4 transition-colors hover:border-blue-700">
            <h3 className="mb-2 font-semibold text-gray-900">
              para desarrolladores
            </h3>
            <p className="text-sm text-gray-600">
              herramientas y soluciones digitales propias para optimizar tu
              flujo de trabajo
            </p>
          </div>

          <div className="rounded-lg border-2 border-gray-200 p-4 transition-colors hover:border-blue-700">
            <h3 className="mb-2 font-semibold text-gray-900">
              para comunidades y organizaciones
            </h3>
            <p className="text-sm text-gray-600">
              desarrollo de proyectos a la medida: desde páginas web hasta
              aplicaciones personalizadas
            </p>
          </div>

          <div className="rounded-lg border-2 border-gray-200 p-4 transition-colors hover:border-blue-700">
            <h3 className="mb-2 font-semibold text-gray-900">
              para conversación abierta
            </h3>
            <p className="text-sm text-gray-600">
              intercambio de ideas, código abierto y colaboración en proyectos
              compartidos
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">contáctanos</h2>
        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              nombre
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-colors focus:border-blue-700 focus:outline-none"
              placeholder="tu nombre"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              correo
            </label>
            <input
              type="email"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-colors focus:border-blue-700 focus:outline-none"
              placeholder="tu@correo.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              mensaje
            </label>
            <textarea
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-colors focus:border-blue-700 focus:outline-none"
              rows={6}
              placeholder="cuéntanos sobre tu proyecto o idea..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
          >
            enviar mensaje
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact

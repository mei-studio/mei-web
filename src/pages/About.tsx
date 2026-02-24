import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="space-y-8 text-left mb-10 mt-4">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">quiénes somos</h1>
        <p>
          en <span className="font-black text-blue-700">mei</span> entendemos la tecnología como un oficio con dos caras igual de
          importantes: la precisión de construir herramientas sólidas, y la
          vocación de ponerlas al servicio de los demás.
        </p>
      </section>

      <section>
        <p>
          por eso nuestro trabajo camina en <span className="italic text-gray-700">dos direcciones que se complementan</span>.
          por un lado, desarrollamos <span className="font-semibold text-gray-900">soluciones digitales propias</span>. herramientas
          pensadas para desarrolladores que buscan optimizar su flujo de trabajo,
          eliminar tareas repetitivas y concentrarse en lo que realmente importa.
          por el otro, colaboramos con <span className="font-semibold text-gray-900">comunidades, organizaciones y personas</span> que
          necesitan acompañamiento para llevar sus ideas al mundo digital. esto
          puede significar desde una página web hasta una aplicación a la medida,
          pasando por proyectos donde el código se comparte abiertamente porque
          entendemos que hay conocimientos que ganan valor cuando circulan.
        </p>
      </section>

      <section>
        <p>
          este enfoque mixto no es casualidad. creemos que la mejor manera de
          aprender y mejorar es alternar entre estos dos mundos: el del producto
          propio donde volcamos nuestra visión, y el de la colaboración externa
          donde nos enfrentamos a problemas nuevos, contextos distintos y
          necesidades reales. <span className="italic text-gray-700">uno alimenta al otro</span>.
        </p>
      </section>

      <section>
        <p>
          este proyecto nace en <span className="font-medium text-gray-800">méxico</span> con una convicción sencilla: la
          tecnología puede (y debe) tener un <span className="font-semibold text-gray-900">rostro humano</span>. creemos en el
          conocimiento que se comparte, en las ideas que florecen cuando hay
          diálogo y en el valor de lo local. no nos interesa operar desde una
          burbuja. queremos entender las necesidades reales de quienes nos rodean
          y, desde ahí, construir soluciones que aporten valor. ya sea mediante
          una herramienta que lanzamos para que cualquiera la use, o mediante un
          desarrollo pensado específicamente para alguien que confió en nosotros.
        </p>
      </section>

      <section>
        <p>
          nuestra forma de trabajar se basa en la <span className="font-semibold text-gray-900">colaboración honesta</span>.
          escuchamos, proponemos y desarrollamos con la misma cercanía con la que
          nos gustaría ser tratados. porque al final, lo que buscamos es que lo
          que hacemos tenga un impacto positivo y duradero. ya sea en la
          computadora de un desarrollador al otro lado del país, o en el sitio
          web de un proyecto comunitario que por fin tiene voz propia.
        </p>
      </section>

      <section>
        <p>
          este es un proyecto en construcción permanente, y queremos que la
          comunidad sea parte de él. no como espectadores, sino como{' '}
          <span className="font-medium text-gray-800">interlocutores</span>. porque las mejores ideas rara vez nacen en el
          aislamiento.
        </p>
      </section>

      <section>
        <p>
          ¿tienes una idea, una necesidad o simplemente quieres conversar?{' '}
          <Link
            to="/contact"
            className="font-semibold text-blue-600 underline decoration-blue-400 decoration-2 underline-offset-2 transition-colors hover:text-blue-800 hover:decoration-blue-600"
          >
            escríbenos
          </Link>
          . la puerta está abierta.
        </p>
      </section>
    </div>
  )
}

export default About

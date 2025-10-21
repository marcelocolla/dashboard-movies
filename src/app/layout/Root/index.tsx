import { Outlet } from 'react-router'
import { Navbar } from '~/app/components/Navbar'

export function LayoutRoot() {
  return (
    <main>
      <header>
        <h4>Marcelo Colla</h4>
        <a
          href="https://www.linkedin.com/in/marcelocolla/"
          target="_blank"
          rel="external nofollow"
          title="Marcelo Colla no Linkedin"
        >
          /in/marcelocolla
        </a>
      </header>

      <Navbar />

      <section>
        <Outlet />
      </section>
    </main>
  )
}

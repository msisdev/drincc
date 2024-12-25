import { $PATH } from "~/config"

type HeaderProps = {
  isLighten?: boolean
  bulbRoutePath?: string
}

export default function Header({ isLighten, bulbRoutePath }: HeaderProps) {
  return (
    <header className="header">
      <a href={$PATH.home}>
        <h1 className={`header__logo logo ${isLighten && "header__logo--lighten"}`}>
          Drin.cc
        </h1>
      </a>
      <a href={bulbRoutePath ?? $PATH.about}>
        <button className="header__about btn--ghost btn--round">
          <i className={`material-symbols-outlined ${isLighten && "icon--yellow"}`}>lightbulb</i>
        </button>
      </a>
		</header>
  )
}

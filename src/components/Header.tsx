import { $PATH } from "~/config"

type HeaderProps = {
  isLighten?: boolean
  bulbRoutePath?: string
}

export default function Header({ isLighten, bulbRoutePath }: HeaderProps) {
  let lit = isLighten
  return (
    <header className="header">
      <a href={$PATH.home} className="header__home-btn">
        <i className={`header__icon material-symbols-outlined ${lit ? "header__icon--lighten" : ""}`}>
          captive_portal
        </i>
        <h1 className={`header__logo logo ${lit ? "header__logo--lighten" : ""}`}>
          Drin.cc
        </h1>
      </a>
      <a href={bulbRoutePath ?? $PATH.about}>
        <button className="header__about btn--ghost btn--round">
          <i className={`material-symbols-outlined ${lit ? "icon--yellow" : ""}`}>lightbulb</i>
        </button>
      </a>
		</header>
  )
}

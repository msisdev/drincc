import { $PATH } from "~/config";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__card card">
        <i className="notfound__i icon--orange material-symbols-outlined">error</i>
        <p className="notfound__p">Oh no. We could not find your url.</p>
        <a href="https://imgur.com/gallery/pokedog-Sf9XN5m" target="_blank">
          <img className="notfound__img" src="/images/not-found.png" alt="staring dog" />
        </a>
      </div>

      <a href={$PATH.home}>
        <button className="notfound__return btn--md">
          <i className="material-symbols-outlined">undo</i>
        </button>
      </a>
    </div>
  )
}

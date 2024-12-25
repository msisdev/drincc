import { $PATH } from "~/config";

export default function KeyNotFound() {
  return (
    <div className="knf">
      <div className="knf__card card">
        <i className="knf__i icon--orange material-symbols-outlined">error</i>
        <p className="knf__p">Oh no. We could not find your url.</p>
        <a href="https://imgur.com/gallery/pokedog-Sf9XN5m" target="_blank">
          <img className="knf__img" src="/images/not-found.png" alt="staring dog" />
        </a>
      </div>

      <a href={$PATH.home}>
        <button className="knf__return btn--md">
          <i className="material-symbols-outlined">undo</i>
        </button>
      </a>
    </div>
  )
}

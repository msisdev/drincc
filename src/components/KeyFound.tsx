type KeyFoundProps = {
  url: string
}

export default function KeyFound({ url }: KeyFoundProps) {
  return (
    <div className="kf">
      <div className="kf__card card">
        <i className="kf__i icon--blue material-symbols-outlined">globe</i>
        <p className="kf__p">{url}</p>
        
      </div>

      <a href={url}>
        <button className="kf__go btn--md">
          {/* <i className="material-symbols-outlined"></i> */}
          Go
        </button>
      </a>
    </div>
  )
}
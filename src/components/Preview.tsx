type PreviewProps = {
  url: string
}

export default function Preview({ url }: PreviewProps) {
  return (
    <div className="preview">
      <div className="preview__card card">
        <i className="preview__i material_symbols-outlined">public</i>
        <p className="preview__url">{url}</p>
      </div>
    </div>
  )
}

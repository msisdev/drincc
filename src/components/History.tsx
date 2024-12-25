import { useStore } from "@nanostores/react"
import { useState } from "react"
import { $conversions } from "~/store/conversion"

export default function History() {
  const conversions = useStore($conversions)
  return (
    <div className="history">
      {conversions.map((v, i) => (
        <div className="history__card" key={`history__card-${i}`}>
          <p className="history__index">#{i+1}</p>
          <CopyButton content={v.url} className="history__btn history__url" />
          <i className="material-symbols-outlined history__arrow">arrow_forward</i>
          <CopyButton content={v.key} className="history__btn history__key" />
        </div>
      ))}
    </div>
  )
}

type CopyButtonProps = {
  content: string
  className?: string
}

function CopyButton({ content, className }: CopyButtonProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleClick = () => {
    navigator.clipboard.writeText(content).then(() => {
      setIsClicked(true)
      setTimeout(() => setIsClicked(false), 1000)
    }).catch(e => {
      // Do nothing
    })
  }

  return (
    <button className={className} onClick={handleClick} title={content}>
      {content}
      <i className="material-symbols-outlined">
        {isClicked ? "check" : "content_copy"}
      </i>
    </button>
  )
}
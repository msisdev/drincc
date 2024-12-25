import { useCallback, useState } from "react"
import { $PATH, $POLICY } from "~/config"
import api from "~/pages/s/config"
import { addConversion } from "~/store/conversion"

const tooltips: Record<keyof typeof api.req.options, string> = {
  short: "uppercases",
  micro: "upper-lower-number",
  words: "english words"
}

const infoTooltip = `Shortened URL will last for ${$POLICY.kvTTLInDays} days after generation and each activation.`

export default function Submit() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const res = await fetch($PATH.submit, {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        const parsed = api.res.schema.safeParse(await res.json())
        if (parsed.error) {
          throw parsed.error
        }

        let key = parsed.data.key
        let url = formData.get(api.req.names.url)
        if (!url) {
          throw new Error("Impossible error")
        }

        addConversion({ key, url: url.toString() })
      }
    } catch (e) {
      console.error("error:", e)
    }

    setIsSubmitting(false)
  }, [])
  
  return (
    <form
      className="submit"
      onSubmit={handleSubmit}
    >
      <div className="submit__row1">
        <div className="input">
          <input className="input__field" type="url" name={api.req.names.url} />
        </div>
        <SubmitButton className="submit__btn btn--md" isSubmitting={isSubmitting} />
      </div>

      <div className="submit__row2">
        <div className="checkbox tooltip">
          <label
            htmlFor="checkbox__field"
            className="checkbox__label"
          >
            {api.req.names.preview}
          </label>
          <input 
            className="checkbox__field"
            type="checkbox"
            id="checkbox__field"
            name={api.req.names.preview}
          />
          <span className="tooltip__text">You can check the url before redirection.</span>
        </div>

        <div className="max" />

        <div className="submit__radio">
          {Object.keys(api.req.options).map((option, idx) => (
            <div className="radio tooltip" key={`submit__option-${option}`}>
              <label
                className="radio__label"
                htmlFor={`radio__field-${option}`}
              >{option}</label>
              <input
                className="radio__field"
                id={`radio__field-${option}`}
                type="radio"
                name={api.req.names.option}
                value={option}
                defaultChecked={idx == 0}
              />
              <span className="tooltip__text">
                {tooltips[option as keyof typeof tooltips] ?? ""}
              </span>
            </div>
          ))}
        </div>
        
        <div className="tooltip">
          <i className="material-symbols-outlined">info</i>
          <span className="tooltip__text">{infoTooltip}</span>
        </div>
      </div>
    </form>
  )
}

type SubmitButtonProps = {
  isSubmitting: boolean
  className?: string
}
function SubmitButton({ isSubmitting, className }: SubmitButtonProps) {
  return (
    <button
      className={className}
      type="submit"
    >
      {isSubmitting ? <div className="spinner"></div> : "🪄"}
    </button>
  )
}

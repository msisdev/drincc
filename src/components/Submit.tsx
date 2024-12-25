import { $PATH, $POLICY } from "~/config"
import api from "~/pages/s/config"

const tooltips: Record<keyof typeof api.req.options, string> = {
  short: "uppercases",
  micro: "upper-lower-number",
  words: "english words"
}

const infoTooltip = `Shortened URL will last for ${$POLICY.kvTTLInDays} days after generation and each activation.`

export default function Submit() {
  return (
    <form
      className="submit"
      method="POST"
      action={$PATH.submit}
    >
      <div className="submit__row1">
        <div className="input">
          <input className="input__field" type="text" />
        </div>
        <button
          className="btn--md"
          type="submit"
        >Submit</button>
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
          />
          <span className="tooltip__text">You can check the url before redirection.</span>
        </div>

        <div className="max" />

        <div className="submit__radio">
          {Object.keys(api.req.options).map(option => (
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

export default function About() {
  return (
    <div className="about">
      <h2><Logo /> - A URL Shortener</h2>

      <section>
        <h3>What is URL Shortener?</h3>
        <p>
          URL Shortener is a convenient tool that generates a short URL from any URL, but pointing at the same website.
          <br />
          Ex) If you submit <code>https://some-long-url.com</code>, you'll get <code>https://drin.cc/WXYZ</code>
        </p>
        <p>
          
        </p>
        <p>
          Moreover, <Logo /> supports 3 different modes to generate links - <code>short</code>, <code>micro</code> and <code>words</code>.
          <br />
          Choose one that fits your usage.
        </p>
      </section>

      <section>

      </section>
    </div>
  )
}

function Logo() {
	return (
		<span className="logo logo--lighten">Drin.cc</span>
	)
}
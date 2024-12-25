const links = {
  astro: "https://astro.build/",
  react: "https://react.dev/",
  op: "https://open-props.style/",
  bem: "https://getbem.com/",
  cfkv: "https://developers.cloudflare.com/kv",
  cfpages: "https://pages.cloudflare.com/",
  guten: "https://www.gutenberg.org/",
}

export default function About() {
  return (
    <div className="about">
      <h2><Logo /> - A URL Shortener</h2>

      <section>
        <h3>What is URL Shortener?</h3>
        <div className="about__indent">
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
        </div>
        
      </section>

      <section>
        <h3>How <Logo /> is made?</h3>
        <ul>
          <li>frontend - <a href={links.astro}>astrojs</a> + <a href={links.react}>react</a></li>
          <li>style - css + <a href={links.op}>open props</a> + <a href={links.bem}>bem</a></li>
          <li>database - <a href={links.cfkv}>cloudflare kv</a></li>
          <li>cloud - <a href={links.cfpages}>cloudflare pages</a></li>
          <li>word dictionary - <a href={links.guten}>gutenberg project</a></li>
        </ul>
      </section>
    </div>
  )
}

function Logo() {
	return (
		<span className="logo logo--lighten">Drin.cc</span>
	)
}
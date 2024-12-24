export default function Submit() {
  return (
    <form className="submit">
      <div className="submit__row1">
        <input />
        <button>Submit</button>
      </div>

      <div className="submit__row2">
        <input type="checkbox" />

        <div>
          <label>small</label>
          <input type="radio" name="small" value="small" />
        </div>

        <div>
          <label>small</label>
          <input type="radio" name="small" value="small" />
        </div>

        <div>
          <label>small</label>
          <input type="radio" name="small" value="small" />
        </div>
      </div>
      
      
    </form>
  )
}

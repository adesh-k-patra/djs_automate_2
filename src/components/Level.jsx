export function Level ({ position, value, setValue }) {
  return (
    <div className={`mx-auto mt-2 w-1/6 cursor-pointer ${position <= value ? "slider-level-up" : "slider-level-down"}`} onClick={() => {
      setValue(position)
    }}></div>
  )
}
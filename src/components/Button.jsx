export default function Button({ direction, setTranslate }) {
  return (
    <div className="my-auto rounded-full w-24 h-24 bg-background flex justify-center cursor-pointer arrow border-white border-t-4" onClick={() => {
      if(direction === 'left'){
        setTranslate((translate) => {
          if(translate != 0){
            translate += 2;
          }
          return translate
        })
      } else {
        setTranslate((translate) => {
          if(translate != -2){
            translate -= 2;
          }
          return translate
        })
      }
    }}>
      {direction === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          viewBox="0 -960 960 960"
          width="50"
          className={`my-auto button-normal`}
        >
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          viewBox="0 -960 960 960"
          width="50"
          className={`my-auto button-normal`}
        >
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      )}
    </div>
  )
}

import { useEffect, useState } from "react"
import "./App.css"
import Button from "./components/Button"
import Slider from "./components/Slider"

function App() {
  const [valueSlider, setValueSlider] = useState(0)
  const [valueSelect, setValueSelect] = useState(0)
  const [translate, setTranslate] = useState(2)
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  useEffect(() => {
    const animateSlider = async () => {
      await delay(70)
      setTranslate(0)
    }
    animateSlider()
  }, [])
  useEffect(() => {
    const animateValues = async () => {
      for (let i = 1; i <= 8; i++) {
        setValueSelect(i)
        for (let j = i * 12; j <= i * 12 + 12; j++) {
          setValueSlider(j)
          await delay(5)
        }
      }
      for (let i = 8; i >= 0; i--) {
        setValueSelect(i)
        for (let j = i * 12; j >= i * 12 - 12; j--) {
          setValueSlider(j)
          await delay(7)
        }
      }
      setValueSlider(0)
    }
    animateValues()
  }, [translate])
  return (
    <div className="bg-background h-screen flex justify-center">
      <div className="py-6">
        <div
          className="w-96 h-3/4 rounded-3xl flex shrink-0 border-white border-t-4 white-shadow-large overflow-hidden relative"
          style={{ backgroundImage: `url(./1.png)`, backgroundSize: "100%" }}
        >
          <Slider
            type={1}
            translate={translate}
            slider={valueSlider}
            setSlider={setValueSlider}
          />
          <Slider
            type={2}
            translate={translate}
            value={valueSelect}
            setValue={setValueSelect}
          />
          <Slider
            type={2}
            translate={translate}
            value={valueSelect}
            setValue={setValueSelect}
          />
          <Slider
            type={1}
            translate={translate}
            slider={valueSlider}
            setSlider={setValueSlider}
          />
        </div>
        <div
          className="w-96 h-1/5 rounded-3xl flex justify-between mt-4 px-8 border-white border-t-2 white-shadow-small"
          style={{ backgroundImage: `url(./1.png)`, backgroundSize: "100%" }}
        >
          <Button direction="left" setTranslate={setTranslate} />
          <div className="text-center my-auto text-lg text-white ">
            SERVICE SETTINGS
          </div>
          <Button direction="right" setTranslate={setTranslate} />
        </div>
      </div>
    </div>
  )
}

export default App

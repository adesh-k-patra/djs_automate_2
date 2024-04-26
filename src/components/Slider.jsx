import { Level } from "./Level"
import ReactSlider from "react-slider"

export default function Slider({
  type,
  translate,
  value,
  setValue,
  slider,
  setSlider,
}) {
  return (
    <div
      className="w-48 rounded-l-3xl border-r-2 border-black grid grid-rows-1"
      style={{
        transform: `translate(${translate}00%)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      <div className="bg-background my-20 mx-12 w-24 rounded-full grid grid-rows-4 border-white border-t-4 slider">
        <div className="rounded-t-full flex justify-center">
          {type === 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="45"
              viewBox="0 0 384 512"
              className={`my-auto ${
                slider > 0 ? "slider-icon-up" : "slider-icon-down"
              }`}
            >
              <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 512 512"
              className={`my-auto ${
                value > 0 ? "slider-icon-up" : "slider-icon-down"
              }`}
            >
              <path d="M258.6 0c-1.7 0-3.4 .1-5.1 .5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224H29.4C13.2 224 0 237.2 0 253.4c0 1.7 .1 3.4 .5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480v2.6c0 16.2 13.2 29.4 29.4 29.4c1.7 0 3.4-.1 5.1-.5C344 495 396.4 409.7 381.5 322.7c-2.9-17-8.4-32.9-15.9-47.4L480 288h2.6c16.2 0 29.4-13.2 29.4-29.4c0-1.7-.1-3.4-.5-5.1C495 168 409.7 115.6 322.7 130.5c-17 2.9-32.9 8.4-47.4 15.9L288 32V29.4C288 13.2 274.8 0 258.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          )}
        </div>
        <div className={`row-span-2 relative grid grid-rows-1`}>
          {type === 1 ? (
            <ReactSlider
              className="flex justify-center w-full cursor-pointer"
              trackClassName="w-1/6 h-full rounded-full bg-black"
              thumbClassName={`cursor-pointer h-20px w-20px`}
              orientation="vertical"
              value={100 - slider}
              onChange={(newValue) => {
                setSlider(100 - newValue)
              }}
              onTouchMove={(newValue) => {
                setSlider(100 - newValue)
              }}
              renderTrack={(props, state) => {
                const isPrimaryTrack = state.index === 0
                return (
                  isPrimaryTrack && (
                    <div {...props}>
                      <div
                        style={{
                          backgroundColor: `#808080`,
                          height: `${state.value}%`,
                          borderRadius: `10px 10px ${
                            state.value === 100 ? "10px 10px" : "0px 0px"
                          }`,
                        }}
                      />
                      <div
                        style={{
                          height: `${100 - state.value}%`,
                          backgroundColor: `rgb(100%,100%,100%)`,
                          boxShadow: `0 0 0.5px rgb(100%,100%,100%), 0 0 1px rgb(100%,100%,100%), 0 0 1.5px rgb(100%,100%,100%), 0 0 2.5px rgb(100%,100%,100%), 0 0 4px rgb(100%,100%,100%), 0 0 16px rgb(100%,100%,100%)`,
                          borderRadius: `${
                            state.value === 0 ? "10px 10px" : "0px 0px"
                          } 10px 10px`,
                        }}
                      />
                    </div>
                  )
                )
              }}
            />
          ) : (
            <div className="grid grid-rows-8">
              <Level position={8} value={value} setValue={setValue} />
              <Level position={7} value={value} setValue={setValue} />
              <Level position={6} value={value} setValue={setValue} />
              <Level position={5} value={value} setValue={setValue} />
              <Level position={4} value={value} setValue={setValue} />
              <Level position={3} value={value} setValue={setValue} />
              <Level position={2} value={value} setValue={setValue} />
              <Level position={1} value={value} setValue={setValue} />
            </div>
          )}
        </div>
        <div className="rounded-b-full flex justify-center">
          {type === 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 512 512"
              className={`my-auto slider-icon-up`}
            >
              <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="45"
              viewBox="0 0 448 512"
              className={`my-auto slider-icon-up`}
            >
              <path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

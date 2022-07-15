import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import CarouselSlide from "../project/carousel-slide"
import { project } from "../../lib/models/project"

export default function Carousel({type, items}) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 10000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  const slides = [];
  if (type === "projects") {
      for (let i = 0; i < items.length; i++) {
        let item = new project(i, items[i].name, items[i].description, items[i].url, items[i].logo, items[i].image);
        slides.push(item);
      }
    }

  return (
    <div ref={sliderRef} className="keen-slider">
         {slides.map((slide) => (
            <CarouselSlide 
                key={slide.name}
                project={slide}
            />
        ))}
    </div>
  )
}

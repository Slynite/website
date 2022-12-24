import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ProjectCarouselSlide from "../project/carouselSlide"
import { Project } from "../../interfaces/interfaces"

type Props = {
  type: CarouselItemType,
  items: Project[] //add other types here when implementing new options
}

export enum CarouselItemType {
  Project
}

export default function Carousel({type, items}: Props) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: any
        let mouseOver: boolean = false
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

  if (type === CarouselItemType.Project) {
    return (
      <div ref={sliderRef} className="keen-slider">
           {items.map((slide) => (
              <ProjectCarouselSlide 
                  key={slide.name}
                  project={slide}
                  slideIndex={items.indexOf(slide)}
              />
          ))}
      </div>
    )
  } else {
    return(<></>)
  }
}

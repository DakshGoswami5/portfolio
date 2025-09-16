import Page1Bottom from "../components/Page1Bottom"
import HeroSection from "../components/HeroSection"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)

  const mouseMoving = (e) => {

      setxVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/20)

      setyVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/8)

  }

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3,
      ease:"power4.out"
    })
  },[xVal,yVal])


  return (
    <div id="home" onMouseMove={(e) =>{
      mouseMoving(e)}} className="h-screen relative bg-[#ffffff] flex items-center justify-center">
        <HeroSection abc={tiltRef}/>
        <Page1Bottom/>
    </div>
  )
}

export default Page1
import React from "react";
import gsap from "gsap";

import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function PlaygroundScreen() {
  const firstBox = useRef();
  const secBox = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".first-box .boxes",
      { opacity: 0, y: -10 },
      { opacity: 1, duration: 1, delay: 0.2, y: 0 }
    );
    tl.fromTo(
      ".second-box .boxes",
      {
        y: -60,
        opacity: 0,
        rotateZ: -20,
      },
      {
        y: 0,
        rotateZ: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.3,
      }
    );
    gsap.fromTo(
      ".third-box .boxes",
      {
        y: -100,
        opacity: 0,
        rotateZ: -20,
      },
      {
        y: 0,
        rotateZ: 0,
        opacity: 1,
        stagger: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".third-box",
          start: "top 500",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    gsap.to(".fourth-box", {
      background: "cyan",
      duration: 4,
      scrollTrigger: {
        trigger: ".fourth-box",
        pin: true,
        start: "top 10",
        end: "100 200",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <section className="play-wrapper">
      <div className="text-center">
        <div className="first-box bg-gray-800 h-screen flex justify-center items-center">
          <div className="boxes h-40 w-40 border bg-slate-400"></div>
          <div className="boxes h-40 w-40 border bg-slate-400"></div>
          <div className="boxes h-40 w-40 border bg-slate-400"></div>
          <div className="boxes h-40 w-40 border bg-slate-400"></div>
        </div>
        <div className="second-box  border-t-2 bg-gray-800 h-screen flex justify-center items-center ">
          {["T", "E", "X", "T"].map((item) => {
            return (
              <>
                <span className="boxes text-8xl font-plus font-extrabold text-white">
                  {item}
                </span>
              </>
            );
          })}
        </div>
        <div className="third-box  border-t-2 bg-gray-800 h-screen flex justify-center items-center ">
          {["S", "C", "R", "O", "L", "L"].map((item) => {
            return (
              <>
                <span className="boxes text-8xl font-plus font-extrabold text-white">
                  {item}
                </span>
              </>
            );
          })}
        </div>
        <div>
          <div className="fourth-box border-4 border-green-700 bg-gray-800 h-screen flex justify-center items-center">
            <div className="boxes h-32 w-32 bg-white  border-cyan-400 border-2"></div>
            <div className="boxes h-32 w-32 bg-white  border-cyan-400 border-2"></div>
            <div className="boxes h-32 w-32 bg-white  border-cyan-400 border-2"></div>
            <div className="boxes h-32 w-32 bg-white  border-cyan-400 border-2"></div>
          </div>
        </div>
        <div>
          <div className="fifth-box border-4 border-green-700 bg-gray-800 h-screen flex justify-center items-center">
            <div className="boxes h-32 w-32 bg-white  border-cyan-400 border-2"></div>
            <div className="boxes h-32 w-32 bg-white  border-cyan-400 border-2"></div>
            <div className="boxes h-32 w-32 bg-white  border-cyan-400 border-2"></div>
            <div className="boxes h-32 w-32 bg-white  border-cyan-400 border-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

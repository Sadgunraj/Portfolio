/** @format */

import React from "react";
import lottie from "lottie-web";
import animationData from "../assets/lottie-circle.json";

export default function Background() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ref.current) return;
    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData as unknown as any,
    });

    return () => anim.destroy();
  }, []);

  return <div className='bg-lottie' ref={ref} aria-hidden='true' />;
}

import React from "react";
import { RiReactjsLine, RiNodejsFill,RiJavaFill,RiHtml5Fill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiJavascript,SiCss3 } from "react-icons/si";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-green-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsFill className="text-7xl text-green-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaFill className="text-7xl text-orange-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Fill className="text-7xl text-orange-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-500" />
        </div>

      </div>
    </div>
  );
};

export default Technologies;

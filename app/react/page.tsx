import React from "react";
import { ReactCardsdata } from "@/data";
import Card from "../components/cards/Card";

const PageReact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 mx-2">
        {ReactCardsdata.map((card) => (
            <Card id={card.id} title={card.title} url={card.url} imageurl={card.imageurl} tools={card.tools} live_demo={card.live_demo} demo={card.demo}  source_code={card.source_code}/>
        ))}
      </div>
    </div>
  );
};

export default PageReact;

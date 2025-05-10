"use client";
import { useEffect, useRef } from "react";

import { Renderer, Stave, Formatter, Voice, StaveNote } from "vexflow";

export function Partitura({ nota, clef = "treble" }) {
  const divRef = useRef(null);

  useEffect(() => {
    const renderer = new Renderer(divRef.current, Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(300, 300);
    const context = renderer.getContext();
    context.setFont("Arial", 10);
    context.scale(2, 2);
    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new Stave(25, 20, 100);
    // Add a clef and time signature.
    stave.addClef(clef);
    // .addTimeSignature("4/4");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    // Create the notes
    const notes = [
      // A quarter-note C.
      new StaveNote({ keys: [nota], duration: "w", align_center: true, clef }),
      // new StaveNote({ keys: ["/3"], duration: "w", align_center: true })
    ];

    // Create a voice in 4/4 and add above notes
    const voice = new Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 400 pixels.
    new Formatter().joinVoices([voice]).format([voice], 150);

    // Render voice
    voice.draw(context, stave);
    return () => {
      if (divRef.current) divRef.current.innerHTML = "";
    };
  }, [Renderer, Stave, divRef, nota]);

  return <div ref={divRef}></div>;
}

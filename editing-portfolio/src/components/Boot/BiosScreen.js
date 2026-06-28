import "./BiosScreen.css";
import { useEffect, useState } from "react";

const biosLines = [
  { text: "Munch_Bunch BIOS Revision 2.4", delay: 500 },
  { text: "", delay: 200 },
  { text: "CPU: Creative Processor 400MHz ........ OK", delay: 400 },
  { text: "Memory Test: 65536KB ................. OK", delay: 600 },
  { text: "Checking IDE Devices...", delay: 700 },
  { text: "Primary Master: Projects HDD ........ OK", delay: 700 },
  { text: "Secondary Master: CD-ROM ............ OK", delay: 700 },
  { text: "", delay: 300 },
  { text: "ASCII_PLACEHOLDER", delay: 1200 },
  { text: "", delay: 300 },
  { text: "Initializing Munch_Bunch OS v1.0", delay: 800 },
  { text: "Press DEL to enter Setup", delay: 1200 },
];

function BiosScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function bootSequence() {
      const output = [];

      for (const line of biosLines) {
        if (cancelled) return;

        if (line.text === "ASCII_PLACEHOLDER") {
          output.push("ASCII_PLACEHOLDER");
          setVisibleLines([...output]);

          await new Promise(r => setTimeout(r, line.delay));
          continue;
        }

        let current = "";

        output.push("");

        for (const letter of line.text) {
          if (cancelled) return;

          current += letter;
          output[output.length - 1] = current;

          setVisibleLines([...output]);

          await new Promise(r => setTimeout(r, 18));
        }

        await new Promise(r => setTimeout(r, line.delay));
      }

      await new Promise(r => setTimeout(r, 2000));

      if (!cancelled && onComplete) {
        onComplete();
      }
    }

    bootSequence();

    return () => {
      cancelled = true;
    };
  }, [onComplete]);

  return (
    <div className="bios-screen">
      <div className="bios-content">
        {visibleLines.map((line, index) => {
          if (line === "ASCII_PLACEHOLDER") {
            return (
              <pre key={index}>
{`
                   .          
     = ....:=======+ =        
    +.................:-      
     = .. ..... .-... ...=.   
       =.@.@=@%. =%@.-%..==   
      ==.@..*. %:.=.=@@@+=:   
      ==.@..@..+*.@@ .@.===   
     :==.@**+=.=   . :=%==+   
    ====.@@ @* :-..  .*.==-   
      +=.@@ :.*.@:..@:@#==    
      +=@@..@.@@##.#@.@.==    
      +=.@@...@.. ......=     
      ===+===:........ .=     
          +==:========.       
                              
`}
              </pre>
            );
          }

          return <div key={index}>{line}</div>;
        })}

        <span className="cursor">█</span>
      </div>
    </div>
  );
}

export default BiosScreen;
import { useRef, useEffect, useState } from 'react';

export const Editor = () => {
  const [buf, setBuf] = useState<string[]>(["\u00A0\u00A0"]);
  const [curPos, setCurPos] = useState<number>(0);

  function insertAt<T>(arr: T[], index: number, newItem: T): T[] {
    return [...arr.slice(0, index), newItem, ...arr.slice(index)];
  }

  function removeAt<T>(arr: T[], index: number): T[] {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  function isAsciiChar(str: string): boolean {
    return str.length === 1 && str.charCodeAt(0) <= 127;
  }

  const bufRef = useRef<string[]>([""]);
  useEffect(() => {
    bufRef.current = buf;
  }, [buf]);

  const curPosRef = useRef(0);
  useEffect(() => {
    curPosRef.current = curPos;
  }, [curPos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      var newBuf;
      switch (e.key) {
        case "ArrowRight":
          setCurPos(curPos => curPos + 1);
          break;
        case "ArrowLeft":
          setCurPos(curPos => curPos - 1);
          break;
        case "Backspace":
          if (curPosRef.current == 0) break;
          setBuf(buf => removeAt(buf, curPosRef.current - 1));
          setCurPos(curPos => curPos - 1);
          break;
        case " ":
          newBuf = insertAt(bufRef.current, curPosRef.current, "\u00A0\u00A0");
          setBuf(newBuf);
          bufRef.current = newBuf;
          setCurPos(curPos => curPos + 1);
          break;
        default:
          if (!isAsciiChar(e.key)) break;
          newBuf = insertAt(bufRef.current, curPosRef.current, e.key);
          setBuf(newBuf);
          bufRef.current = newBuf;
          setCurPos(curPos => curPos + 1);
      }
      setCurPos(curPos => Math.max(0, Math.min(curPos, bufRef.current.length - 1)));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-row">
      {buf.map((c, i) => (
        <span key={i} className={i == curPos ? "bg-yellow-300" : ""}>{c}</span>
      ))}
    </div>
  );
}

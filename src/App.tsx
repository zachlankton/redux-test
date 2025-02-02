import { DarkModeButton2 } from "./components/DarkModeButton2";
import { DarkModeDisplay2 } from "./components/DarkModeDisplay2";
import { usePersistentKvState } from "./hooks/useKvState";

function App() {
  const [show, setShow] = usePersistentKvState("show", false);
  const [show2, setShow2] = usePersistentKvState("show2", false);
  const [show3, setShow3] = usePersistentKvState("show3", false);

  return (
    <>
      <h1>Redux Test</h1>
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show && (
        <div>
          <button onClick={() => setShow2(!show2)}>show/hide</button>
          {show2 && <DarkModeButton2 />}
          <button onClick={() => setShow3(!show3)}>show/hide</button>
          {show3 && <DarkModeDisplay2 />}
        </div>
      )}
    </>
  );
}

export default App;

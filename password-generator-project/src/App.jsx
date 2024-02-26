import React, { useCallback, useEffect, useRef, useState } from "react";

// Component for displaying the "Copied to clipboard!" message
function CopyMessage({ showMessage }) {
  // Render the message if showMessage is true
  return showMessage ? (
    <div className="fixed bottom-10 font-semibold right-10 bg-custom-green text-custom-background p-2 rounded">
      Copied to clipboard!
    </div>
  ) : null;
}

// Main App component
function App() {
  // State hooks for managing password generation options and message display
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState();
  const [showMessage, setShowMessage] = useState(false);

  // Reference to the password input field
  const passwordRef = useRef(null);

  // Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setShowMessage(true); // Display the message
    setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
  }, [password]);

  // Function to generate password based on options
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Generate password when length or options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      {/* Main layout */}
      <div className="flex justify-center items-center h-screen w-full">
        <div className="w-full md:max-w-md md:px-10 max-w-sm shadow-xl rounded-lg px-1 py-3 bg-custom-green h-1/3 flex flex-col gap-5 justify-center">
          <h1 className="text-center font-bold text-2xl  text-custom-background tracking-wide">
            Password Generator
          </h1>
          <div className="flex px-5 md:px-2">
            {/* Password input field */}
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              className="outline-none w-full py-1 px-3 rounded-s-lg"
              ref={passwordRef}
            />
            {/* Copy button */}
            <button
              className="bg-blue-700 text-white font-semibold text-center px-3 py-0.5 outline-none shrink-0 rounded-e-lg"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          {/* Options section */}
          <div className="flex text-sm gap-x-2 items-center justify-center">
            {/* Length range input */}
            <div className="flex items-center gap-x-1 ">
              <input
                type="range"
                min={8}
                max={32}
                value={length}
                className="cursor-pointer mt-1 custom-range"
                onChange={(event) => {
                  setLength(event.target.value);
                }}
              />
              <label className="font-bold text-custom-background">
                Length: {length}
              </label>
            </div>
            {/* Numbers checkbox */}
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="" className="font-bold text-custom-background">
                Numbers
              </label>
            </div>
            {/* Characters checkbox */}
            <div className="flex items-center gap-x-1 ">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="" className="font-bold text-custom-background">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Render the CopyMessage component with showMessage prop */}
      <CopyMessage showMessage={showMessage} />
    </>
  );
}

export default App;

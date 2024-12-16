import React, { useCallback, useEffect, useState } from "react";

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [allowNumber, setAllowNumber] = useState(false);
    const [allowCharacter, setAllowCharacter] = useState(false);
    const [password, setPassword] = useState("");
  
    const generatePass = () => {
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (allowNumber) str += "0123456789";
      if (allowCharacter) str += "{[()}]$%^&*#@!";
  
      let generatedPassword = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * str.length);
        generatedPassword += str.charAt(randomIndex);
      }
  
      setPassword(generatedPassword);
    };

    useEffect(()=>{generatePass()},[length, allowCharacter, allowNumber])

  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div>
      <h3>Password Generator</h3>
      <input type="text" placeholder="Password" value={password} readOnly />
      <button onClick={copyToClipboard}>Copy</button>
      <div>
        <label>
          Length: {length}
          <input
            type="range"
            min={4}
            max={50}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={allowNumber}
              onChange={() => setAllowNumber((prev) => !prev)}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={allowCharacter}
              onChange={() => setAllowCharacter((prev) => !prev)}
            />
            Include Special Characters
          </label>
        </div>
        <button onClick={generatePass}>Generate Password</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;

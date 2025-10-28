import { useState } from "react";

function useToggle(initialValue = false) {
  const [isVisible, setIsVisible] = useState(initialValue);
  const toggle = () => setIsVisible(prev => !prev);
  return [isVisible, toggle];
}

export default useToggle;
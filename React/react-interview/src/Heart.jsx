import { useEffect } from "react";

const Heart = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log('Hello')
    }, 1000)

    return () => {  
        clearInterval(id);
    }
  }, [])
  return (
    <div>123</div>
  )
}

export default Heart;
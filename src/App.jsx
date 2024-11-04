import Button from "./atoms/Button";
import Input from "./atoms/Input";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center ">
      <Input  placeholder="Enter your name" type="text"/>
      <Input  placeholder="Enter your email" type="email" classname="bg-white"/>
      <Input placeholder="Enter your password" type="password" classname="bg-white"/>
      <Button />

    </div>
  )
}

export default App;
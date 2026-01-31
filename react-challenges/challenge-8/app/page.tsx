import { Die } from "./components/Die";

export default function Home() {

  const getDiceValues = () => {
    const values = []
    for (let i = 0; i < 10; i++) values.push(Math.ceil(Math.random() * 6))
    return values
  }
  console.log(getDiceValues())

  return (
    <main className="w-[95vw] h-[90vh] bg-white rounded-[0.625rem] flex justify-center items-center">
      <div className="grid grid-cols-5 gap-10 w-[80%]">
        <Die value={1}/>
        <Die value={1}/>
        <Die value={2}/>
        <Die value={6}/>
        <Die value={4}/>
        <Die value={1}/>
        <Die value={3}/>
        <Die value={3}/>
        <Die value={5}/>
        <Die value={2}/>
      </div>
    </main>
  );
}

import Card from "@/components/Card"
import Button from "../components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>

      <Card />

      <div className="flex flex-col items-center gap-4 p-10">
        <h1 className="text-2xl font-bold mb-4">Landing Page Buttons</h1>

        <div className="space-y-2 flex flex-row gap-4 flex-wrap justify-center items-center">
        <Button title="Small Button" size="small" shape="rounded-sm" styles="bg-red-500" />
        <Button title="Medium Button" size="medium" shape="rounded-md" styles="bg-green-500" />
        <Button title="Large Button" size="large" shape="rounded-full" styles="bg-blue-500" />
        </div>
      </div>
    </div>
  )
}
export default Landing
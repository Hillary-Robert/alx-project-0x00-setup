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
          <Button title="Small Rounded-sm" size="small" rounded="rounded-sm" />
          <Button title="Medium Rounded-md" size="medium" rounded="rounded-md" />
          <Button title="Large Rounded-full" size="large" rounded="rounded-full" />
          <Button title="Large Rounded-sm" size="large" rounded="rounded-sm" />
          <Button title="Small Rounded-full" size="small" rounded="rounded-full" />
        </div>
      </div>
    </div>
  )
}
export default Landing
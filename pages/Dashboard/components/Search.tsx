import Input from "@/component/Input";

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        id={""} // className="h-9 md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}

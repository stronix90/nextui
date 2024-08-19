import Filters from "@/components/Filters";
import ItemDetail from "@/components/ItemDetail";
import Messages from "@/components/Messages";
import TableUI from "@/components/Table";
import UserTools from "@/components/UserTools";

export default function Home() {
  return (
    <main
      className="grid grid-cols-[1fr_auto] bg-background"
      style={{ height: "calc(100% - 56px)" }}
    >
      <div className="flex flex-col gap-1 bg- border-r-1">
        <Filters />
        <TableUI />
        <UserTools />
      </div>

      <div className="min-w-[300px] w-[400px] ">
        <Messages />
        <ItemDetail />
      </div>
    </main>
  );
}

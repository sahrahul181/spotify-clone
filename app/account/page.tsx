
import Header from "@/components/Header";
import AccountContent from "./components/AccountContent";

const page = () => {
  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <div className="text-white text-3xl font-semibold">
            Account Setting
          </div>
        </div>
      </Header>
      <AccountContent />
    </div>
  );
};

export default page;

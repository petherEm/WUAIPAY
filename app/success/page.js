import UserReceipt from "@/components/shared/UserReceipt";

const SuccessPage = () => {
  return (
    <div className="bg-gray-300 text-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between p-2 md:p-10">
        <UserReceipt />
      </div>
    </div>
  );
};

export default SuccessPage;

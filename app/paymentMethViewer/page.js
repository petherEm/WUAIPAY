import Image from "next/image";
import { getPaymentMethods } from "@/lib/actions/getPMethods.action";

const PaymentViewer = async () => {
  const response = await getPaymentMethods();
  console.log(response.data.data);

  return (
    <div>
      {response.data.data.map((i) => (
        <div>
          <p>{i.name}</p>
          <p>{i.id}</p>
          <Image src={i.imgUrl} alt={i.name} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

export default PaymentViewer;

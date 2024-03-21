import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { CheckCircle } from "lucide-react";

import { Button } from "../../ui/button";

const features = [
  {
    name: "Cost | Cost structure",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Delivery Time",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Integration ease",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Tech specs",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Used by competition?",
    availableMTApp: true,
    availableBankApp: true,
  },
];

const RTCompare = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>
              <div className="bg-black min-h-[160px] p-6 flex flex-col gap-y-4 items-center justify-center">
                <h2 className="text-white">PKO BP Real Time</h2>
                <Button className="rounded-full bg-[#fbd721] text-black">
                  Download
                </Button>
              </div>
            </TableHead>
            <TableHead>
              <div className=" bg-[#fbd721]  min-h-[160px] p-6 flex flex-col gap-y-4 items-center justify-center">
                <h2 className="text-black text-center">P24</h2>
                <Button className="rounded-full bg-black text-[#fbd721]">
                  Download
                </Button>
              </div>
            </TableHead>
            <TableHead>
              <div className=" bg-[#fbd721]  min-h-[160px] p-6 flex flex-col gap-y-4 items-center justify-center">
                <h2 className="text-black text-center">Alternative</h2>
                <Button className="rounded-full bg-black text-[#fbd721]">
                  Download
                </Button>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name}>
              <TableCell className="font-medium max-w-[400px]">
                {feature.name}
              </TableCell>
              <TableCell className="">
                {feature.availableMTApp ? (
                  <CheckCircle className="text-green-600" />
                ) : (
                  "No"
                )}
              </TableCell>
              <TableCell className="">
                {feature.availableBankApp ? (
                  <CheckCircle className="text-green-600" />
                ) : (
                  "No"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-10">
        <p className="text-sm">
          ***Once you register, your money transfer app account will be closed
          and details transferred automatically to the Digital Banking app,
          allowing you to access the same money transfer features and new
          Digital Banking benefits.
        </p>
      </div>
    </section>
  );
};

export default RTCompare;

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

import { Button } from "../ui/button";

const features = [
  {
    name: "Send money internationally 24/7",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Choose how you want your receiver to get money: bank account, cash pickup at agent location, Mobile Wallet2, direct to card",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Track your money transfer and view exchange rates real time",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Quick repeat money transfers",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "International money transfers + Everyday banking in one place",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Plan and manage your finances easily with a goal savings account",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Appealing interest rates",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Bank in multiple currencies",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Send money instantly and fee-free4 to Western Union Digital Banking users",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Receive a free Visa Platinum debit card",
    availableMTApp: true,
    availableBankApp: true,
  },
  {
    name: "Unlock multiple perks from Visa debit card partners",
    availableMTApp: true,
    availableBankApp: true,
  },
];

const CompareTable = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>
              <div className="bg-black min-h-[160px] p-6 flex flex-col gap-y-4 items-center justify-center">
                <h2 className="text-white">Western Union app</h2>
                <Button className="rounded-full bg-[#fbd721] text-black">
                  Download
                </Button>
              </div>
            </TableHead>
            <TableHead>
              <div className=" bg-[#fbd721]  min-h-[160px] p-6 flex flex-col gap-y-4 items-center justify-center">
                <h2 className="text-black text-center">
                  Western Union <br />
                  Digital Banking app
                </h2>
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

export default CompareTable;

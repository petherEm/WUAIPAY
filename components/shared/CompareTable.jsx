import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

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
]

const CompareTable = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-full sm:w-auto min-w-[200px] sm:min-w-[300px]"></TableHead>
              <TableHead className="min-w-[180px] sm:min-w-[200px]">
                <div className="bg-black min-h-[140px] sm:min-h-[160px] p-4 sm:p-6 flex flex-col gap-y-3 sm:gap-y-4 items-center justify-center rounded-lg">
                  <h2 className="text-white text-sm sm:text-base font-medium text-center">Western Union app</h2>
                  <Button className="rounded-full bg-[#fbd721] text-black text-xs sm:text-sm px-4 py-2">
                    Download
                  </Button>
                </div>
              </TableHead>
              <TableHead className="min-w-[180px] sm:min-w-[200px]">
                <div className="bg-[#fbd721] min-h-[140px] sm:min-h-[160px] p-4 sm:p-6 flex flex-col gap-y-3 sm:gap-y-4 items-center justify-center rounded-lg">
                  <h2 className="text-black text-sm sm:text-base font-medium text-center">
                    Western Union <br />
                    Digital Banking app
                  </h2>
                  <Button className="rounded-full bg-black text-[#fbd721] text-xs sm:text-sm px-4 py-2">
                    Download
                  </Button>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature) => (
              <TableRow key={feature.name}>
                <TableCell className="font-medium max-w-[400px] text-sm sm:text-base py-4">{feature.name}</TableCell>
                <TableCell className="text-center py-4">
                  {feature.availableMTApp ? (
                    <div className="flex justify-center">
                      <CheckCircle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <span className="text-sm sm:text-base">No</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-center py-4">
                  {feature.availableBankApp ? (
                    <div className="flex justify-center">
                      <CheckCircle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <span className="text-sm sm:text-base">No</span>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-6 sm:mt-10 px-2 sm:px-0">
        <p className="text-xs sm:text-sm text-muted-foreground">
          ***Once you register, your money transfer app account will be closed and details transferred automatically to
          the Digital Banking app, allowing you to access the same money transfer features and new Digital Banking
          benefits.
        </p>
      </div>
    </section>
  )
}

export default CompareTable

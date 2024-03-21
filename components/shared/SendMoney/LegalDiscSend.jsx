import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LegalDiscSend = () => {
  return (
    <section className="">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="">
            Legal disclaimers and important info
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Service and funds may be delayed or unavailable depending on
              certain factors including the Service selected, the selection of
              delayed delivery options, amount sent, destination country,
              currency availability, regulatory issues, consumer protection
              issues, identification requirements, delivery restrictions, agent
              location hours, and differences in time zones (collectively,
              “Restrictions”). Additional restrictions may apply; see our terms
              and conditions for details.
            </p>
          </AccordionContent>
          <AccordionContent>
            <p>
              Western Union also makes money from currency exchange. When
              choosing a money transmitter, carefully compare both transfer fees
              and exchange rates. Fees, foreign exchange rates and taxes may
              vary by brand, channel, and location based on a number of factors.
              Fees and rates subject to change without notice.
            </p>
          </AccordionContent>
          <AccordionContent>
            <p>
              If you're using a credit card, a card-issuer cash advance fee and
              associated interest charges may apply. To avoid these fees or for
              reduced fees, use a debit card or check other payment methods.
            </p>
          </AccordionContent>
          <AccordionContent>
            <p>Excludes receiver's bank holidays.</p>
          </AccordionContent>
          <AccordionContent>
            <p>
              Please use care when providing bank account information. Funds
              will be paid into in the bank account corresponding to account
              number you provide. Please Note: The receiver's account must be a
              local currency payout account
            </p>
          </AccordionContent>
          <AccordionContent>
            <p>
              The price for each type of money transfer is based on many
              factors, such as the speed of the transfer, destination of funds,
              and other factors. Choose the funding method that works best for
              you.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default LegalDiscSend;

// components/demo/DemoExpectation.tsx
import Image from "next/image"
import DebugClient from "../DebugClient"

type DemoExpectationProps = {
  heading: string
  points: string[]
  rating: string
  whatsappIcon?: string
  partnerLogo?: string
}

export default function DemoExpectation({
  heading,
  points,
  rating,
  whatsappIcon,
  partnerLogo,
}: DemoExpectationProps) {

  return (
    <>
        <section className="container bg-background pt-16 xl:pt-20 mx-auto  max-w-10xl bg-background-yellow">
  
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-5">
    <div className="rounded-xl relative">
      {whatsappIcon && (
        <Image
          src={whatsappIcon}
          alt="WhatsApp icon"
            width={700}
            height={500}
            className="rounded-xl"
            // priority
        />
      )}

      {/* <h2 className="text-2xl font-semibold mb-4">{heading}</h2> */}

      {/* <ul className="space-y-4 text-white">
        {points.map((pt, idx) => (
          <li key={idx} className="list-disc list-inside">
            {pt}
          </li>
        ))}
      </ul> */}

      {/* <div className="mt-6">
        <p className="text-sm">{rating}</p>
        {partnerLogo && (
          <img
            src={partnerLogo}
            alt="Partner Logo"
            className="mt-2 w-auto h-6"
          />
        )}
      </div> */}
    </div>
    <div>
               <iframe
        src="/BookADemo.html"
        title="Book a Demo"
        width="100%"
        height= "700px"
        style={{ border: 'none' }}
      ></iframe>
    </div>
    </div>
    </section>
    </>
  )
}

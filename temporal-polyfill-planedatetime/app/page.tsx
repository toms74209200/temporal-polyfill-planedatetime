import { Temporal } from "temporal-polyfill";


export default function Home() {
  // const now = Temporal.PlainDateTime.from(Temporal.Now.zonedDateTimeISO("Asia/Tokyo")).toString(); // I actually want to use this
  const now = Temporal.Now.plainDateTimeISO("Asia/Tokyo")
  return (
    <main>
        <p>
          Now is {`${now}`}
        </p>
    </main>
  );
}

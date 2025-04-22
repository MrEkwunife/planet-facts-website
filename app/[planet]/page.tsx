"use client";

import Main from "./Main";
import { ButtonProvider } from "@/components/ButtonContext";
import ButtonGroup from "@/components/ButtonGroup";

export default function Page() {
  return (
    <section>
      <ButtonProvider>
        <ButtonGroup className={`flex justify-between pt-4 px-4 sm:hidden`} />
        <hr className="sm:hidden" />
        <Main>
          <ButtonGroup className="hidden sm:flex sm:flex-2/4 sm:flex-col sm:gap-3.5 " />
        </Main>
      </ButtonProvider>
    </section>
  );
}

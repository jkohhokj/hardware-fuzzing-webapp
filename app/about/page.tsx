import { subtitle, title } from "@/components/primitives";
import { Button, ButtonGroup } from "@heroui/button";
import { Link } from "@heroui/link";
import { ListboxSection } from "@heroui/listbox";
import { Divider } from "@heroui/divider";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { CustomCard } from "@/components/cards";

export default function AboutPage() {
  return (
    <div className="max-w-full">
      <div className="max-w-lg justify-self-center">
        <div>
          <h1 className={title()}>About</h1>
        </div>
        <div>
          Hardware vulnerabilities in processors are emerging at an alarming
          rate while current security measures struggle to keep up. Over my
          summer internship with{" "}
          <Link href="https://seth.engr.tamu.edu/">SETH Lab</Link>, I discover 6
          zero-day hardware vulnerabilities in open-source processors.
        </div>
        <br />
        <br />
        <br />

        <div>
          This site is a collection of projects and papers related to using
          hardware fuzzing on processors to find vulnerabilities.
        </div>
        <div>
          Maintained with caffeine ☕ and love ❤️ by{" "}
          <Link href="https://www.jkoh.dev/">Jayden Koh</Link>.
        </div>
      </div>
      <Divider className="my-4" />
    </div>
  );
}

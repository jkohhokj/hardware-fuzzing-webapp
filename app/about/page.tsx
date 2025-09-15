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

        <br />

        <div>
          This site is a collection of projects and papers related to using
          hardware fuzzing on processors to find vulnerabilities for the TACHS
          program.
        </div>
        <div>
          Maintained with caffeine ☕ and love ❤️ by{" "}
          <Link href="https://www.jkoh.dev/">Jayden Koh</Link>.
        </div>
        <Divider className="my-4" />
        <Divider className="my-4" />
        <h2 className="text-2xl">Fall '25 Instructors</h2>
        <ul>
          <li>Chen Chen: chenc@tamu.edu</li>
          <li>Stephen Muttathil: stephen7929@tamu.edu</li>
          <li>Jayden Koh: jkohhokj@tamu.edu</li>
        </ul>
      </div>
      <Divider className="my-4" />
    </div>
  );
}

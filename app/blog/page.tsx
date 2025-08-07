import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import {Link} from "@heroui/link";
export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <Card>
        <CardHeader>
          Integrating RSD & Superscalar CVA6
        </CardHeader>
        <CardBody>
          <Link href="/blog/summer25_jayden">Link</Link>
        </CardBody>
      </Card>
    </div>
  );
}

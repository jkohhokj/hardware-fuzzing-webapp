import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Fall 2025 Projects</h1>
      <br />
      <br />
      <br />
      <br />

          <div className="gap-4 grid grid-cols-2">
      <Card>
        <CardHeader>Aashikha Basappa</CardHeader>
        <CardBody>
          <Link href="">Link</Link>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Annie Li</CardHeader>
        <CardBody>
          <Link href="">Link</Link>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Karthikeyan Rajan</CardHeader>
        <CardBody>
          <Link href="">Link</Link>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Michael Hurtado</CardHeader>
        <CardBody>
          <Link href="">Link</Link>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Rodrigo Orozco</CardHeader>
        <CardBody>
          <Link href="">Link</Link>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Seshadithya Saravanan</CardHeader>
        <CardBody>
          <Link href="">Link</Link>
        </CardBody>
      </Card>
      </div>
    </div>
  );
}

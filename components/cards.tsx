import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

// Define the props interface for better type safety and clarity
interface CustomCardProps {
  title: string;
  subtitle: string;
  bodyText: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  link2: boolean;
  linkText2: string;
  linkHref2: string;
}

export const CustomCard = (CustomCardProps: any) => {
  return (
    <div className="">
      <Card fullWidth={true} isHoverable={true} className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <img
            alt="heroui logo"
            height={40}
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{CustomCardProps.title}</p>
            <p className="text-small text-default-500">
              {CustomCardProps.subtitle}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{CustomCardProps.bodyText}</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-between items-center">
          <div className="justify-self-start">
            <Link isExternal showAnchorIcon href={CustomCardProps.linkHref}>
              {CustomCardProps.linkText}
            </Link>
          </div>
          {CustomCardProps.link2 && (
            <div className="justify-self-end">
              <Link isExternal showAnchorIcon href={CustomCardProps.linkHref2}>
                {CustomCardProps.linkText2}
              </Link>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

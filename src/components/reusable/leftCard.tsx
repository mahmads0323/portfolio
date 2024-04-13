import portfolioItemType from "./portfolioItemType";
import StackCard from "./stackCard";

const LeftCard = ({
  title,
  description,
  image,
  stack,
  repositoryLink,
}: portfolioItemType) => {
  return (
    <div className="w-full flex">
      {/* content */}
      <div className="w-full flex flex-col bg-secondry rounded-lg shadow-md shadow-primary my-2 lg:w-[75%] lg:flex-row  lg:rounded-r-full lg:border-r lg:border-primary ">
        <div className="p-1 lg:w-[45%]">
          <img
            src={image}
            alt={image}
            className="h-full w-full rounded-lg border border-primary"
          />
        </div>
        <div className="p-4 flex flex-col gap-2 lg:w-[45%]">
          <h2 className="text-primary font-semibold text-base md:text-lg">
            Project: <span className="font-normal">{title}</span>
          </h2>
          <h3 className="text-textDecription font-semibold md:text-base">
            Description: <span className="font-normal">{description}</span>
          </h3>
          <div>
            <p className="inline-block text-textHeading font-semibold md:text-base">
              Stack:{" "}
            </p>
            {stack.map((item, index) => (
              <StackCard name={item} key={index} />
            ))}
          </div>
          <a
            href={repositoryLink}
            className="flex items-center gap-2 "
            target="_blank"
          >
            <i className="fa-brands fa-github text-lg md:text-xl lg:text-2xl"></i>
            <p className="text-xs underline text-textDecription hover:scale-105 md:text-sm">
              view code
            </p>
          </a>
        </div>
      </div>
      {/* empty space */}
      <div className="hidden lg:block lg:w-[25%]"></div>
    </div>
  );
};

export default LeftCard;
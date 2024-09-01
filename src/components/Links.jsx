import Link from "./Link.jsx";

function Links({ links }) {
  console.log(links);
  return (
    <>
      <div className="py-4 w-screen flex flex-col items-center ">
        {links.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </div>
    </>
  );
}

export default Links;

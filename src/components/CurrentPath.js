import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function CurrentPath({ product, group }) {
  const style = {
    textDecoration: "none",
  };
  return (
    <Breadcrumb className="breadcrumbs">
      <Link href="/" style={style}>
        Home&nbsp;{"/"}&nbsp;
      </Link>
      <Link href={`/category/[id]`} style={style} as={`/category/${group.url}`}>
        {group.nameUz}
        &nbsp;{"/"}&nbsp;
      </Link>
      {product && <Breadcrumb.Item active>{product.nameUz}</Breadcrumb.Item>}
    </Breadcrumb>
  );
}

export default CurrentPath;

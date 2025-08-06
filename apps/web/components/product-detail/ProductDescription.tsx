interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <section>
      <h2 className="font-style-large font-bold mb-sm">상세 설명</h2>
      <p className="font-style-medium font-medium whitespace-pre-wrap">{description}</p>
    </section>
  );
};

export default ProductDescription;

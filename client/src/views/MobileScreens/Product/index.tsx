import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard/ProductCard";
import CustomCollapse from "../../../components/Collapse/Collapse";
import ProductCarousel from "../../../components/Carousel/ProductCarousel/ProductCarousel";
import Styles from "./product.module.css";

interface ProductData {
  title: string;
  discount: string;
  description: string;
  discountedPrice: number;
  originalPrice: string;
  img: string[];
  colour: string[];
}

interface CollapseOption {
  header: string;
  description?: string;
  content: Array<{
    title: string | null;
    subContent: string;
  }>;
  categories?: string[];
}

const Product: React.FC = () => {
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [collapseOptions, setCollapseOptions] = useState<CollapseOption[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      if (productId) {
        try {
          const [productResponse, mediaResponse] = await Promise.all([
            axios.get(`http://localhost:4000/api/v1/products/${productId}`),
            axios.get(
              `http://localhost:4000/api/v1/products/${productId}/media/`
            ),
          ]);
          console.log(mediaResponse);
          const productData = productResponse.data;
          const mediaData = mediaResponse.data;

          const imageUrls = mediaData.map((mediaItem:any) => mediaItem.url);
          const mappedProductData: ProductData = {
            title: productData.name,
            discount: `${productData.discount}% off`,
            description: productData.description,
            discountedPrice:
              productData.price -
              (productData.price * productData.discount) / 100,
            originalPrice: productData.price.toString(),
            img: imageUrls,
            colour: [productData.color.code],
          };

          setProductData([mappedProductData]);

          const mappedCollapseOptions: CollapseOption[] = [
            {
              header: "Product Description",
              description: productData.description,
              content: [
                { title: "LENGTH", subContent: productData.length },
                {
                  title: "SLEEVE TYPE",
                  subContent: productData.sleeveTypes.join(", "),
                },
                { title: "FIT", subContent: productData.fit },
                { title: "PATTERN", subContent: productData.pattern },
                { title: "FABRIC", subContent: productData.fabric },
                { title: "TYPE OF WORK", subContent: productData.typeOfWork },
                { title: "NECKLINE", subContent: productData.neckline },
                {
                  title: "NO. OF COMPONENTS",
                  subContent: String(productData.numberOfComponents),
                },
              ],
              categories: productData.tags,
            },
            {
              header: "Composition & Care",
              content: [
                { title: "FABRIC", subContent: productData.fabric },
                { title: "CARE", subContent: "Dry Clean only" },
                { title: "TYPE OF WORK", subContent: productData.typeOfWork },
              ],
            },
            {
              header: "Disclaimer",
              content: [{ title: null, subContent: productData.disclaimer }],
            },
            {
              header: "EXCHANGE & RETURNS",
              content: [{ title: null, subContent: productData.returnPolicy }],
            },
          ];

          setCollapseOptions(mappedCollapseOptions);

          setImages(imageUrls);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      }
    };

    fetchData();
  }, [productId]);

  if (!productData || productData.length === 0) return <div>Loading...</div>;
  const handleColor = (clicked: string) => {
    console.log(clicked);
  };
  console.log(images);

  if (productData.length === 0) return <div>Loading...</div>;

  return (
    <Row justify="center" className={`${Styles.product}`}>
      <Col span={24}>
        {productData.map((item, index) => (
          <ProductCard
            key={index}
            data={item}
            view={"product"}
            onClick={() => console.log("Product clicked")}
            colors={(clickedColor) => handleColor(clickedColor)}
          />
        ))}
      </Col>

      <Col span={24} className="border-top border-1 border-bottom">
        <CustomCollapse collapseOptions={collapseOptions} />
      </Col>
      <Col>
        <ProductCarousel images={images} />
      </Col>
    </Row>
  );
};

export default Product;
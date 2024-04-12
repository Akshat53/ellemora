import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../../components/Admin/Heading";
import Styles from "./admin.module.css";
import AppInput from "../../components/AppInput/AppInput";
import AppSelect from "../../components/AppSelect/AppSelect";
import Tag from "../../components/Tag/Tag";
import FileUpload from "./ProductUploadeByExcel";

// Admin Component
const Admin: React.FC = () => {
  const [product, setProduct] = useState<any>({
    relationId: "",
    name: "",
    description: "",
    shortDescription: "",
    length: "",
    fit: "",
    sleeveTypes: [],
    pattern: "",
    components: [],
    numberOfComponents: "",
    neckline: "",
    fabric: "",
    typeOfWork: "",
    core: "",
    disclaimer: "",
    returnPolicy: "",
    price: "",
    discount: "",
    discountType: "",
    colorName: "",
    colorCode: "",
    sizes: [],
    categoryId: "",
    media: [],
    tags: [],
    primaryVariant: true,
    softDelete: false,
    isActive: true,
    masterProduct: null,
  });

  const [categories, setCategories] = useState<
    { value: string; label: string }[]
  >([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/categories"
        );
        setCategories(
          response.data.map((cat: any) => ({ value: cat._id, label: cat.name }))
        );
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setProduct({ ...product, [name]: value });
  };

  const handleTagChange = (newTags: string[]) => {
    setProduct({ ...product, tags: newTags });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product);
    // Submit your form data to the backend API here
  };

  return (
    <div className={Styles.container}>
      <Heading label="Product Upload" />
      <FileUpload />

      <form onSubmit={handleSubmit} className={Styles.admin}>
        {/* Relational ID */}
        <AppInput
          label="Relational ID"
          name="relationId"
          value={product.relationId}
          onChange={handleInputChange}
        />
      

        {/* Product Details */}
        <AppInput
          label="Name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
        <AppInput
          label="Short Description"
          name="shortDescription"
          value={product.shortDescription}
          onChange={handleInputChange}
        />
        <AppInput
          label="Length"
          name="length"
          value={product.length}
          onChange={handleInputChange}
        />
        <AppInput
          label="Fit"
          name="fit"
          value={product.fit}
          onChange={handleInputChange}
        />
        {/* ... Add inputs for all other fields ... */}

        {/* Category ID - Select */}
        <AppSelect
          label="Category"
          name="categoryId"
          value={product.categoryId}
          onChange={(e) => handleSelectChange(e.target.name, e.target.value)}
          options={categories}
        />

        {/* Tags */}
        <div className={Styles.tagsSection}>
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
          <button
            type="button"
            onClick={() => handleTagChange([...tags, "New Tag"])}
          >
            Add Tag
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className={Styles.submitButton}>
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default Admin;

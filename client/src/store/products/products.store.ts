import * as actions from "../../actiontypes/actiontypes";
import { Action } from "../../interface/store.interface";
import { updateObject } from "../../utils/store";

const initialState = {
  productsList: [],
  start: 0,
  limit: 10,
  page: 1,
  orderBy: 1,
  sortBy: "createdAt",
  selectedProduct: null,
  selectedProductOptions: [
    {
      header: "Product Description",
      description: "",
      content: [
        { title: "LENGTH", subContent: "" },
        {
          title: "SLEEVE TYPE",
          subContent: "",
        },
        { title: "FIT", subContent: "" },
        { title: "PATTERN", subContent: "" },
        { title: "FABRIC", subContent: "" },
        { title: "TYPE OF WORK", subContent: "" },
        { title: "NECKLINE", subContent: "" },
        {
          title: "NO. OF COMPONENTS",
          subContent: String(""),
        },
      ],
      categories: "",
    },
    {
      header: "Composition & Care",
      content: [
        { title: "FABRIC", subContent: "" },
        { title: "CARE", subContent: "" },
        { title: "TYPE OF WORK", subContent: "" },
      ],
    },
    {
      header: "Disclaimer",
      content: [{ title: null, subContent: "" }],
    },
    {
      header: "EXCHANGE & RETURNS",
      content: [{ title: null, subContent: "" }],
    },
  ],
};

const parseProductData = (product) => {
  let parsedData = {
    id: product._id,
    title: product.name,
    discount: `${product.discount}% off`,
    description: product.description,
    discountedPrice:
      product.price - ((product.price * product.discount) / 100).toFixed(2),
    originalPrice: product.price.toFixed(2),
    img: product.media.map((mediaItem) => mediaItem.url),
    colorsCode: product.color.code,
    colorName: product.color.name,
    shortDescription: product.shortDescription,
    length: product.length,
    sleeveTypes: product.sleeveTypes.map((sleevetype) => sleevetype),
    fit: product.fit,
    pattern: product.pattern,
    fabric: product.fabric,
    typeOfWork: product.typeOfWork,
    neckline: product.neckline,
    numberOfComponents: product.numberOfComponents,
    tags: product.tags,
    care: product.core,
    disclaimer: product.disclaimer,
    returnPolicy: product.returnPolicy,
    components: product.components.map((component) => component),
    
  };

  return parsedData;
};

const parseList = (data) => {
  let newData = {
    productsList: data.productsList.map((product: any) =>
      parseProductData(product)
    ),
    limit: data.limit,
    page: data.page,
    start: data.start,
  };
  return newData;
};

const selectProduct = (state, id) => {
  let selectedProduct = null;
  let selectedProductOptions = [];
  selectedProduct = state.productsList.filter((item) => item.id == id)[0];

  if (selectedProduct) {
    selectedProductOptions = [
      {
        header: "Product Description",
        description: selectedProduct.shortDescription,
        content: [
          { title: "LENGTH", subContent: selectedProduct.length },
          {
            title: "SLEEVE TYPE",
            subContent: selectedProduct.sleeveTypes.join(", "),
          },
          { title: "FIT", subContent: selectedProduct.fit },
          { title: "PATTERN", subContent: selectedProduct.pattern },
          { title: "FABRIC", subContent: selectedProduct.fabric },
          { title: "TYPE OF WORK", subContent: selectedProduct.typeOfWork },
          { title: "NECKLINE", subContent: selectedProduct.neckline },
          {
            title: "NO. OF COMPONENTS",
            subContent: String(selectedProduct.numberOfComponents),
          },
        ],
        categories: selectedProduct.tags,
      },
      {
        header: "Composition & Care",
        content: [
          { title: "FABRIC", subContent: selectedProduct.fabric },
          { title: "CARE", subContent: selectedProduct.core },
          { title: "TYPE OF WORK", subContent: selectedProduct.typeOfWork },
        ],
      },
      {
        header: "Disclaimer",
        content: [{ title: null, subContent: selectedProduct.disclaimer }],
      },
      {
        header: "EXCHANGE & RETURNS",
        content: [{ title: null, subContent: selectedProduct.returnPolicy }],
      },
    ];
    return { selectedProduct, selectedProductOptions };
  } else return {};
};

console.log(selectProduct)
const setProduct = (data: any) => {
  console.log(data, "datadatadatadatadatadata")
  let selectedProduct = null;
  let selectedProductOptions = [];
  selectedProduct = parseProductData(data.productDetails);

  if (selectedProduct) {
    selectedProductOptions = [
      {
        header: "Product Description",
        description: selectedProduct.shortDescription,
        content: [
          { title: "LENGTH", subContent: selectedProduct.length },
          {
            title: "SLEEVE TYPE",
            subContent: selectedProduct.sleeveTypes.join(", "),
          },
          { title: "FIT", subContent: selectedProduct.fit },
          { title: "PATTERN", subContent: selectedProduct.pattern },
          { title: "FABRIC", subContent: selectedProduct.fabric },
          { title: "TYPE OF WORK", subContent: selectedProduct.typeOfWork },
          { title: "NECKLINE", subContent: selectedProduct.neckline },
          {
            title: "NO. OF COMPONENTS",
            subContent: String(selectedProduct.numberOfComponents),
          },
        ],
        categories: selectedProduct.tags,
      },
      {
        header: "Composition & Care",
        content: [
          { title: "FABRIC", subContent: selectedProduct.fabric },
          { title: "CARE", subContent: selectedProduct.core },
          { title: "TYPE OF WORK", subContent: selectedProduct.typeOfWork },
        ],
      },
      {
        header: "Disclaimer",
        content: [{ title: null, subContent: selectedProduct.disclaimer }],
      },
      {
        header: "EXCHANGE & RETURNS",
        content: [{ title: null, subContent: selectedProduct.returnPolicy }],
      },
    ];
    return { selectedProduct, selectedProductOptions };
  } else return {};
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_LIST:
      return updateObject(state, parseList(action.data));
    case actions.SELECT_PRODUCT:
      return updateObject(state, selectProduct(state, action.data));
    case actions.GET_PRODUCT_DETAILS:
      return updateObject(state, setProduct(action.data));
    default:
      return state;
  }
};


export default reducer;

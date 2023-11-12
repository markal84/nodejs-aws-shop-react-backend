import { mockedProducts } from "../data/products";

export async function handler(event: any, product = mockedProducts) {
  try {
    const productId: string = event.pathParameters.productId;

    const productFound = product.find((p) => p.id === productId);

    if (!productFound) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Product not found" }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true,
        "Access-Control-Allow-Headers": true,
      },
      body: JSON.stringify(productFound),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err.message,
      }),
    };
  }
}

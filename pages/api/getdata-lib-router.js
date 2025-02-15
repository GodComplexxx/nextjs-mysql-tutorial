import { query } from "../../lib/db";

export default async function handler(req, res) {
  const id = req.body.id;
  try {
    const querySql =
      "SELECT productid, productname, productdescription FROM products WHERE productid = ?";
    const valueParams = [id];
    const data = await query({ query: querySql, values: valueParams });

    res.status(200).json({ products: data });
  } catch (error) {
    // unhide to check error
    // res.status(500).json({ error: error.message });
  }
}
//if needed
// export const config = {
//   api: {
//     externalResolver: true,
//   },
// };

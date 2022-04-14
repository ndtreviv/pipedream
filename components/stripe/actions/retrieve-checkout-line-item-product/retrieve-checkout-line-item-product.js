const stripe = require("../../stripe.app.js");

export default {
  name: "Retrieve Product",
  description: "Retrieve a product by ID. [See the docs](https://stripe.com/docs/api/products/retrieve)",
  key: "stripe-retrieve-product",
  version: "0.0.1",
  type: "action",
  props: {
    stripe,
    product_id: {
      type: "string",
      label: "Product ID",
      description: "A Stripe Product ID. [See the docs](https://stripe.com/docs/api/products/object#product_object-id)",
      optional: false,
    },
  },
  async run ({ $ }) {
    const resp = await this.stripe.sdk().products.retrieve(this.product_id);
    $.export("$summary", `Successfully retrieved the line item product, "${resp.name || resp.id}"`);
    return resp;
  },
};

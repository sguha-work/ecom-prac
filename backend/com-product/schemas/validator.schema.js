export const GetProductValidatorSchema = {
    type: "object",
    properties: {
      page: {type: "integer"},
      limit: {type: "integer"},
    },
    required: ["page", "limit"],
    additionalProperties: true,
  }

import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import user from "./user";
import blog from "./blog";
import reviews from "./reviews";
import shipment from "./shipment";
import team from "./team";
import contact from "./contact";
import enquiry from "./enquiry";
import updatedLocation from "./updatedLocation";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    user,
    blog,
    reviews,
    shipment,
    updatedLocation,
    team,
    contact,
    enquiry,
  ]),
});

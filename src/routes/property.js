import router from "@sitevision/api/common/router";
import properties from "@sitevision/api/server/Properties";
import appData from "@sitevision/api/server/appData";

router.get("/property", (req, res) => {
const{property} = req.params;
const selectedPage = appData.getNode('page');
const value = properties.get(selectedPage, property);


  res.json({ value });
});
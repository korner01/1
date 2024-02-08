import router from "@sitevision/api/common/router";
import portletContextUtil from "@sitevision/api/server/PortletContextUtil";
import properties from "@sitevision/api/server/Properties";



router.get("/mail", (req,res)=>{
  const currenrUser = portletContextUtil.getCurrentUser();

  const mail = properties.get(currenrUser, "mail");

  res.json({mail})
});

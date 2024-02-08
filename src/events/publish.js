import events from "@sitevision/api/common/events";
import mailUtil from "@sitevision/api/server/MailUtil";
import properties from "@sitevision/api/server/Properties";
import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";

events.on("sv:publishing:publish", (options) => {
const pageNode = resourceLocatorUtil.getNodeByIdentifier(options.node);
const emitterNode = resourceLocatorUtil.getNodeByIdentifier(options.emitter);

const emitterName = properties.get(emitterNode, 'displayName');
const pageData = properties.get(pageNode, "displayName", "URL");

const mailBuilder = mailUtil.getMailBuilder();

const mail = mailBuilder
.setSubject(`${pageData.displayName} was published`)
.setHtmlMessage(
    `${emitterName} published <a href = "${pageData.URL}">${pageData.displayName}</a>`

    )
    .addRecipient("magnus.korner@uddevalla.se")
    .build();

    mail.send();


});
import router from "@sitevision/api/common/router";
import storage from "@sitevision/api/server/storage";

const dataStore = storage.getCollectionDataStore("messages");

router.post("/message", (req, res)=>{

    const {message} = req.params;
    
    
    try {
        const post = dataStore.add({message});
        dataStore.instantIndex(post.dsid);
    } catch (error) {
       console.error(`Failed to add message to datastore. Cause ${JSON.stringify(error)}`);
       res.status(400); 
    }

    res.status(200);
});


router.get("/messages", (req, res)=> {
    const options = {
        count: 3,
    };
    const searchResult = dataStore.find("*", options);

    res.json(searchResult.toArray());
});
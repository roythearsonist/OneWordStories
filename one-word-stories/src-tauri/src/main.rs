use serde::{Deserialize, Serialize,ser::Serializer};
use std::env;
use mongodb::{bson::doc, options::ClientOptions, Client};
use futures::stream::StreamExt;
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    
    // Create a mongodb client  using get_mongo_db
    let client = get_mongo_db().await?;
    tauri::Builder::default()
    // This is where you pass in your commands
    .manage(client)
    .invoke_handler(tauri::generate_handler![push_story, create_story,fetch_stories])
    .run(tauri::generate_context!())
    .expect("failed to run app");
    Ok(())
}
async fn get_mongo_db() -> Result<Client, Box<dyn std::error::Error>> {

      let client_options = ClientOptions::parse(&"mongodb+srv://CharlieSimons:<password>@one-word-story.axfep.mongodb.net/test").await?;
      let client = Client::with_options(client_options)?;
      Ok(client)
}

#[tauri::command]
async fn push_story() {
  
  println!("Placeholder for push_story");
}
#[tauri::command]
async fn fetch_stories(client: tauri::State<'_, Client>) -> Result<Vec<Story>, Error> {
    let db = client.database("ows");
    let collection = db.collection("ows-collection");
    let mut cursor = collection.find(None, None).await?;
    let mut vec = Vec::new();
    while let Some(result) = cursor.next().await {
        let doc = result.unwrap();
        let story: Story = mongodb::bson::from_bson(mongodb::bson::Bson::Document(doc))?;
        vec.push(Story {
            title: story.title,
            body: story.body,
        });
    }
    Ok(vec)
}
#[tauri::command]
async fn create_story(){
  println!("Placeholder for create_story");
}

#[derive(Debug, thiserror::Error)]
pub enum Error {
  #[error(transparent)]
  Io(#[from] std::io::Error),
  #[error(transparent)]
  Bson(#[from] mongodb::error::Error),
  #[error(transparent)]
  BsonDecode(#[from] mongodb::bson::de::Error),

}

impl Serialize for Error {
  fn serialize<S>(&self, serializer: S) -> std::result::Result<S::Ok, S::Error>
  where
    S: Serializer,
  {
    serializer.serialize_str(self.to_string().as_ref())
  }
}


#[derive(Deserialize, Serialize)]
struct Story{
    title: String,
    body: Vec<String>,
}

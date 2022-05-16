use serde::{Deserialize};
use std::env;
use mongodb::{bson::doc, options::ClientOptions, Client};
use std::error::Error;
use futures::stream::StreamExt;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    
    // Create a mongodb client  using get_mongo_db
    let client = get_mongo_db().await?;
    let db = client.database("ows");
    let collection = db.collection("ows-collection");
    let mut cursor = collection.find(None, None).await?;
    while let Some(result) = cursor.next().await {
        let doc = result.unwrap();
        let story: Story = mongodb::bson::from_bson(mongodb::bson::Bson::Document(doc))?;

        println!("{}", story.title);
    }
    tauri::Builder::default()
    // This is where you pass in your commands
    .invoke_handler(tauri::generate_handler![push_story, create_story])
    .run(tauri::generate_context!())
    .expect("failed to run app");
    Ok(())
}
async fn get_mongo_db() -> Result<Client, Box<dyn Error>> {

      let client_options = ClientOptions::parse(&"mongodb+srv://CharlieSimons:<password>@one-word-story.axfep.mongodb.net/test").await?;
      let client = Client::with_options(client_options)?;
      Ok(client)
}

#[tauri::command]
async fn push_story() {
  
  println!("Placeholder for push_story");
}
#[tauri::command]
async fn create_story(){
  println!("Placeholder for create_story");
}


#[derive(Deserialize)]
struct Story{
    title: String,
    body: Vec<String>,
}

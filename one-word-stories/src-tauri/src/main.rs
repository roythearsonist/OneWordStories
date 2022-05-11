fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![push_story])
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
#[tauri::command]
fn push_story() {
  println!("I was invoked from JS!");
}
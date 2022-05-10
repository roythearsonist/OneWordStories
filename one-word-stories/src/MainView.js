
import './MainView.css';
import { invoke } from '@tauri-apps/api/tauri'

function MainView() {
  return (
    <div className="MainView">
      <div className='MainView-container'>
        <h1>One Word Stories</h1>
        <button className='add-story-button' onClick=
          {() => {
            invoke('push_story')
          }}>
          </button>
        

        </div>
    </div>
  );
}

export default MainView;

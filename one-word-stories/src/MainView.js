
import './MainView.css';
import { invoke } from '@tauri-apps/api/tauri'
import {Card} from './Components'

function MainView() {
  return (
    <div className="MainView">
      <div className='MainView-container'>
        <button className='add-story-button' onClick=
          {() => {
            invoke('push_story')
          }}>+
          </button>
        <div className='content-grid-container'>
          <div className='content-grid'>

          <Card title="test" text="testtttt"></Card>
          </div>
        </div>

        </div>
    </div>
  );
}

export default MainView;
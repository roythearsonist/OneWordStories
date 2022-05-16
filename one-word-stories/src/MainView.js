
import './MainView.css';
import {Card} from './Components'
import { invoke } from '@tauri-apps/api/tauri'
function MainView() {
  return (
    <div className="MainView">
      <div className='MainView-container'>
        <button className='add-story-button button' onClick={() => {
          invoke('api_call_test')
        }}>+</button>
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

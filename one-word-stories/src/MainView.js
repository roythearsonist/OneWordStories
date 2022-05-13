
import './MainView.css';
import {Card} from './Components'

function MainView() {
  return (
    <div className="MainView">
      <div className='MainView-container'>
        <button className='add-story-button button'>+</button>
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


import './MainView.css';
import {Card, Modal} from './Components'

function MainView() {
  return (
    <div className="MainView">
      <div className='MainView-container'>
        <Modal></Modal>
        <button className='add-story-button' ></button>
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

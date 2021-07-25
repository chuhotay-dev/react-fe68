import './App.css';
import FunctionalComponent from './lesson-1/demo-component/FunctionalComponent';
import ClassBasedComponent from './lesson-1/demo-component/ClassBasedComponent';
import Header from './lesson-1/exercise-component/exercise-1/Header';
import Courses from './lesson-1/exercise-component/exercise-1/Courses';
import HomeExercise2 from './lesson-1/exercise-component/exercise-2/HomeExercise2';
import HomeExercise3 from './lesson-1/exercise-component/exercise-3/HomeExercise3';
import DemoDataBinding from './lesson-1/data-binding/DemoDataBinding';
import DemoHandlingEvents from './lesson-2-3/handling-events/DemoHandlingEvents';
import DemoConditionalRendering from './lesson-2-3/conditional-rendering/DemoConditionalRendering';
import DemoState from './lesson-2-3/state/DemoState';
import DemoStylingComponent from './lesson-2-3/styling-component/DemoStylingComponent';
import PickCarColor from './lesson-2-3/pick-car-color/PickCarColor';
import DemoListsAndKeys from './lesson-2-3/lists-and-keys/DemoListsAndKeys';
import Main from './lesson-4/demo-props/Main';

const App = () => {
  return (
    <div className="App">
      {/* Demo Component */}
      {/* <ClassBasedComponent />
        <FunctionalComponent /> */}

      {/* Exercise 1 - Component */}
      {/* <Header />
        <Courses /> */}

      {/* Exercise 2 - Component */}
      {/* <HomeExercise2 /> */}

      {/* Exercise 3 - Component */}
      {/* <HomeExercise3 /> */}

      {/* Data Binding */}
      {/* <DemoDataBinding /> */}

      {/* Handling Events */}
      {/* <DemoHandlingEvents /> */}

      {/* Conditional Rendering */}
      {/* <DemoConditionalRendering /> */}

      {/* State */}
      {/* <DemoState /> */}

      {/* Styling Component */}
      {/* <DemoStylingComponent /> */}

      {/* Pick Car Color */}
      {/* <PickCarColor /> */}

      {/* Lists And Keys */}
      {/* <DemoListsAndKeys /> */}

      {/* Props */}
      <Main />

    </div>
  );
};

export default App;
